<?php

class SQLQuery {
    protected $_db;
    //protected $_result;
    protected $_query;
    protected $_table;
    protected $_conditions;
    

    /** Connects to database **/

    function connect($address, $account, $pwd, $name) {
		$db = new mysqli($address, $account, $pwd, $name);
		if ($db->connect_error) {
    			error_log("MySQL connection Err. " . $db->connect_errno . " " . $db->connect_error);
    			return false;
		}
		$this->_db = $db;
		return true;
    }

    /** Disconnects from database **/

    function disconnect() {
        	if ($this->_db->close()) {
          	return 1;
        }  else {
        		error_log("MySQL disonnection Err. " . $db->connect_errno . " " . $db->connect_error);
			return 0;
        }
    }
    
	function where($conditions){
		$sql =' WHERE ';
		if(is_array($conditions)) {
			foreach ($conditions as $key => $val) {
				$sql .= sprintf("%s = '%s' AND", $this->_table .'.'. $this->S($key), $this->S($val));
			}
		$sql = substr($sql, 0,-4);
		}
		else $sql .= $this->S($conditions);   		
		$this->_conditions = $sql;
		//return $this->_model;
	}
    
	function from($table) {
		$this->_table=$table;
		//return $this->_model;
	}
	function selectAll() {
    	$this->_query = 'SELECT * from `'.$this->_table.'`';
		//return $this->_model;
    }
    
    function select($data) {
    	$this->_query = 'SELECT '. $data.' from `'.$this->_table.'`';
		//return $this->_model;
   	}
    	
    function insert($data = array()) {
    	$sql = 'INSERT INTO ' . $this->_table . ' SET ' ;
    	foreach ($data as $field => $value) {
    		$sql .= $field . ' = \'' . $value . '\',';
    	}
    		
    	$sql = substr($sql, 0, -1);
    	$this->_query = $sql;
		//return $this->_model;
    }
    	
    function update($data = array()) {
    	$sql = 'UPDATE ' . $this->_table .' SET ';
    	foreach ($data as $field => $value) {
    		$sql .= $field . ' = \'' . $value . '\',';
    	}
    		
    	$sql = substr($sql, 0, -1);
    	$this->_query = $sql;
		//return $this->_model;
    }
    		
    		

	function execute($singleResult = false) {
		$bol = true;
		$sql = $this->_query . $this->_conditions ;
		if(preg_match('/SELECT|SHOW|DESCRIBE|EXPLAIN/i', $sql)) $bol = false;
		//echo $sql;
		$result = ($bol ? $this->query($sql, $singleResult):$this->query($sql, $singleResult, false));
		$this->_query = $this->_conditions = '';
		return $result;
	}
	
    /** Custom SQL Query **/

	function query($query, $singleResult, $bol = true) {
		$res = $this->_db->query($query);
		//var_dump($res);
		//print_r($res->fetch_all());
		//echo $query;
		//echo $this->_db->error;
		if($this->_db->error) return $this->_db->error;
		if (!$bol) {
			if($singleResult) {
				$result = $res->fetch_row();
				return $result[0];
			}
			$result = array();
			$table = array();
			$field = array();
			$tempResults = array();
			$numOfFields = $res->field_count;
			for ($i = 0; $i < $numOfFields; ++$i) {
				$fInfo = $res->fetch_field_direct($i);
					//echo $fInfo->table;
			    	//array_push($table, $fInfo->table);
			    	array_push($field, $fInfo->name);
			}

			while ($row = $res->fetch_row()) {
				for ($i = 0;$i < $numOfFields; ++$i) {
					//$table[$i] = trim(ucfirst($table[$i]),"s");
					//$tempResults[$table[$i]][$field[$i]] = $row[$i];
					$tempResults[$field[$i]] = $row[$i];
					//print_r($tempResults);
				}
				array_push($result,$tempResults);
				//print_r($tempResults);
			}
			if (count($result) === 1) $result=$tempResults;
			//print_r($result);
			//echo count($result);
			$res->free();
			return($result);
		}
		else return $res;
	}
	
	protected function S($val) {
		return $this->_db->real_escape_string($val) ;
	}

}
