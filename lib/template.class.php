<?php
class Template {
	
	protected $variables = array();
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
	

	/** Display Template **/
	
    function render($doNotRenderHeader = 0) {
		
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