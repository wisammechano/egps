$(document).ready( function() {
	$("#loginForm").validate({
		rules: {
			username: {
				required: true,
				minlength: 5,
				onfocusout: true,
				validClass: "has-success"
			},
			password: {
				required: true,
				email: true
			}
		},
		messages: {
			username: {
				required: "Please specify your username",
				minlength: "Too Short"
			},
			password: {
				required: "Forgot Your Password!",
				email: "Your email address must be in the format of name@domain.com"
			}
		}
	});
	$('input[type="tel"]').forceNumeric();
});

(function ( $ ) {
	jQuery.fn.forceNumeric = function () {
		return this.each(function () {
			$(this).keydown(function (e) {
				var key = e.which || e.keyCode;
				if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
					// numbers   
					key >= 48 && key <= 57 ||
					// Numeric keypad
					key >= 96 && key <= 105 ||
					// comma, period and minus, . on keypad
					//key == 190 || key == 188 || key == 109 || key == 110 ||
					// Backspace and Tab and Enter
					key == 8 || key == 9 || key == 13 ||
					// Home and End
					key == 35 || key == 36 ||
					// left and right arrows
					key == 37 || key == 39 ||
					// Del and Ins
					key == 46 || key == 45)
					return true;
				return false;
			});
		});
	};
}( jQuery ));


/*
(function ( $ ) {
	$.fn.validate = function ( options ) {
		var settings = $.extend({
			//Defaults
			validateURL: "./validate",
			showErrors: true,
			rules
		}, options );
		
		return this.css({
			color: settings.color,
			backgroundColor: settings.bg
		});
	}
	
} ( jQuery ));

(function ( $ ) {
 
    $.fn.greenify = function( options ) {
 
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );
 
        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
 
    };
 
}( jQuery ));

(function( $ ) {
 
    $.fn.showLinkLocation = function() {
 
        this.filter( "a" ).each(function() {
            var link = $( this );
            link.append( " (" + link.attr( "href" ) + ")" );
        });
 
        return this;
 
    };
 
}( jQuery ));
 
// Usage example:
$( "a" ).showLinkLocation();

*/
/* $.validator.setDefaults({
	submitHandler: function() {
		alert("submitted!");
	}
});

$().ready(function() {
	// validate the comment form when it is submitted
	$("#loginForm").validate();

	// validate signup form on keyup and submit
	$("#regForm").validate({
		rules: {
			inputUsername: {
				required: true,
				minlength: 2
			},
			inputPassword: {
				required: true,
				minlength: 5
			},
			inputPasswordC: {
				required: true,
				minlength: 5,
				equalTo: "#inputPassword"
			},
			inputEmail: {
				required: true,
				email: true
			},
		},
		messages: {
			inputUsername: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			},
			inputPassword: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			inputPasswordC: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			},
			inputEmail: "Please enter a valid email address",
		}
	});

	// propose username by combining first- and lastname
	$("#username").focus(function() {
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		if (firstname && lastname && !this.value) {
			this.value = firstname + "." + lastname;
		}
	});

	//code to hide topic selection, disable for demo
	var newsletter = $("#newsletter");
	// newsletter topics are optional, hide at first
	var inital = newsletter.is(":checked");
	var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
	var topicInputs = topics.find("input").attr("disabled", !inital);
	// show when newsletter is checked
	newsletter.click(function() {
		topics[this.checked ? "removeClass" : "addClass"]("gray");
		topicInputs.attr("disabled", !this.checked);
	});
});

 */