<?php

class VanillaController {
	
	protected $_controller;
	protected $_action;
	protected $_template;
	protected $_model;
	protected $_ph;

	public $doNotRenderHeader;
	public $render;
	public $renderType;

	function __construct($controller, $action) {
		
		global $inflect;

		$this->_controller = ucfirst($controller);
		$this->_action = $action;
		
		$model = ucfirst($inflect->singularize($controller));
		$this->doNotRenderHeader = 0;
		$this->render = 1;
		$this->_model = new $model;
		$this->_template = new Template($controller,$action);
		$this->_ph = new Phrases;
	}

	function set($name,$value) {
		$this->_template->set($name,$value);
	}

	function __destruct() {
		if ($this->render) {
			$this->_template->render($this->doNotRenderHeader);
		}
	}
		
}