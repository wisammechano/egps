<?php
class Template {
	
	protected $variables = array();
	protected $_errors = array();
	protected $_controller;
	protected $_action;
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
	
	function fill($val, $array = array()) {
		if(empty($array) && !empty($_POST)) $array = $_POST;
		if(!empty($array)){
			echo 'value="' . $array[$val] . '" ';
		}
	}

	/** Display Template **/
	
    function render($doNotRenderHeader = 0) {
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