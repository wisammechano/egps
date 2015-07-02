<?php $ph->setSection(__FILE__);?>
<h3><?php $ph->P('head')?></h3>
<hr class="hr-condensed">
<div class="row pull-right emphasize">
	<div class="col-xs-12">
		<h4><?php $ph->P('registered');?> <span>   <a href="./login" class="btn btn-success btn-sm"><?php $ph->P('login');?></a></span></h4>
	</div>
</div>
<div class="register-box">
<form id="regForm" class="form-horizontal validate" name="registrationform" method="post" action="" novalidate="novalidate">
	<input type="hidden" name="regform" value="regform">
	<div class="form-group"></div>
	<div class="form-group">
	<?php $c="";if(!empty($errors)): ?>
		<div class="alert alert-danger alert-sm" role="alert">
			<ul class="">
				<?php foreach($errors as $item => $error):?>
				<li><?php echo $item . ': '.$error;?></li>
				<?php endforeach;?>
			</ul>
		</div>
	<?php $c="has-error"; endif; ?>	
	</div>
	<div class="form-group required">
		<label for="inputFName" class="col-sm-5 control-label"><?php $ph->P('fname');?></label>
		<div class="col-sm-7">
			<input type="text" class="form-control" name="fname" id="inputFName" autocomplete="off" <?php $this->fill('fname');?> placeholder="<?php $ph->P('fname');?>">
		</div>
	</div>
	
	<div class="form-group required">
		<label for="inputLName" class="col-sm-5 control-label"><?php $ph->P('lname');?></label>
		<div class="col-sm-7">
			<input type="text" class="form-control" name="lname" id="inputLName" autocomplete="off" <?php $this->fill('lname');?> placeholder="<?php $ph->P('lname');?>">
		</div>
	</div>
		
	<div class="form-group check has-feedback required">
		<label for="inputUsername" class="col-sm-5 control-label"><?php $ph->P('username');?></label>
		<div class="col-sm-7">
			<input type="text" class="form-control" name="username" id="inputUsername" autocomplete="off" <?php $this->fill('username');?> placeholder="<?php $ph->P('username');?>">
		</div>
	</div>

	<div class="form-group required">
		<label for="inputPassword" class="col-sm-5 control-label"><?php $ph->P('password');?></label>
		<div class="col-sm-7">
			<input type="password" class="form-control" name="password" id="inputPassword" <?php $this->fill('password');?> placeholder="<?php $ph->P('password');?>">
		</div>
	</div>
	
	<div class="form-group required">
		<label for="inputPasswordC" class="col-sm-5 control-label"><?php $ph->P('passwordconfirm');?></label>
		<div class="col-sm-7">
			<input type="password" class="form-control" name="passwordC" id="inputPasswordC" <?php $this->fill('passwordC');?> placeholder="<?php $ph->P('passwordconfirm');?>">
		</div>
	</div>
	<hr class="hr-condensed">
	<div class="form-group required">
		<label for="inputBDate" class="col-sm-5 control-label"><?php $ph->P('bday');?></label>
		<div class="col-sm-7">
			<input type="tel" style="width:130px;" class="form-control" name="birthdate" id="inputBDate" <?php $this->fill('birthdate');?> pattern="[0-9]*" maxlength="14" autocomplete="off" placeholder="DD / MM / YYYY">
		</div>
	</div>		

	<div class="form-group check has-feedback required">
		<label for="inputEmID" class="col-sm-5 control-label"><?php $ph->P('employmentID');?></label>
		<div class="col-sm-7">
			<input type="tel" class="form-control" name="employmentID" id="inputEmID" autocomplete="off" <?php $this->fill('employmentID');?> placeholder="<?php $ph->P('employmentID');?>">
		</div>
	</div>	
	
	<div class="form-group check has-feedback required">
		<label for="inputEmail" class="col-sm-5 control-label"><?php $ph->P('email');?></label>
		<div class="col-sm-7">
			<input type="email" class="form-control" name="email" id="inputEmail" autocomplete="off" <?php $this->fill('email');?> placeholder="<?php $ph->P('email');?>">
		</div>
	</div>	
	
	<!--<input type="hidden" name="mobile" id="mobileHidden" value="">-->
	<div class="form-group required">
		<label for="inputMobile" class="col-sm-5 control-label"><?php $ph->P('mobile');?></label>
		<div class="col-sm-7">
			<input type="tel" class="form-control" name="mobile" maxlength="20" id="inputMobile" autocomplete="off" <?php $this->fill('mobile');?> placeholder="<?php $ph->P('mobile');?>">

