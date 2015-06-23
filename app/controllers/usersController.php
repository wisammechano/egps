<?php

class UsersController extends VanillaController {
	//var $model;
	function beforeAction () {
		//var_dump($this->model);
	}
	
	function login($categoryId = null) {
		if (isset($_POST['loginform'])) {
			$username = $_POST['username'];
			$password = $_POST['password'];
			$this->_model->select('id, password');
			$this->_model->where(array('username'=> $username));
			$res = $this->_model->execute();
			$hash = $res[0]['User']['password'];
			if(password_verify($password, $hash)) {
				session_start();
				$_SESSION['userID'] = $res[0]['User']['id'];
				$_SESSION['userName'] = $username;
				redirect('/');	
			}
			else echo 'Wrong Password'	;	
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

	function register() {
		if (isset($_POST['regform'])) {
			$options = [
    						'cost' => 12,
    						'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),
						];
			$data = array(
			'ip' => $_SERVER['REMOTE_ADDR'],
			'username' => $_POST['username'],
			'password' => password_hash($_POST['password'], PASSWORD_BCRYPT, $options),
			'email' => $_POST['email']);
			$this->_model->insert($data);
			//$this->_model->where(array('id' => 2));
			$this->_model->execute();
		}
	
	}
	
	
	function afterAction() {

	}	
	
	
	
}
