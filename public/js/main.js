$(document).ready( function() {
	$('div.check').find("input").blur(function() {
		var item = $(this).prop('name');
		var val = $(this).prop('value');
		var id = '#'+ $(this).prop('id');
		if(val !== '') {
			var url = './validate?' + item + '=' + val;
			$.getJSON(url, function(result) {
				if (result.valid == false) {
					if(($(id).parent().find('.glyphicon').length > 0)) {
						$(id).parent().find('.glyphicon').remove();
					}
					if($(id).parent().find('.error').length === 0) {
						element = '<span class="error"><small>' + result.msg + '</small></span>';
						icon = '<span class="glyphicon glyphicon-remove form-control-feedback"></span>';
						$(id).parents('div.check').addClass('has-error').addClass('nooo');
						$(id).after(icon);
						$(id).after(element);
					}
				}
				else {
					$(id).parents('div.check').removeClass('has-error');
					$(id).parent().find('.error, .glyphicon').remove();
					icon = '<span class="glyphicon glyphicon-ok form-control-feedback"></span>';
					$(id).parents('div.check').addClass('has-success');
					$(id).after(icon);
				};
			});
		}
	});
	$('form.validate').submit(function (e) {
		
		var errors = $(this).find('div.has-error');
		if(!validate(this) || errors.length ) {
			sleep(500);
			e.preventDefault();
		};
	});
//	$('#inputMobileN').blur(function() {
//		var mobile = '+964';
//		var opCode = $('#inputMobOp').html();
//		if (!IsNumeric(opCode)) {
//			$('#inputMobOp').addClass('error'); 
//		}
//		opCode = opCode.slice(1);
//		//alert (opCode);
//		mobile += opCode + this.value;
//		$('#mobileHidden').val(mobile);
//	});		
	$('input[type="tel"]').forceNumeric();
	$(function() {
		var d = new Date(1990 , 10, 28);
		$( "#inputBDate" ).datepicker({
							showAnim: "slideDown",
							dateFormat: "dd M, yy", 
     						changeMonth: true,
     						changeYear: true,
     						yearRange: "c-50:c-10",
     						defaultDate: d
     						});
	});	
});

function validate(form) {
	var items = $(form).find("div.required input, select").filter(function() { return this.value == ""; });
	//alert($items.length);
	$("div.has-error").not("div.nooo").removeClass('has-error');
	if(items.length > 0){
		for (i=0; i<items.length; i++) {
			var item = items.eq(i);
			item.parents('div.required').addClass('has-error');
			i===0 ? item.focus(): false;				
		};
		return false;
	}
	else {
		return true;
	};
};

function sleep( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

function IsNumeric(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}
/*
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var regex2 = /^[a-zA-Z0-9_.+-]+\@[a-zA-Z0-9-]+\.+[a-zA-Z0-9]{2,4}+$/;
  return regex.test(email);
};
*/
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
					// Home and End and Plus
					key == 35 || key == 36 || key == 107 ||
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