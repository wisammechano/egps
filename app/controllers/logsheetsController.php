<?php


class LogsheetsController extends VanillaController {
	
	function beforeAction () {
		checkUser();
		$this->_ph->setLang('en-us');
		$this->_ph->setSection('error');
	}
	
	function design () {
		if (isset($_POST['LSDform'])) {
			print_r($_POST);
			$this->render=0;
		}
		$types = array(	'p' => 'Pressure',
						't' => 'Temperature',
						'l' => 'Level',
						'dp' => 'Differential Pressure',
						'flow' => 'Flow',
						'opcl' => 'Open, Close',
						'onoff' => 'On, Off',
						'yesno' => 'Yes, No'
						);
		$units= array(	'p' => array('barg', 'bara', 'mbar', 'psi', 'kpa', 'pa', 'mmHg', 'mmH2O', 'atm'),
						't' => array('c'=>'&deg;C', 'f'=>'&deg;F', 'k'=>'Kalvin'),
						'l' => array('%', 'm', 'cm', 'mm', 'in', 'ft', 'mmH2O'),
						'dp' => array('bar', 'mbar', 'psid', 'kpa', 'pa'),
						'flow' => array('ls'=>'L/s', 'ms'=>'m&sup3;/s', 'fs'=>'ft&sup3;/s', 'gpm'=>'USgpm')
						);
		$this->set('types', $types);
		
		$this->_model->from("zones");
		$this->_model->select("id, name");
		$zones = $this->_model->execute();
		$this->set('zones', $zones);
		
		if(isset($_GET['units'])) {
			$this->render=0;
			
			$type=$_GET['units'];
			if(array_key_exists($type, $units)){
				$unit=$units[$type];
				foreach($unit as $key => $val){
					$v = is_numeric($key)? $val:$key;
					echo '<option value="'.$v.'">' . $val. '</option>'.PHP_EOL;					
				}
			}
			else echo '<option>Unitless</option>'.PHP_EOL;	
			exit;
		}
	}
	
	function afterAction() {
		
	}
}