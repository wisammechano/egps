<!Doctype html>
<html lang="en">
<head>
	<title><?php $title='Hell';echo $title ?></title>
	
	<meta http-equiv="cache-control" content="max-age=0">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT">
	<meta http-equiv="pragma" content="no-cache">
	
	<meta charset="UTF-8">
	<link rel="stylesheet" href="./js/jq/themes/overcast/jquery-ui.css">
	<script src="./js/jq/jquery.js"></script>
	<script src="./js/jq/jquery-ui.js"></script>
	<script src="./js/sc.js"></script>
	<link rel="stylesheet" href="./css/main.css">
</head>
<body>
	<div class="navbar"><div class="cont"></div></div>
	<div class="content">
		<div class="cont">
			<h1>Change of shift form:</h1>
			<p>Please select the date and time of your shift:</p>
			<form method="post" action="chngshft.php">
			<fieldset>
			<legend>Choose date and time:</legend>
			Date:
			<input type="text" name="date" id="datepicker" autocomplete="off" required readonly></input>
			Time:
			<input type="radio" name="time" value="d" Checked>Day</input>
			<input type="radio" name="time" value="n">Night</input>
			</fieldset>
			<label for="user">Substitute Name or ID No.:</label>
			<input type="text" name="sub" id="user" spellcheck="false" autocomplete="off" required></input>
			<input type="hidden" name="uid" value="1"></input>
			<input type="hidden" name="sid" id="user-id" value=""></input>
			<input type="submit" name="action" value="Submit"></input>
			</form>
			<div id="user-eid">ID:</div>
			<div id="error"><p></p></div>
		</div>
	</div>
</body>
</html>