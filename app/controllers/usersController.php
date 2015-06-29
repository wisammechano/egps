<?php

class UsersController extends VanillaController {
	//var $model;
	function beforeAction () {
		$this->_ph->setLang('en-us');
		$this->_ph->setSection('error');
	}
	
	function login() {
		if (isset($_POST['loginform'])) {
			$username = $_POST['username'];
			$item = is_numeric($username)? 'eid':'username';
			$password = $_POST['password'];
			$this->_model->select('id, username, eid, password, lang');
			$this->_model->where(array($item => $username));
			$res = $this->_model->execute();
			if($res) {
				$hash = $res['password'];
				if(password_verify($password, $hash)) {
				session_start();
				$_SESSION['userID'] = $res['id'];
				$_SESSION['userName'] = $res['username'];
				$_SESSION['userEID'] = $res['eid'];
				$_SESSION['lang'] = $res['lang']; //set language/////////////////
				redirect('/');	
				}
				else {
					$this->set('error', $this->_ph->Pr('wrongpassword'));
				}
			}
			else $this->set('error', $this->_ph->Pr('wrongpassword'));
			
				
		}

	}
	
	
	function logout() {
		session_start();

		// Unset all of the session variables.
		$_SESSION = array();
	
		// If it's desired to kill the session, also delete the session cookie.
		// Note: This will destroy the session, and not just the session data!
		if (ini_get("session.use_cookies")) {
			$params = session_get_cookie_params();
			setcookie(session_name(), '', time() - 42000,
			$params["path"], $params["domain"],
			$params["secure"], $params["httponly"]
			);
		}

		// Finally, destroy the session.
		session_destroy();
		redirect('/users/login');
	}
	function validate($items = array(), $wOEcho=false) { //wide validation///////////////////////////
		$this->render=0;
		if(!empty($items)) {
			//print_r($_GET);
			$item = key($items);
			$value = $items[$item];
			$wOEcho=true;
		}

		if(!empty($_GET)) {
			//print_r($_GET);
			$item = key($_GET);
			$value = $_GET[$item];
		}
		if(empty($value)) return false;
		$error = '';
		$this->_model->select('id');
		$this->_model->where(array($item => $value));
		$res = $this->_model->execute();
		if ($res) {
			switch ($item) {
				case ('username') :
					$error = $this->_ph->Pr('wrongusername');
					break;
		
				case ('eid') :
					$error = $this->_ph->Pr('wrongemploymentid');
					break;
					
				case ('email') :
					$error = $this->_ph->Pr('wrongemail');
					break;
					
				default :
					$error = $this->_ph->Pr('unknownerror');
					break;
			}
			$return = array('valid'=>!(bool)'false', 'msg' => $error);
			$jsonRes = json_encode($return);
			if (!$wOEcho) echo $jsonRes;
			return false;
		}
		if (!$wOEcho) echo json_encode(array('valid' => 'true'));
		return true;
	
	}
	
	
	function register() {
		if(!isset($_POST['regform'])) {
			$this->_model->from('departments');
			$this->_model->select('id, name');
			$depts = $this->_model->execute();
			//print_r($depts);
			$this->set('departments', $depts);
			
			$this->_model->from('positions');
			$this->_model->select('id, name, title');
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
		if (isset($_POST['regform'])) {
			$options = [
    						'cost' => 12,
    						'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),
						];
			$fname			=$_POST['fname'];	
			$lname			=$_POST['lname'];			
			$username			= $_POST['username'];
			if(!$this->validate(array('username' => $username))) {echo 'errorUser'; exit;}
			$password			= $_POST['password'];
			$password_confirm 	= $_POST['passwordC'];
			if ($password_confirm !== $password) {echo 'errorP'; exit;}
			$bdate 			= date_create($_POST['birthdate']);
			$bdate			= date_format($bdate, 'd-m-Y');
			$eid 			= $_POST['employmentID'];
			if(!$this->validate(array('employmentid' => $eid))) {echo 'errorEID'; exit;}			
			$email 			= $_POST['email'];
			if(!$this->validate(array('email' => $email))) {echo 'errorMAil'; exit;}						
			$mobile			= $_POST['mobile'];
			$dept			= $_POST['department'];
			$position			= $_POST['position'];
			$group			= $_POST['group'];
			$origin			= $_POST['country'];
			$address			= $_POST['address'];
			
			
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
			//$this->_model->where(array('id' => 2));
			echo $this->_model->execute();
		}
	
	}
	
	
	function afterAction() {

	}	
	
	
	
}
