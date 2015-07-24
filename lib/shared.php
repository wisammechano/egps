<?php

/** Authorization Check **/

function checkUser() {
	sec_session_start();
	$valid = false;
	$redirect = filter_input(INPUT_SERVER, 'REQUEST_URI', FILTER_SANITIZE_URL);
	$redirect = explode('/', $redirect);
	array_shift($redirect);
	array_shift($redirect);
	$redirect = '/'. implode('/', $redirect);
	
	if (isset($_SESSION['userID'], $_SESSION['loginString'])) {
		$userID = $_SESSION['userID'];
		$loginString = $_SESSION['loginString'];
		$userBrowser = $_SERVER['HTTP_USER_AGENT'];
		$usr = new User;
		$usr->select('password');
		$usr->where(array('id' => $userID));
		$res = $usr->execute(1);
		if ($res !== '') {
			$loginCheck = hash('sha512', $res . $userBrowser);
			if ($loginCheck === $loginString) $valid = true;
		}
	}
	if ($valid) return true;
	else redirect('/users/login?r=' . $redirect);
}

function S($val) {
	return htmlentities($val);
}
/** Secure Session Init. **/

function sec_session_start() {
    $session_name = 'sec_session_id';   // Set a custom session name 
    $secure = false;

    // This stops JavaScript being able to access the session id.
    $httponly = true;

    // Forces sessions to only use cookies.
    if (ini_set('session.use_only_cookies', 1) === FALSE) {
        //header("Location: ../error.php?err=Could not initiate a safe session (ini_set)");
        exit();
    }

    // Gets current cookies params.
    $cookieParams = session_get_cookie_params();
    session_set_cookie_params($cookieParams["lifetime"], $cookieParams["path"], $cookieParams["domain"], $secure, $httponly);

    // Sets the session name to the one set above.
    session_name($session_name);

    session_start();            // Start the PHP session 
    session_regenerate_id(true);    // regenerated the session, delete the old one. 
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

function redirect($url, $internal = true, $permanent = false)
{
	if($internal) $url = BASE_PATH . $url;
    	if (headers_sent() === false)
    	{
    		header('Location: ' . $url, true, ($permanent === true) ? 301 : 302);
    	}

    exit();
}


/** Main Call Function **/

$url = isset($_GET['url'])? $_GET['url']:null;
function callHook() {
	global $url;
	global $default;
	if(!is_null($url)) array_shift($_GET);
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

function fitMob($word) {
	global $detect;
	$mob = $detect->isMobile();
	if ($mob) {
		return substr($word, 0, 3) . '.';
	}
	return $word;
}

if(strstr($_SERVER['HTTP_USER_AGENT'], 'W3C_Validator')!==false || strstr($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip')===false )
                {
                    // do not compress
                }
else
{
        // can send GZIP compressed data
        isBuggyIe() || DEV_ENV || ob_start("ob_gzhandler");

} 

$cache = new Cache();
$inflect = new Inflect();
$detect = new Mobile_Detect();
unregisterGlobals();
callHook();