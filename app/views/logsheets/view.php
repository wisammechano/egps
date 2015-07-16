<?php $ph->setSection(__FILE__);?>
<?php $data = json_decode($data, true);?>
<div class="view-box">
	<form id="viewLS" class="validate" method="post" action="./view">
		<input type="hidden" id="parsed" name="LSDform" value="submit">
		<table class="tableLS">
			<thead>
				<tr>
					<th colspan="3"><?php $ph->P("systemname");?></th>
					<th colspan="2"><?php $ph->P("applyfor");?></th>
					<th colspan="2"><?php $ph->P("zone");?></th>
				</tr>
				<tr>	
					<th colspan="3">
						<div class="required">
						<?php echo $sysName;?>
						</div>
					</th>
					<th colspan="2">
						<?php echo $blocks; ?>
					</th>
					<th colspan="2">
					<div class="required">
						<?php echo $zone; ?>
					</div>
					</th>
				</tr>
			</thead>
			<tbody class="thead" id="d0">
				<tr>
					<th width="4%"><?php $ph->P("n");?></th>
					<th width="30%"><?php $ph->P("items");?></th>
					<th width="15%"><?php $ph->P("tagnumbers");?></th>
					<th width="15%"><?php $ph->P("types");?></th>
					<th width="15%"><?php $ph->P("units");?></th>
					<th width="12%"><?php $ph->P("setpoints");?></th>
					<th width="9%"><?php $ph->P("alarms");?></th>
				</tr>
			<?php foreach($data as $subsystem => $items): ?>
				<tr>
					<th colspan="7" style="border-top:2px solid; height:5px;"><?php echo $subsystem; ?></th>
				</tr>	
			<?php var_dump($items); endforeach;?>
			</tbody>
			<tbody class="tbody" id="d0">	
				<tr>
					<td class="n">1</td>
					<td><div class="required"><input type="text" id="item" class="form-control center-text" placeholder="<?php $ph->P("item");?>"></div></td>
					<td><div class="required"><input type="text" id="tag" class="form-control center-text" placeholder="<?php $ph->P("tagnumber");?>"></div></td>
					<td>
					<div class="required">
						<select id="type" class="form-control type required" <!--name="system['subsys']['types'][]-->">
							<option selected="true" value="" style="display:none;">Please Select</option>
						</select>
					</div>
					</td>
					<td>
						<div class="select-editable">
							<input type="text" id="unit" class="form-control unit hide">
							<select id="unit" class="form-control unit" <!--name="system['subsys']['units'][]-->">
							</select>
						</div>
					</td>
					<td><div class="required"><input type="text" id="setpoint" class="form-control center-text" placeholder="<?php $ph->P("setpoint");?>"></div></td>
					<td><div class="required"><input type="tel" id="alarm" class="form-control center-text" placeholder="<?php $ph->P("alarm");?>"></div></td>
				</tr>
			</tbody>
			<tbody class="tsep" id="d0">
				<tr>
					<td colspan="3"><button id="addRow"><?php $ph->P("addrow");?></button></td>
					<td colspan="4"><button id="addSub"><?php $ph->P("addsub");?></button></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
				<td colspan="5"></td>
				<td colspan="2"><input type="submit" value="<?php $ph->P("submit");?>"></td>
				</tr>
			</tfoot>
		</table>
	</form>
</div>