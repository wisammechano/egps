<?php 
$rtl=0;
$lang = $rtl? 'ar-iq':'en-us';
$ph->setLang($lang);
$ph->setSection(__FILE__);
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-us" lang="<?php echo $lang.'" '; if($rtl) echo 'dir="rtl"';?>>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<?php echo $html->includeCss("bootstrap");?>
<?php if($rtl)echo $html->includeCss("bootstrap-rtl");?>
<?php echo $html->includeCss("jquery-ui");?>
<?php echo $html->includeCss("main");?>
<?php echo $html->includeJs("jquery");?>
<?php echo $html->includeJs("jquery-ui");?>
<?php echo $html->includeJs("bootstrap");?>
<?php echo $html->includeJs("main");?>
<title><?php $ph->P('title');?></title>
<link rel="shortcut icon" type="image/png" href="<?php echo BASE_PATH.'/favicon.png'?>">
</head>

<body>
<div class="wrapper">
	<div class="header">
		<?php /*<nav class="navbar navbar-default">
		  <div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <a class="navbar-brand" href="#">Brand</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			  <ul class="nav navbar-nav">
				<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
				<li><a href="#">Link</a></li>
				<li class="dropdown">
				  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
				  <ul class="dropdown-menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="#">Separated link</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="#">One more separated link</a></li>
				  </ul>
				</li>
			  </ul>
			  <form class="navbar-form navbar-left" role="search">
				<div class="form-group">
				  <input type="text" class="form-control" placeholder="Search">
				</div>
				<button type="submit" class="btn btn-default">Submit</button>
			  </form>
			  <ul class="nav navbar-nav navbar-right">
				<li><a href="#">Link</a></li>
				<li class="dropdown">
				  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
				  <ul class="dropdown-menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="#">Separated link</a></li>
				  </ul>
				</li>
			  </ul>
			</div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
	*/?>
		<img src="<?php echo PATH_IMG.'/banner.png'?>" alt="EGPS Portal">
		<h3><b><?php $ph->P('welcomemessage');?></b></h3>
	</div>
	<div class="container">