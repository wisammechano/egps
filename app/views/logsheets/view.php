<?php $ph->setSection(__FILE__);?>
<?php $data = json_decode($data, true);?>
<div class="view-box">
	<form id="viewLS" class="validate" method="post" action="./view">
		<input type="hidden" id="parsed" name="LSDform" value="submit">
		<div class="LS-head center-text">
			<h3><?php echo $sysName;?></h3>
		</div>
	</form>
</div>