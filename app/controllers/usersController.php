<?php

class UsersController extends VanillaController {
	//var $model;
	function beforeAction () {
		$this->_ph->setLang('en-us');
		$this->_ph->setSection('error');
	}
	
	function login() {
		if (isset($_POST['loginform'])) {
			$login = strtolower($_POST['username']);
			$item = is_numeric($login)? 'employmentid':'username';
			$password = $_POST['password'];
			$this->_model->select('id, username, employmentid, password, lang');
			$this->_model->where(array($item => $login));
			$res = $this->_model->execute();
			if($res) {
				//print_r($res);
				$hash = $res['password'];
				if(password_verify($password, $hash)) {
						
					// Password is correct!
					// Get the user-agent string of the user.				
					$userBrowser = $_SERVER['HTTP_USER_AGENT'];
					// Prevent XXS As we might print this value
					$userID = preg_replace("/[^0-9]+/", "", $res['id']);
					
					sec_session_start();
					$_SESSION['userID'] = $userID;
					$_SESSION['userName'] = $res['username'];
					$_SESSION['userEID'] = $res['employmentid'];
					$_SESSION['lang'] = $res['lang']; //set language/////////////////
					$_SESSION['loginString'] = hash('sha512', $hash . $userBrowser);
					$r = isset($_GET['r']) ? $_GET['r']:'/jj';
					redirect($r);	
					}
				else {
					$this->setError('Error', $this->_ph->Pr('wrongpassword'));
				}
			}
			else $this->setError('Error', $this->_ph->Pr('wrongpassword'));	
		}

	}
	
	
	function logout() {
		// Unset all session values 
		$_SESSION = array();

		// get session parameters 
		$params = session_get_cookie_params();

		// Delete the actual cookie. 
		setcookie(session_name(),'', time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);

		// Destroy session 
		sec_session_start();
		session_destroy();
		$_SESSION = array();
		redirect('/');
	}
	
	function validate($items = array(), $ajax=true) {
		$error = '';
		// Handle Ajax Requests //
		if($ajax && empty($items)){
			$this->render = 0;	
			if(!empty($_GET)) $items = $_GET;
			else {
				$error = $this->_ph->Pr('ajaxerror');
				$return=json_encode(array('valid'=>false, 'msg'=>$error));
				echo $return;
				return false;
			}
					
		}
		
		$item = key($items);
		$value = $items[$item];
		
		if(empty($value)) {
			$error = $this->_ph->Pr('emptyvalue');
			$return= array('valid'=>false, 'msg'=>$error);
			if($ajax) {echo json_encode($return); return false;}
			else return $error;
		}
		$item=strtolower($item);
		$value=strtolower($value);
		// Scheme Validation //
		$patterns = array(	'username' => '/^(?:[a-z][a-z0-9]*(?:([._])(?!\1)[a-z0-9]+)*){5,20}$/i',
							'email' => '/^[a-z]+[a-z0-9_.-]*[a-z0-9]+\@(?:[a-z0-9-]+\.)+[a-z0-9]{2,4}+$/i',
							'employmentid' => '/^[0-9]{1,5}$/',
							'mobile' => '/^\+?[0-9]{10,20}$/'
							);
		if(!array_key_exists($item, $patterns)) return false;
		if(!preg_match($patterns[$item], $value)) {
			//echo 'preg';
			$error = $this->_ph->Pr('invalid'.$item);
			$return= array('valid'=>false, 'msg'=>$error);
			if($ajax) {echo json_encode($return); return false;}
			else return $error;
		}
		
		$this->_model->select('id');
		$this->_model->where(array($item => $value));
		$res = $this->_model->execute();
		if($res) {
			$error = $this->_ph->Pr('wrong'.$item);
			$return= array('valid'=>false, 'msg'=>$error);
			if($ajax) {echo json_encode($return); return false;}
			else return $error;
		}
		$return = array('valid' => true);
		if($ajax) {echo json_encode($return); return true;}
		else return true;		
	}
	
	function register() {
		if (isset($_POST['regform'])) {
			$options = [
    						'cost' => 12,
    						'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),
						];
			$fname				=ucwords($_POST['fname']);	
			$lname				=ucwords($_POST['lname']);			
			
			$username			= strtolower($_POST['username']);
			$valid = $this->validate(array('username' => $username), 0);
			if($valid !== true) $this->setError('Username', $valid);
			
			$password			= $_POST['password'];
			$password_confirm 	= $_POST['passwordC'];
			if ($password_confirm !== $password) $this->setError('Password', $this->_ph->Pr('passwordnomatch'));
			
			$bdate				= str_replace(' ', '', $_POST['birthdate']);
			$bdate 				= explode('/', $bdate);
			if(!empty($bdate[0])) {if($bdate[2] > (int)date('Y') - 20) $this->setError('Birthdate', $this->_ph->Pr('youngbirthdate'));}
			$bdate				= implode('-',$bdate);
			$bdate 				= date_create($bdate);
			$warn = date_get_last_errors();
			if($warn['warning_count'] > 0) $this->setError('Birthdate', $this->_ph->Pr('invaliddate'));
			if(!$bdate) $this->setError('Birthdate', $this->_ph->Pr('invaliddate'));
			if($bdate) $bdate				= date_format($bdate, 'Y-m-d');
			
			$eid 			= $_POST['employmentID'];
			$valid = $this->validate(array('employmentid' => $eid), 0);
			if($valid !== true) $this->setError('Employment ID', $valid);
			
			$email 			= strtolower($_POST['email']);
			$valid = $this->validate(array('email' => $email), 0);
			if($valid !== true) $this->setError('Email', $valid);
			
			$mobile			= $_POST['mobile'];
			
			$dept			= $_POST['department'];
			
			$position			= $_POST['position'];
			
			$group			= $_POST['group'];
			
			$origin			= $_POST['country'];
			$address			= $_POST['address'];
			
			
 			if($this->_hasError == false) { 
				$data = array(
				'fname'		=> $fname,
				'lname'		=> $lname,
				'username'	=> $username,
				'password'	=> password_hash($password, PASSWORD_BCRYPT, $options),
				'birthdate'	=> $bdate,
				'employmentid' => $eid,
				'email' 		=> $email,
				'mobile'		=> $mobile,
				'departmentid'	=> $dept,
				'positionid' 	=> $position,
				'groupid' 	=> $group,
				'country'		=> $origin,
				'address'		=> $address);
				$this->_model->insert($data);
				echo $this->_model->execute();
			}
 		}
		$this->_model->from('departments');
		$this->_model->select('id, name');
		$depts = $this->_model->execute();
		//print_r($depts);
		$this->set('departments', $depts);
		
		$this->_model->from('positions');
		$this->_model->select('id, name');
		$this->_model->where('level > 4');
		$positions=$this->_model->execute();
		//print_r($positions);
		$this->set('positions', $positions);
		
		$this->_model->from('groups');
		$this->_model->select('id, name');
		$groups=$this->_model->execute();
		//print_r($groups);
		$this->set('groups', $groups);	
	}
	
	
	function afterAction() {

	}	
	
	
	
}
