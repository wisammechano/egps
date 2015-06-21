<?php

require_once(PATH_CONFIG.'/routing.php');
require_once(PATH_CONFIG.'/inflection.php');
require_once(PATH_LIB.'/shared.php');

if ( get_magic_quotes_gpc() ) {
	$_REQUEST	= stripSlashesDeep($_REQUEST);
	$_GET    	= stripSlashesDeep($_GET   );
	$_POST   	= stripSlashesDeep($_POST  );
	$_COOKIE 	= stripSlashesDeep($_COOKIE);
}