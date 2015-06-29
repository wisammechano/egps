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
		<img src="<?php echo PATH_IMG.'/banner.png'?>" alt="EGPS Portal">
		<h3><b><?php $ph->P('welcomemessage');?></b></h3>
	</div>
	<div class="container">