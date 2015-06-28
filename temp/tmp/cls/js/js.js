$(document).ready(function() {
	var i = 1
	var row = $("tbody").html()
	$("#insRow").click(function() {
		i++;
		$("tbody").append(row);
	}	);
});