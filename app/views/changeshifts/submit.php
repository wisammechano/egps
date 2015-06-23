<form name="changeshiftForm" method="post" action="submit">
	<input type="hidden" name="changeshiftForm" value="changeSubmit" />
	<input type="hidden" name="userID" value="<?php echo $_SESSION['userID']; ?>"
	<label for="subID">Substitute: </label><input id="subID" type="text" name="subID" placeholder="Name of Substitute .."> <br /><br />
	<label for="changeDate">Date: </label><input id="changeDate" name="date" type="text"> <br /><br />
	<fieldset>
		<legend>Time</legend>
		<input type="radio" name="time" value="day" checked>Day
		<input type="radio" name="time" value="night">Night
	</fieldset><br /><br />
	<input name="submit" value="Submit" type="submit" />
</form>