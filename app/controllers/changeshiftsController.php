<?php

class ChangeshiftsController extends VanillaController {
	
	function beforeAction () {
		checkUser();	
	}
	
	function submit($categoryId = null) {
		if(isset($_POST['changeshiftForm'])) {
			$data = array(
				'uid' => $_POST['userID'],
				'sid' => $_POST['subID'],
				'date' => $_POST['date'],
				'time' => $_POST['time'] == 'day' ? 1:0);
			
			$this->_model->insert($data);
			$this->_model->execute();
		}
	}
	
	function check()
		if(isset($_GET['term']) {
			$users = new usersController;
			is_numeric($_get['term'])? $item='eid':$item='un'	;
			$users->_model->select('id, un, eid');
			$users->_model->where('')
			
			
		}
	
	function view() {
		
	
	}

	function afterAction() {

	}
	
}