<?php


class LogsheetsController extends VanillaController {
	
	function beforeAction () {
		checkUser();
		$this->_ph->setLang('en-us');
		$this->_ph->setSection('error');
	}

	
	function view($id = null){
		if ($id === null){
			redirect('/logsheets/viewall');
		}
		$this->_model->select("systemName, blocks, zones.name as zoneName, users.username as addedBy, subsystemsNo, data, logsheets.added as added");
		$this->_model->join('zones', array('id' => 'zoneID'));
		$this->_model->join('users', array('id' => 'addedBy'));
		$this->_model->where(array('id' => $id));
		$res = $this->_model->execute();
		
		$this->set('sysName', $res['systemName']);
		$this->set('blocks', $res['blocks']);
		$this->set('zone', $res['zoneName']);
		$this->set('addedOn', $res['added']);
		$this->set('addedBy', $res['addedBy']);
		$this->set('subNo', $res['subsystemsNo']);
		$this->set('data', $res['data']);
	}

	function edit($id = null) {
	}
	function design ($id = null) {
		$units = new Units;
		$types = $units->getTypes();
		if (isset($_POST['LSDform'])) {
			$user = $_SESSION['userID'];
			$editMode = (bool)$_POST['editMode'];
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
								'data' => array()
								);
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
			//$logSheet['data'] = json_encode($logSheet['data']);
			$tempSub = array();
			foreach($logSheet['data'] as $sub => $details) {
				$tempSub[$sub] = array();
				//$i = 0;
				foreach ($details as $detail => $values) {
					$i=0;
					foreach($values as $value) {
						$i++;
						$tempSub[$sub][$i][$detail] = $value;
					}
				}
			}
			$logSheet['data'] = json_encode($tempSub);
			print_r($logSheet);
			if($editMode){
				$editID = $_POST['editMode'];
				$logSheet['lastEditBy'] = $user;
				$logSheet['edited'] = date("Y-m-d H:i:s");
				$this->_model->update($logSheet);
				$this->_model->where(array('id' => $editID));
			}
			else
			{	
				$logSheet['addedBy'] = $user;
				$this->_model->insert($logSheet);
			}
			echo $this->_model->execute();
			$this->render=0;
		}
		if($id !== null){
			$this->set('editMode', $id);
			$this->_model->select('*');
			$this->_model->where(array('id' => $id));
			$res = $this->_model->execute();
			print_r($res); // complete edit modeeeeeeeeeeeee
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