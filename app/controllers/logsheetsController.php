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
			$user = $_SESSION['userID'];
			//print_r($_POST);
			$system = $_POST['systemName'];
			$blocks = $_POST['block'];
			if(count($blocks) > 1) $blocks = $blocks[0]+$blocks[1];
			$zoneID= $_POST['zone'];
			$formData = $_POST['LSDform'];
			$subsys = explode('#', $formData);
			$subsysNo = count($subsys);
			$logSheet = array(	'systemName' => $system,
								'blocks' => $blocks,
								'zoneID' => $zoneID,
								'subsystemsNo' => $subsysNo,
								'data' => array(),
								'addedBy' => $user);
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
						$inpVal = $items[1] === '00'? 'null':$items[1];
						$tempSub[$subName][$items[0]][$i] = $inpVal;
					}
					$i++;
				}
				$logSheet['data']+= $tempSub;
			}
			$logSheet['data'] = json_encode($logSheet['data']);
			print_r($logSheet);
			$this->_model->insert($logSheet);
			echo $this->_model->execute();
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