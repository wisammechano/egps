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
    
	function where($conditions = array()){
    		$sql =' WHERE ';
    		foreach ($conditions as $key => $val) {
    			$sql .= sprintf("%s = '%s' AND", $this->_table .'.'. $this->S($key), $this->S($val));
    		}
    		
    		$sql = substr($sql, 0,-4);
    		$this->_conditions = $sql;
    	}
    
	function selectAll() {
    		$this->_query = 'SELECT * from `'.$this->_table.'`';
    	}
    
    	function select($data) {
    		$this->_query = 'SELECT '. $data.' from `'.$this->_table.'`';  
    	}
    	
    	function insert($data = array()) {
    		$sql = 'INSERT INTO ' . $this->_table . ' SET ' ;
    		foreach ($data as $field => $value) {
    			$sql .= $field . ' = \'' . $value . '\',';
    		}
    		
    		$sql = substr($sql, 0, -1);
    		$this->_query = $sql;
    	}
    	
    	function update($data = array()) {
    		$sql = 'UPDATE ' . $this->_table .' SET ';
    		foreach ($data as $field => $value) {
    			$sql .= $field . ' = \'' . $value . '\',';
    		}
    		
    		$sql = substr($sql, 0, -1);
    		$this->_query = $sql;
    	}
    		
    		

	function execute() {
		$bol = true;
		$sql = $this->_query	. $this->_conditions ;
		if(preg_match('/SELECT|SHOW|DESCRIBE|EXPLAIN/i', $sql)) $bol = false;
		//echo $sql;
		return ($bol ? $this->query($sql):$this->query($sql, false));
	}
	
    /** Custom SQL Query **/

	function query($query, $bol = true) {

		$res = $this->_db->query($query);
		//echo $this->_db->error;
		if (!$bol) {
			$result = array();
			$table = array();
			$field = array();
			$tempResults = array();
			$numOfFields = $res->field_count;
			for ($i = 0; $i < $numOfFields; ++$i) {
				$fInfo = $res->fetch_field_direct($i);
			    	array_push($table, $fInfo->table);
			    	array_push($field, $fInfo->name);
			}

			while ($row = $res->fetch_row()) {
				for ($i = 0;$i < $numOfFields; ++$i) {
					$table[$i] = trim(ucfirst($table[$i]),"s");
					$tempResults[$table[$i]][$field[$i]] = $row[$i];
				}
				if ($singleResult == 1) {
					$res->free();
					return $tempResults;
				}
				array_push($result,$tempResults);
			}
			print_r($result);
			$res->free();
			return($result);
		}
	}
	
	protected function S($val) {
		return $this->_db->real_escape_string($val) ;
	}

}
