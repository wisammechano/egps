<?php

class Shortener {
	protected static $expressions = array(
		'#differential pressure#i' => 'DP',
		'#temperature#i' => 'Temp.',
		'#pressure#i' => 'Pres.',
		'#level#i' => 'Lvl',
		'#discharge#i' => 'Disch.',
		'#suction#i' => 'Suc.',
		'#^diverter damper#i' => 'Div. Damp.',
		'#accumulator#i' => 'Accum.',
		'#control valve#i' => 'CV',
		'#recirculation#i' => 'Recirc.'
		);
	public static function shorten($val, $type) {

		if($type === 'item') {
			$ret = $val;
			foreach (self::$expressions as $exp => $rep) {
				$ret = preg_replace($exp, $rep, $ret);
			}
			return $ret;
		}
		elseif($type === 'tag') {
			$ret = substr($val, -5);
			return $ret;
		}
		else return $val;
	}
}