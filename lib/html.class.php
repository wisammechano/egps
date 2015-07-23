<?php

class HTML {
	private $js = array();
	
	function shortenUrls($data) {
		$data = preg_replace_callback('@(https?://([-\w\.]+)+(:\d+)?(/([\w/_\.]*(\?\S+)?)?)?)@', array(get_class($this), '_fetchTinyUrl'), $data);
		return $data;
	}

	private function _fetchTinyUrl($url) { 
		$ch = curl_init(); 
		$timeout = 5; 
		curl_setopt($ch,CURLOPT_URL,'http://tinyurl.com/api-create.php?url='.$url[0]); 
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,1); 
		curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout); 
		$data = curl_exec($ch); 
		curl_close($ch); 
		return '<a href="'.$data.'" target = "_blank" >'.$data.'</a>'; 
	}

	function sanitize($data) {
		return mysql_real_escape_string($data);
	}

	function link($text,$path,$prompt = 0,$confirmMessage = "Are you sure?") {
		$path = str_replace(' ','-',$path);
		if ($prompt) {
			$data = '<a href="'.BASE_PATH.'/'.$path.'" onclick="return confirm(\'' .$confirmMessage. '\')">'.$text.'</a>';
		} else {
			$data = '<a href="'.BASE_PATH.'/'.$path.'">'.$text.'</a>';	
		}
		return $data;
	}

	function includeJs($fileName) {
		$data = '<script type="text/javascript" src="'.BASE_PATH.'/js/'.$fileName.'.js"></script>' . PHP_EOL;
		return $data;
	}

	function includeCss($fileName) {
		$data = '<link rel="stylesheet" type="text/css" href="'.BASE_PATH.'/css/'.$fileName.'.css" />' . PHP_EOL;
		return $data;
	}
	
	function includeLess($fileName) {
		$data = '<link rel="stylesheet" type="text/less" href="'.BASE_PATH.'/css/less/'.$fileName.'/'.$fileName.'.less" />' . PHP_EOL;
		return $data;
	}
	
	function E($element, $attributes = array(), $closeTag=true, $innerHTML='') {
		$data = "<". $element;
		if (!empty($attributes)) {
			foreach($attributes as $attrib => $val) {
				$data .= sprintf(' %s="%s"', $attrib, $val);
			}
		}
		$data.= '>' .PHP_EOL;
		if ($innerHTML != '') $data.=$innerHTML.PHP_EOL;
		if($closeTag) $data.= '</'.$element.'>'.PHP_EOL;
				
		return $data;
	}
	
	function block($data) {
		$block = '';
		foreach ($data as $elem => $attrib) {
			$elem = preg_replace('@(-[\d]*)@', '', $elem);
			$block .= '<' . $elem;
			foreach($attrib as $att => $val) {
				if ($att == 'label') {
					$lbl = sprintf('<label id="%sLabel" for="%s" class="%s">%s</label>', $attrib['id'],$attrib['id'],$attrib['class'],$val).PHP_EOL;
					$pos = strrpos($block, '<') ;
					$block = substr_replace($block,$lbl, $pos, 0);
					continue;
				}
				$block .= sprintf(' %s="%s"', $att, $val);
			}
			$block .= '>'.PHP_EOL;
		}
		preg_match('/^<([a-z0-9]+)+/m', $block, $pElem);
		$block .= '</' . $pElem[1] . '>'.PHP_EOL;
		return $block;
	}
						
		
}