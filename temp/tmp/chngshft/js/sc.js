$(document).ready(function() {
	$(function() {
		$( "#datepicker" ).datepicker();//"option", "showAnim", "Slide down");
		$( "#datepicker" ).datepicker("option", "showAnim", "slideDown");
		$( "#datepicker" ).datepicker("option", "dateFormat", "dd M, yy");
	});
		
	$(function() {
		$( "#user" ).autocomplete({
			source: "http://localhost/egps/tmp/chngshft.php",
			focus: function( event, ui ) {
				$( "#user" ).val( ui.item.label );
				return false;
			},
			select: function( event, ui ) {
				$( "#user-id" ).val( ui.item.value )
				$( "#user" ).val( ui.item.label );
				$( "#user-eid" ).html( "ID: " + ui.item.desc );
				//$( "#project-icon" ).attr( "src", "images/" + ui.item.icon );
 
				return false;
			}
			//select: function(a, b)
		})
		.autocomplete( "instance" )._renderItem = function( ul, item ) {
			return $( "<li>" )
			.append( "<a>" + item.label + "<br>" + item.desc + "</a>" )
			.appendTo( ul );
		};
	});
});


