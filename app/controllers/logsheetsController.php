<?php


class LogsheetsController extends VanillaController {
	
	function beforeAction () {
		checkUser();
		$this->_ph->setLang('en-us');
		$this->_ph->setSection('error');
	}
	
	function design () {
		$units = new Units;
		$types = $units->getTypes();
		
		if (isset($_POST['LSDform'])) {
			$system = $_POST['systemName'];
			$blocks = $_POST['block'];
			$zoneID= $_POST['zone'];
			$formData = $_POST['LSDform'];
			$subsys = explode('#', $formData);
			$logSheet = array(	'SystemName' => $system,
								'Blocks' => $blocks,
								'Zone' => $zoneID,
								'SubSystems' => array());
			foreach ($subsys as $data){
				$tempSub = array();
				$pattern = '/^\[([^\[\]]+)\]/'; // '/^\[(.+)\]/'
				preg_match($pattern, $data, $matches);
				$subName=$matches[1];
				//$tempSub['name'] = $matches[1];
				$data = substr($data, 2 + strlen($subName));
				$rows = explode('--', $data);
				$i=0;
				foreach($rows as $row){
					$inputs = explode(',', $row);
					foreach ($inputs as $input) {
						$items = explode(':', $input);
						$tempSub[$subName][$items[0]][$i] = $items[1];
					}
					$i++;
				}
				$logSheet['SubSystems']+= $tempSub;
			}
			echo json_encode($logSheet);
			$this->render=0;
		}
		$this->set('types', $types);
		
		$this->_model->from("zones");
		$this->_model->select("id, name");
		$zones = $this->_model->execute();
		$this->set('zones', $zones);
		
		if(isset($_GET['units'])) {
			$this->render=0;
			
			$type=$_GET['units'];
			$unit=$units->getUnits($type);
			if ($unit !== false){
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