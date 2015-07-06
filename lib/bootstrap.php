<?php

function stripSlashesDeep($value) {
	$value = is_array($value) ? array_map('stripSlashesDeep', $value) : stripslashes($value);
	return $value;
}

if ( get_magic_quotes_gpc() ) {
	$_REQUEST	= stripSlashesDeep($_REQUEST);
	$_GET    	= stripSlashesDeep($_GET   );
	$_POST   	= stripSlashesDeep($_POST  );
	$_COOKIE 	= stripSlashesDeep($_COOKIE);
}

require_once(PATH_CONFIG.'/routing.php');
require_once(PATH_CONFIG.'/inflection.php');
//require_once(PATH_LIB.'/functions.php');
require_once(PATH_LIB.'/shared.php');