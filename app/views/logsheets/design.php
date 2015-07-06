<?php $ph->setSection(__FILE__);?>
<div class="design-box">
	<form id="designLS" class="validate" method="post" action="./design">
		<input type="hidden" name="LSDform" value="submit">
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
					<input type="text" id="sysName1" class="form-control center-text" name="system[]" placeholder="<?php $ph->P("systemname");?>">
					</div>
					</th>
					<th colspan="1">
						<input type="checkbox" id="block1Input" value="1" name="system['block'][]" checked> <label for="block1Input"> Block 1 </label>
					</th>
					<th colspan="1">
						<input type="checkbox" id="block2Input" value="2" name="system['block'][]" checked> <label for="block2Input"> Block 2 </label>
					</th>
					<th colspan="2">
					<div class="required">
						<select id="zone" class="form-control" name="system['zone'][]">
							<option selected="true" value ="" style="display:none;"><?php $ph->P("pleaseselect");?></option>
							<?php foreach($zones as $zone): ?>
							<option value="<?php echo $zone['id'];?>"><?php echo $zone['name'];?></option>
							<?php endforeach;?>
						</select>
					</div>
					</th>
				</tr>
				<tr>
					<th width="4%"><?php $ph->P("n");?></th>
					<th width="30%"><?php $ph->P("items");?></th>
					<th width="15%"><?php $ph->P("tagnumbers");?></th>
					<th width="15%"><?php $ph->P("types");?></th>
					<th width="15%"><?php $ph->P("units");?></th>
					<th width="12%"><?php $ph->P("setpoints");?></th>
					<th width="9%"><?php $ph->P("alarms");?></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="n"><span class="del" title="delete"><b>1</b></span></td>
					<td><div class="required"><input type="text" id="item" class="form-control center-text" name="system['items'][]" placeholder="<?php $ph->P("item");?>"></div></td>
					<td><div class="required"><input type="text" id="tag" class="form-control center-text" name="system['tags'][]" placeholder="<?php $ph->P("tagnumber");?>"></div></td>
					<td>
					<div class="required">
						<select id="type" class="form-control type required" name="system['types'][]">
							<option selected="true" value="" style="display:none;">Please Select</option>
							<?php foreach($types as $type => $value): ?>
							<option value="<?php echo $type;?>"><?php echo $value;?></option>
							<?php endforeach;?>
						</select>
					</div>
					</td>
					<td>
						<select id="unit" class="form-control unit" name="system['units'][]">
						</select>
					</td>
					<td><div class="required"><input type="text" id="setpoint" class="form-control center-text" name="system['setpoints'][]" placeholder="<?php $ph->P("setpoint");?>"></div></td>
					<td><div class="required"><input type="tel" id="alarm" class="form-control center-text" name="system['alarms'][]" placeholder="<?php $ph->P("alarm");?>"></div></td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
				<td colspan="3"><button id="addRow"><?php $ph->P("addrow");?></button></td>
				<td colspan="4"><input type="submit" name="submit" value="<?php $ph->P("submit");?>"></td>
				</tr>
			</tfoot>
		</table>
		
	</form>
</div>