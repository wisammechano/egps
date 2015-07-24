<?php
class Template {
	
	protected $variables = array();
	protected $_errors = array();
	protected $_controller;
	protected $_action;
	protected $_d;
	//protected $_HTML;
	
	function __construct($controller,$action) {
		$this->_controller = $controller;
		$this->_action = $action;
		//$this->_HTML = new HTML;
	}

	/** Set Variables **/

	function set($name,$value) {
		$this->variables[$name] = $value;
	}
	/** Set Errors in forms */
	
	function setError($name,$value) {
		$this->_errors[$name] = $value;
	}
	
	function fill($item, $select = 0, $val = null, $array = array()) {
		if(empty($array) && !empty($_POST)) $array = $_POST;
		if(!empty($array)){
			if ($select && !is_null($val)) {
				$ret = $val === $array[$item]? 'selected':'';
				echo $ret;
				return;
			}
			echo 'value="' . $array[$item] . '" ';
		}
	}

	/** Display Template **/
	
    function render($doNotRenderHeader = 0) {
    	global $detect;
    	$mob = $detect->isMobile();
		//$this->_d = $detect;
		$errors = $this->_errors;
		$html = new HTML;
		$ph = new Phrases;
		//$E='$html->element';
		extract($this->variables);
		
		if ($doNotRenderHeader == 0) {
			
			if (file_exists(VIEWS.DS. $this->_controller . DS . 'header.php')) {
				include (VIEWS.DS. $this->_controller . DS . 'header.php');
			} else {
				include (VIEWS.DS. 'header.php');
			}
		}

		if (file_exists(VIEWS.DS. $this->_controller . DS . $this->_action . '.php')) {
			include (VIEWS.DS. $this->_controller . DS . $this->_action . '.php');		 
		}
			
		if ($doNotRenderHeader == 0) {
			if (file_exists(VIEWS.DS. $this->_controller . DS . 'footer.php')) {
				include (VIEWS.DS. $this->_controller . DS . 'footer.php');
			} else {
				include (VIEWS.DS. 'footer.php');
			}
		}
    }

}