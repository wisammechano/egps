<?php

/*
THIS FILE CONTAINS ALL THE CONSTANTS FOR THE APPLICATION
*/

//		DATABASE

define('PATH_LIB', ROOT.'/lib');
define('PATH_APP', ROOT.'/app');
define('VIEWS', PATH_APP.'/views');
define('PATH_PLUGINS', ROOT.'/plugins');
define('PATH_DB', ROOT.'/db');
define('PATH_CONFIG', ROOT.'/conf');
define('PATH_LOGS', ROOT.'/tmp/logs');
define('PATH_SESSIONS', ROOT.'/tmp/sessions');
define('PATH_CACHE', ROOT.'/tmp/cache');
define('PATH_PUBLIC', ROOT.'/public');
define('PATH_LANG', PATH_APP.'/lang');
//define('PATH_JS', PATH_PUBLIC.'/js');
//define('PATH_IMG', PATH_PUBLIC.'/img');
//define('PATH_CSS', PATH_PUBLIC.'/css');

define('APP_DIR', substr(ROOT, strrpos(ROOT, DS)+1));
define('BASE_PATH', ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ?  "https" : "http") . '://' . $_SERVER['HTTP_HOST']. '/' . APP_DIR);
define('PATH_JS', BASE_PATH.'/js');
define('PATH_IMG', BASE_PATH.'/img');
define('PATH_CSS', BASE_PATH.'/css');
//		DATABASE

define('DB_NAME', 'test');
define('DB_USER', 'root');
define('DB_PASSWORD', '823311');
define('DB_HOST', 'localhost');

//		ENVIRONMENT


define('DEV_ENV', 1);

define('APP_CONSTANTS', 1);