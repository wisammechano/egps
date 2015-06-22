<?php

class AuthorizationController extends VanillaController {
	
	function beforeAction () {
		$this->Authorization->setTable('users');
	}
	
	function login($categoryId = null) {
		if (isset($_POST['loginform'])) {
			$username = $_POST['username'];
			$password = $_POST['password'];
			$this->Authorization->select('password');
			$this->Authorization->where(array('username'=> $username));
			$res = $this->Authorization->execute();
			$hash = $res[0]['User']['password'];
			if(password_verify($password, $hash)) echo 'Valid!';			
		}
		//$this->Authorization->where('parent_id',$categoryId);
		//$this->Category->showHasOne();
		//$this->Category->showHasMany();
//		$subcategories = $this->Category->search();
//		
//		$this->Category->id = $categoryId;
//		$this->Category->showHasOne();
//		$this->Category->showHasMany();
//		$category = $this->Category->search();
//	
//		$this->set('subcategories',$subcategories);
//		$this->set('category',$category);

	}
	
	
	function logout() {
		$this->Category->orderBy('name','ASC');
		$this->Category->showHasOne();
		$this->Category->showHasMany();
		$this->Category->where('parent_id','0');
		$categories = $this->Category->search();
		$this->set('categories',$categories);
	
	}

	function register() {
		if (isset($_POST['regform'])) {
			$options = [
    						'cost' => 12,
    						'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),
						];
			$ip = $_SERVER['REMOTE_ADDR']; // this will get user’s IP address
			$username = $_POST['username'];
			$password = password_hash($_POST['password'], PASSWORD_BCRYPT, $options);
			$email = $_POST['email'];
			$this->Authorization->custom("insert into users set
			ip='$ip',
			username='$username',
			password='$password',
			email='$email',
			added=now()");
		}
	
	}
	
	
	function afterAction() {

	}	
	
	
	
}