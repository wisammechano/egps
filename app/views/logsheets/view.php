<?php $ph->setSection(__FILE__);?>
<?php $data = json_decode($data, true);
//print_r($data);
$parsed = array();

foreach($data as $sub => $details) {
	$parsed[$sub] = array();
	//$i = 0;
	foreach ($details as $detail => $values) {
		$i=0;
		foreach($values as $value) {
			$i++;
			$parsed[$sub][$i][$detail] = $value;
		}
	}
}

?>
<div class="view-box">
	<div class="LS-head" id="sysName">
		<h4><?php echo $sysName;?></h4>
		<hr />
	</div>
	<form id="viewLS" class="validate" method="post" action="./view">
		<div class="table">
			<input type="hidden" id="parsed" name="LSDform" value="submit">
			<?php foreach($parsed as $sub => $detailss):?>
			<div class="subSys">
				<div class="subHead row center-text" id="subSysName">
					<div class="col-xs-12"><?php echo $sub;?></div>
				</div>
				<div class="row center-text">
					<?php $span = 4; foreach ($details as $detail => $val):?>
					<?php if($detail === 'tag') $span=2;?>
					<?php if($detail != 'type'):?>
					<div class="cell col-xs-<?php echo $span;?>"><b><?php echo ucfirst($detail) . 's'?></b></div>
					<?php $span = 1; endif;endforeach;?>
					<div class="cell col-xs-3"><b>Values</b></div>
				</div>
				<?php foreach ($detailss as $value): ?>
					<div class="row center-text">
						<?php $span = 4; foreach($value as $key => $val):?>
						<?php if($key === 'tag') $span=2;?>
						<?php $val = $val === 'null' || $val === 'Unitless'? '-':$val;?>
						<?php if($key != 'type'):?>
						<div class="cell col-xs-<?php echo $span;?>"><?php echo $mob? shorten($val, $key): $val;?></div>
						<?php $span = 1; endif; endforeach;?>
						<div class="cell col-xs-3"><input type="text" class="input-cell"></div>
					</div>
				<?php endforeach;?> 
			</div>
			<?php endforeach;?>
		</div>
	</form>
</div>