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
						'power'=> 'Power',
						'e' => 'Energy',
						'vib' => 'Vibration',
						'v' => 'Voltage',
						'c' => 'Current',
						'freq' => 'Frequency',
						'time' => 'Time',
						'pf' => 'Power Factor',
						'opcl' => 'Open, Close',
						'onoff' => 'On, Off',
						'yesno' => 'Yes, No',
						'number' => 'Number',
						'custom' => 'Custom'
						);
		$units= array(	'p' => array('barg', 'bara', 'mbar', 'psi', 'MPa', 'kPa', 'Pa', 'mmHg', 'mmH2O', 'atm'),
						't' => array('c'=>'&deg;C', 'f'=>'&deg;F', 'k'=>'Kelvin'),
						'l' => array('%', 'm', 'cm', 'mm', 'in', 'ft', 'mmH2O'),
						'dp' => array('bar', 'mbar', 'psid', 'kpa', 'pa'),
						'flow' => array('ls'=>'L/s', 'ms'=>'m&sup3;/s', 'fs'=>'ft&sup3;/s', 'gpm'=>'USgpm'),
						'power' => array('kW', 'MW', 'MVar', 'kVA', 'hp'),
						'e' => array('J', 'kJ', 'kWh', 'BTU'),
						'vib' => array('mmms' => '&micro;mm/s', 'mms' => 'mm/s'),
						'v' => array('V', 'kV'),
						'c' => array('a'=>'Amps'),
						'freq' => array('hz' => 'Herts'),
						'time' => array('ms'=>'milliseconds', 's'=>'seconds', 'm'=>'minutes', 'h'=>'hours', 'd'=>'days', 'w'=>'weeks', 'M'=>'months', 'y'=>'years')
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
//			else if($type === 'custom') {
				//echo '<input type="text" class="form-control">'.PHP_EOL;
//			} 
			else echo '<option>Unitless</option>'.PHP_EOL;	
			exit;
		}
	}
	
	function afterAction() {
		
	}
}