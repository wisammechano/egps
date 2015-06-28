<?php

class Phrases {
	protected $_phrases;
	protected $_section;
	
	public function setLang($ini_file) {
		$this->_phrases = parse_ini_file(PATH_LANG.DS. $ini_file . '.ini', true);
		if(!$this->_phrases) return false;
	}
	
	public function setSection($section) {
		if(strpos($section, '.php'))
			$this->_section=basename($section, ".php");
		else $this->_section=$section;
	}
	
	public function P($phrase) {
		$s=$this->_section;
		$p='P_'.strtoupper($phrase);
		echo $this->_phrases[$s][$p];
	}
	
		public function Pr($phrase) {
		$s=$this->_section;
		$p='P_'.strtoupper($phrase);
		return $this->_phrases[$s][$p];
	}
}