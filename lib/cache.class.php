<?php
class Cache {

	function get($fileName) {
		$fileName = PATH_CACHE.DS.$fileName. '.dbc';
		if (file_exists($fileName)) {
			$handle = fopen($fileName, 'rb');
			$variable = fread($handle, filesize($fileName));
			fclose($handle);
			return unserialize($variable);
		} else {
			return null;
		}
	}
	
	function set($fileName,$variable) {
		$fileName = PATH_CACHE.DS.$fileName . '.dbc';
		$handle = fopen($fileName, 'a');
		fwrite($handle, serialize($variable));
		fclose($handle);
	}

}
