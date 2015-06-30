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
		$( "#inpvutBDate" ).datepicker({
							showAnim: "slideDown",
							dateFormat: "dd M, yy", 
     						changeMonth: true,
     						changeYear: true,
     						yearRange: "c-50:c-10",
     						defaultDate: d
     						});
	});	
	$('#inputBDate').formatDate("dd/mm/yyyy");
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

(function ($) {
    $.fn.formatDate = function (format) {
        var months = { '1': '01', '2': '02', '3': '03', '4': '04', '5': '05', '6': '06', '7': '07', '8': '08', '9': '09', '10': '10',
            '11': '11', '12': '12'
        };
        var days = { '1': '01', '2': '02', '3': '03', '4': '04', '5': '05', '6': '06', '7': '07', '8': '08', '9': '09', '10': '10',
            '11': '11', '12': '12', '13': '13', '14': '14', '15': '15', '16': '16', '17': '17', '18': '18', '19': '19', '20': '20',
            '21': '21', '22': '22', '23': '23', '24': '24', '25': '25', '26': '26', '27': '27', '28': '28', '29': '29', '30': '30', '31': '31'
        };


        var element = this;
        element.attr("maxlength", "14");

        // if it is not numeric or frontslash, do not accept the input
        (element).keypress(function (e) {
            return IgnoreCharacter(e) || isNumeric(e);
        });


        (element).keyup(function (e) {

            // if it is still empty after keyup, just return
            if (IgnoreCharacter(e) || element.val() === "") {
                return false;
            }

            element.val((format === "dd/mm/yyyy")
                            ? formatDDMMYYYY(element.val())
                            : formatMMDDYYYY(element.val()));


        });

        function IgnoreCharacter(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode == 8 //backspace
                || charCode == 37 || charCode == 39 // arrow keys 
                || charCode == 47 // slash 
                || charCode == 16 // shift
                ) {
                return true;
            }
            return false;
        }
        function isNumeric(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }

        function getDay(d) {
            return (days[d] != undefined)
                    ? days[d]
                    : d;
        }

        function getMonth(m) {
            return (months[m] != undefined)
                    ? months[m]
                    : m;

        }
        
        function formatMMDDYYYY(dob) {
            var formattedDate = dob;
            var day, month, year;

            if (dob.slice(dob.length - 1) === "/") {
                var dateParts = dob.split('/');
                var m1 = getDay($.trim(dateParts[0]));
                var d1 = getMonth($.trim(dateParts[1]));

                formattedDate = m1 + " / ";
                if (d1 != undefined && dateParts.length == 3) {
                    formattedDate += d1 + " / ";
                }
            } else if (dob.length < 2) {
                // nothing to do

            } else if (dob.length == 2) {
                // if it is less than equal to 31, append a slash
                if (dob < 13) {
                    formattedDate = dob + " / ";
                } else {
                    var m = getDay(dob.slice(0, 1));
                    var d = getMonth(dob.slice(1));

                    formattedDate = m + " / ";

                    if (d > 0) {
                        formattedDate += d + " / "
                    } else {
                        formattedDate += d;
                    }
                }
            } else if (dob.length == 5) {
                // day has been formated
                // nothing to do
            } else if (dob.length == 10) {
                // day and month have been formated
                // nothing to do
            } else if (dob.length > 5 && dob.length < 10) {
                var dateParts = dob.split('/');
                var m1 = dateParts[0]
                var d1 = dateParts[1];

                // if date has already been input
                formattedDate = $.trim(m1) + " / ";

                if (d1 > 10 || dob.length == 7) {
                    formattedDate += $.trim(d1) + " / ";
                } else {
                    formattedDate += $.trim(d1);
                }

            }

            return formattedDate;
        }

        function formatDDMMYYYY(dob) {
            var formattedDate = dob;
            var day, month, year;

            if (dob.slice(dob.length - 1) === "/") {
                var dateParts = dob.split('/');
                var d1 = getDay($.trim(dateParts[0]));
                var m1 = getMonth($.trim(dateParts[1]));

                formattedDate = d1 + " / ";
                if (m1 != undefined && dateParts.length == 3) {
                    formattedDate += m1 + " / ";
                }
            } else if (dob.length < 2) {
                // nothing to do

            } else if (dob.length == 2) {
                // if it is less than equal to 31, append a slash
                if (dob < 32) {
                    formattedDate = dob + " / ";
                } else {
                    var d = getDay(dob.slice(0, 1));
                    var m = getMonth(dob.slice(1));

                    formattedDate = d + " / ";

                    if (m > 0) {
                        formattedDate += m + " / "
                    } else {
                        formattedDate += m;
                    }
                }
            } else if (dob.length == 5) {
                // day has been formated
                // nothing to do
            } else if (dob.length == 10) {
                // day and month have been formated
                // nothing to do
            } else if (dob.length > 5 && dob.length < 10) {
                var dateParts = dob.split('/');
                var d1 = dateParts[0]
                var m1 = dateParts[1];

                // if date has already been input
                formattedDate = $.trim(d1) + " / ";

                if (m1 > 10 || dob.length == 7) {
                    formattedDate += $.trim(m1) + " / ";
                } else {
                    formattedDate += $.trim(m1);
                }

            }

            return formattedDate;
        }
    };
})(jQuery);



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