<!--			<div class="input-group">
opcode			<?php //if($rtl): ?>
				<input type="tel" class="form-control" name="mobileN" maxlength="8" id="inputMobileN" autocomplete="off" placeholder="<?php //$ph->P('mobile');?>" dir="ltr">
				<?php //endif; ?>
				<div class="input-group-btn">
					<button type= "button" id="inputMobOp" name="mobOp" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span> Code</button>
					<ul class="dropdown-menu">
						<li><a onclick="document.getElementById('inputMobOp').innerHTML ='075'">075</a></li>
						<li><a onclick="document.getElementById('inputMobOp').innerHTML ='077'">077</a></li>
						<li><a onclick="document.getElementById('inputMobOp').innerHTML ='078'">078</a></li>
						<li><a onclick="document.getElementById('inputMobOp').innerHTML ='079'">079</a></li>
					</ul>
				</div>
				<?php //if(!$rtl): ?>
				<input type="tel" class="form-control" name="mobileN" maxlength="8" id="inputMobileN" autocomplete="off" placeholder="<?php //$ph->P('mobile');?>">
				<?php //endif; ?>
			</div>
-->
		</div>
	</div>

	<div class="form-group required"> 
		<label for="inputDepartment" class="col-sm-5 control-label"><?php $ph->P('department')?></label>
		<div class="col-sm-7">
				<select id="inputDepartment" class="selectpicker form-control" name="department">
				<option value="">Please Select</option>
				<?php foreach($departments as $dept): ?>
				<option value="<?php echo $dept['id'];?>" <?php $this->fill('department', 1, $dept['id']);?>><?php echo $dept['name'];?></option>
				<?php endforeach; ?>
				</select>
		</div>
	</div>
	
	<div class="form-group required"> 
		<label for="inputPosition" class="col-sm-5 control-label"><?php $ph->P('position')?></label>
		<div class="col-sm-7">
				<select id="inputPosition" class="selectpicker form-control" name="position">
				<option value="">Please Select</option>
				<?php foreach($positions as $pos): ?>
				<option value="<?php echo $pos['id'];?>" <?php $this->fill('position', 1, $pos['id']);?>><?php echo $pos['name'] . ' - ' . $pos['title'];?></option>
				<?php endforeach; ?>
				</select>
		</div>
	</div>

	<div class="form-group required"> 
		<label for="inputGroup" class="col-sm-5 control-label"><?php $ph->P('group')?></label>
		<div class="col-sm-7">
				<select id="inputGroup" class="selectpicker form-control" name="group">
				<option value="">Please Select</option>
				<?php foreach($groups as $grp): ?>
				<option value="<?php echo $grp['id'];?>" <?php $this->fill('group', 1, $grp['id']);?>><?php echo $grp['name'];?></option>
				<?php endforeach; ?>
				</select>
		</div>
	</div>
	
	<div class="form-group required"> 
		<label for="inputCountry" class="col-sm-5 control-label"><?php $ph->P('country')?></label>
		<div class="col-sm-7">
				<select id="inputCountry" class="selectpicker form-control" name="country">
				<option value="">Please Select</option>
				<?php $countries = unserialize(COUNTRIES); foreach($countries as $code => $name): ?>
				<option value="<?php echo $code;?>"  <?php $this->fill('country', 1, $code);?>><?php echo $name;?></option>
				<?php endforeach; ?>
				</select>
		</div>
	</div>

	<div class="form-group required">
		<label for="inputAddress" class="col-sm-5 control-label"><?php $ph->P('address');?></label>
		<div class="col-sm-7">
			<input type="text" class="form-control" name="address" id="inputAddress" autocomplete="off" <?php $this->fill('address');?> placeholder="<?php $ph->P('address');?>">
		</div>
	</div>	
		
	<div class="form-group"></div>
	<div class="form-group row">
		<div class="col-xs-6 col-xs-offset-6">
			<input name="submit" class="btn btn-primary" value="<?php $ph->P('submit');?>" type="submit">
			<input class="btn btn-warning" value="<?php $ph->P('reset');?>" type="reset">
		</div>
	</div>
</form>
</div> <!--main-box-->