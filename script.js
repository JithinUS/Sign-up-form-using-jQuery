$(function(){
    $("#username_errormsg").hide();
    $("#mailid_errormsg").hide();
    $("#password1_errormsg").hide();
    $("#password2_errormsg").hide();

    var error_username = false;
    var error_mailid = false;
    var error_password1 = false;
    var error_password2 = false;

    $("#username").focusout(function(){
        check_username();
    })
    $("#email").focusout(function(){
        check_email();
    })
    $("#password1").focusout(function(){
        check_password1();
    })
    $("#password2").focusout(function(){
        check_password2();
    })

    function check_username() {
	
		var username_length = $("#username").val().length;
		
		if(username_length < 5 || username_length > 20) {
			$("#username_errormsg").html("Should be between 5-20 characters");
			$("#username_errormsg").show();
			error_username = true;
		} else {
			$("username_errormsg").hide();
		}
    }
    
	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#email").val())) {
			$("#mailid_errormsg").hide();
		} else {
			$("#mailid_errormsg").html("Invalid email address");
			$("#mailid_errormsg").show();
			error_email = true;
		}
	
	}
	
    function check_password1() {
	
		var password_length = $("#password1").val().length;
		
		if(password_length < 8) {
			$("#password1_errormsg").html("At least 8 characters");
			$("#password1_errormsg").show();
			error_password = true;
		} else {
			$("#password1_errormsg").hide();
		}
	
	}
    function check_password2() {
	
		var password = $("#password1").val();
		var retype_password = $("#password2").val();
		
		if(password !=  retype_password) {
			$("#password2_errormsg").html("Passwords don't match");
			$("#password2_errormsg").show();
			error_retype_password = true;
		} else {
			$("#password2_errormsg").hide();
		}
	
	}

})