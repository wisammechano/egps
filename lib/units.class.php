<?php

class Units {
	private static $types = array(	'p' => 'Pressure',
								't' => 'Temperature',
								'l' => 'Level',
								'pos' => 'Position',
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
										
	private static $units = array(	'p' => array('bar', 'barg', 'bara', 'mbar', 'psi', 'MPa', 'kPa', 'Pa', 'mmHg', 'mmH2O', 'atm'),
								't' => array('c'=>'&deg;C', 'f'=>'&deg;F', 'k'=>'Kelvin'),
								'l' => array('%', 'm', 'cm', 'mm', 'in', 'ft', 'mmH2O'),
								'pos' => array('%'),
								'dp' => array('bar', 'mbar', 'psid', 'kpa', 'pa'),
								'flow' => array('ls'=>'L/s', 'ms'=>'m&sup3;/s', 'fs'=>'ft&sup3;/s', 'gpm'=>'USgpm'),
								'power' => array('kW', 'MW', 'MVar', 'kVA', 'hp'),
								'e' => array('J', 'kJ', 'kWh', 'BTU'),
								'vib' => array('mmms' => '&micro;mm/s', 'mms' => 'mm/s'),
								'v' => array('V', 'kV'),
								'c' => array('a'=>'Amps'),
								'freq' => array('hz' => 'Hertz'),
								'time' => array('ms'=>'milliseconds', 's'=>'seconds', 'm'=>'minutes', 'h'=>'hours', 'd'=>'days', 'w'=>'weeks', 'M'=>'months', 'y'=>'years')
								);
								
	private static $conversion = array(
										'p' => array (	'base' => 'kpa',
														'conv' => array('Pa' => 1000,
																		'MPa' => 0.001,
																		'psi' => 0.145037738,
																		'bar' => 0.01,
																		'mbar' => 10,
																		'mmHg' => 7.50061683,
																		'mmH2O' => 101.971621298,
																		'atm' => 0.00986923267)));
	public function getTypes(){
		return self::$types;
	}
	
	public function getUnits($type){
		if(array_key_exists($type, self::$units)){
			return self::$units[$type];
		}
		else {
			return false;
		}
	}
	
	public function convertUnit($type, $from, $to){
		
	}

}