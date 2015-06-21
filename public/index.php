<?php


define('APP', 'EGPS');
define('APP_VER', '1.0.0');
define('DEVELOPER', 'Wisam Naji');

define('ROOT', dirname(getcwd()));
define('DS', DIRECTORY_SEPARATOR);

if (!defined('APP_CONSTANTS')) {
	include(ROOT.'/conf/config.php');
}

if (DEV_ENV == true) {
	error_reporting(E_ALL);
	ini_set('display_errors', 1);
} else {
	error_reporting(E_ALL);
	ini_set('display_errors', 0);
	ini_set('log_errors', 1);
	ini_set('track_errors', 1);
	ini_set('error_log', ROOT.DS.'tmp'.DS.'logs'.DS.'error.log');
}




require_once('/bootstrap.php');


