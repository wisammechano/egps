<?php $ph->setSection(__FILE__);?>
<div class="login-box">
<?php $c="";if(!empty($errors)): ?>
	<div class="alert alert-danger alert-sm" role="alert">
		<ul class="">
			<?php foreach($errors as $item => $error):?>
			<li><?php echo $item . ': '.$error;?></li>
			<?php endforeach;?>
		</ul>
	</div>
<?php $c="has-error"; endif; ?>
	<form id="loginForm" class="validate" name="loginform" method="post" action="login<?php if(isset($_GET['r'])) echo '?r='. S($_GET['r']);?>">
		<input type="hidden" name="loginform" value="loginform">
		<div class="form-group <?php echo $c; ?> form-group-lg required">
			<label for="usernameInput" class="control-label"><?php $ph->P('username');?> </label>
			<input id="usernameInput" type="text" class="form-control" name="username" placeholder="<?php $ph->P('username');?>">
		</div>
		<div class="form-group <?php echo $c; ?> form-group-lg required">
			<label for="passwordInput" class="control-label"><?php $ph->P('password');?> </label>
			<input id="passwordInput" type="password" class="form-control" name="password" placeholder="<?php $ph->P('password');?>">
		</div>
		<div dir="<?php if(!$rtl): echo 'rtl'; else: echo 'ltr'; endif;?>"><input type="submit" id="loginSubmit" class="btn btn-primary" value="<?php $ph->P('submit');?>"></div>
	</form>
	<hr class="hr-condensed">
</div>
<div class="login-foot">
	<div class="row">
		<div class="col-sm-7"><h4><?php $ph->P('notregistered');?></h4></div>
		<div class="col-sm-5"><a class="btn btn-success" href="./register"><?php $ph->P('register');?></a></div>
	</div>
</div>