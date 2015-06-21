<?php

function stripSlashesDeep($value) {
	$value = is_array($value) ? array_map('stripSlashesDeep', $value) : stripslashes($value);
	return $value;
}

function unregisterGlobals() {
    if (ini_get('register_globals')) {
        $array = array('_SESSION', '_POST', '_GET', '_COOKIE', '_REQUEST', '_SERVER', '_ENV', '_FILES');
        foreach ($array as $value) {
            foreach ($GLOBALS[$value] as $key => $var) {
                if ($var === $GLOBALS[$key]) {
                    unset($GLOBALS[$key]);
                }
            }
        }
    }
}

/** Secondary Call Function **/

function performAction($controller,$action,$queryString = null,$render = 0) {
	
	$controllerName = ucfirst($controller).'Controller';
	$dispatch = new $controllerName($controller,$action);
	$dispatch->render = $render;
	return call_user_func_array(array($dispatch,$action),$queryString);
}

/** Routing **/

function routeURL($url) {
	global $routing;

	foreach ( $routing as $pattern => $result ) {
            if ( preg_match( $pattern, $url ) ) {
				return preg_replace( $pattern, $result, $url );
			}
	}

	return ($url);
}


/** Main Call Function **/

//$url = isset($_GET['url'])? $_GET['url']:null;

function callHook() {
	global $url;
	global $default;

	$queryString = array();

	if (!isset($url)) {
		$controller = $default['controller'];
		$action = $default['action'];
	} else {
		$url = routeURL($url);
		$urlArray = array();
		$urlArray = explode("/",$url);
		$controller = $urlArray[0];
		array_shift($urlArray);
		if (isset($urlArray[0])) {
			$action = $urlArray[0];
			array_shift($urlArray);
		} else {
			$action = 'index'; // Default Action
		}
		$queryString = $urlArray;
	}
	
	$controllerName = ucfirst($controller).'Controller';

	$dispatch = new $controllerName($controller,$action);
	
	if ((int)method_exists($controllerName, $action)) {
		call_user_func_array(array($dispatch,"beforeAction"),$queryString);
		call_user_func_array(array($dispatch,$action),$queryString);
		call_user_func_array(array($dispatch,"afterAction"),$queryString);
	} else {
		/* Error Generation Code Here */
	}
}


/** Autoload any classes that are required **/

function __autoload($className) {
	if (file_exists(PATH_LIB.DS. strtolower($className) . '.class.php')) {
		require_once(PATH_LIB.DS. strtolower($className) . '.class.php');
	} else if (file_exists(PATH_APP.DS. 'controllers' . DS . lcfirst($className) . '.php')) {
		require_once(PATH_APP.DS. 'controllers' . DS . lcfirst($className) . '.php');
	} else if (file_exists(PATH_APP.DS. 'models' . DS . strtolower($className) . '.php')) {
		require_once(PATH_APP.DS. 'models' . DS . strtolower($className) . '.php');
	} else {
		/* Error Generation Code Here */
	}
}

/** GZip Output **/

function isBuggyIe() {
	
    $ua = $_SERVER['HTTP_USER_AGENT'];
	
	// quick escape for non-IEs 
    if (0 !== strpos($ua, 'Mozilla/4.0 (compatible; MSIE ')
        || false !== strpos($ua, 'Opera')) {
        return false;
    }
		
	// no regex = faaast 
    $version = (float)substr($ua, 30); 
    return (
        $version < 6 || ($version == 6  && false === strpos($ua, 'SV1'))
    );
}

/** Get Required Files **/

if(strstr($_SERVER['HTTP_USER_AGENT'], 'W3C_Validator')!==false || strstr($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip')===false )
                {
                    // do not compress
                }
else
{
        // can send GZIP compressed data
        isBuggyIe() || ob_start("ob_gzhandler");
} 

$cache = new Cache();
$inflect = new Inflect();

unregisterGlobals();
callHook();