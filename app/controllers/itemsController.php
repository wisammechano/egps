<?php

class ItemsController extends VanillaController {

	function beforeAction () {
		checkUser();
	}
		
	
	function view($id = null,$name = null) {
	
		$this->set('title',$name.' - My Todo List App');
		$this->set('todo',$this->_model->select($id));

	}
	
	function viewall() {
	}
	
	function add() {
		$todo = $_POST['todo'];
		$this->set('title','Success - My Todo List App');
		$this->set('todo',$this->_mosel->query('insert into items (item_name) values (\''.mysql_real_escape_string($todo).'\')'));	
	}
	
	function delete($id = null) {
		$this->set('title','Success - My Todo List App');
		$this->set('todo',$this->_model->query('delete from items where id = \''.mysql_real_escape_string($id).'\''));	
	}

	function afterAction() {

	}	
	
}
