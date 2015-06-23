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
	
	
	function view() {
		
	
	}

	function afterAction() {

	}
	
}