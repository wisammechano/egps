<?php $ph->setSection(__FILE__);?>
<?php $data = json_decode($data, true);
//print_r($data);
$parsed = array();

foreach($data as $sub => $details) {
	$parsed[$sub] = array();
	foreach ($details as $detail => $values) {
		$row = count($values);
	}
}

$subs = array_keys($data);
$items = array_values($data);
print_r($subs); print_r($items);
?>
<div class="view-box">
	<div class="LS-head" id="sysName">
		<h4><?php echo $sysName;?></h4>
		<hr />
	</div>
	<form id="viewLS" class="validate" method="post" action="./view">
		<div class="table">
			<input type="hidden" id="parsed" name="LSDform" value="submit">
			<?php foreach($data as $sub => $details):?>
			<div class="subHead row center-text" id="subSysName">
				<div class="col-xs-12"><?php echo $sub;?></div>
			</div>
			<div class="row center-text">
				<?php $span = 4; foreach ($details as $detail => $values):?>
				<?php if($detail != 'type'):?>
				<div class="cell col-xs-<?php echo $span;?>"><?php echo ucfirst($detail) . 's'?></div>
				<?php $span = 1; endif;endforeach;?>
				<div class="cell col-xs-4">Value</div>
			</div>

			<?php endforeach;?>
		</div>
	</form>
</div>