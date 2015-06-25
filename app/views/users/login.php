<?php 

$loginform = array(	
			'form'	=> array(	'id'		=> 'loginform',
							'class'	=> 'form-horizontal',
							'name'	=> 'loginform',
							'method' 	=> 'post',
							'action'	=> 'login'),

			'input-1'	=> array(	'id'		=> '',
							'type'	=> 'hidden',
							'name'	=> 'login',
							'value'	=> ''),
			
			'input-2'	=> array(	'id'		=> 'inputUserName',
							'type'	=> 'text',
							'class'	=> 'inputbox required',
							'name'	=> 'username',
							'label'	=> 'User Name:'),
			
			'br'		=> array(),

			'br-2'		=> array(),
										
			'input-3'	=> array(	'id'		=> 'inputPassword',
							'type'	=> 'password',
							'class'	=> 'inputbox required',
							'name'	=> 'password',
							'label'	=> 'Password:'),

			'br-3'		=> array(),

			'br-4'		=> array(),

			'input-4'	=> array( 'id'		=> 'formSubmit',
							'type'	=> 'submit',
							'class'	=> 'submit',
							'name' 	=> 'submit',
							'value'	=> 'Login')
			);
			
		
echo $html->block($loginform);

/*
<form id="loginform" class="form-horizontal" name="loginform" method="post" action="login">
<input type="hidden" name="loginform" value="loginform" />
<label>Username: <input type="text" class="inputbox required" name="username" maxlength="15"/> </label>
<label><br /> Password: <input type="password" class="inputbox required" name="password" maxlength="20"/> </label>
<br/> <input name="submit" value="submit" type="submit" />
</form>

*/

?>