<?php $ph->setSection(__FILE__);?>
<?php $data = json_decode($data, true);?>
<div class="view-box">
	<form id="viewLS" class="validate" method="post" action="./view">
		<input type="hidden" id="parsed" name="LSDform" value="submit">
		<table id="LS-View">
		
		</table>
		<div class="LS-head center-text">
			<h3><?php echo $sysName;?></h3>
			<?php foreach($data as $sub => $details):?>
			<ul><?php echo $sub; var_dump($details)?></ul>
			<?php //foreach($details as $detail => $val):?>
				<li><?php //echo $detail . ' : ' . $val;?></li>
			<?php endforeach; //endforeach;?>
		</div>
	</form>
</div>