// Function that alternates showing concealed password and actual password.
function showPassword() {
	var x = document.getElementById("password");
	if (x.type === "password") {
	    x.type = "text";
	} else {
	    x.type = "password";
	}
}

// Function that constantly checks for changes in the input field and 
// changes style properties depending on the input.
var emailInput = document.getElementById("email");
emailInput.onkeyup = function() {
	if(validateEmail() === true) {
		document.getElementById("greenTick").style.visibility = "visible";
		document.getElementById("invalidEmail").style.visibility = "hidden";
		document.getElementById("signupbutton").disabled = false;
	}
	else {
		document.getElementById("invalidEmail").style.visibility = "visible";
		document.getElementById("greenTick").style.visibility = "hidden";
		document.getElementById("signupbutton").disabled = true;
	}
}

// Function that checks a pattern of an email typed by a user and outputs is the format is correct or wrong.
function validateEmail() {
	var email = document.getElementById("email").value;
	var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(pattern.test(email) === true) {
		return true;
	}
	else {
		return false;
	}
}

// Function that shows a pop-up text when a user registers.
function signUp() {
	if (document.getElementById("greenTick").style.visibility === "visible") {
		document.getElementById("signedUp").style.visibility = "visible";
	}
}

// A loop that closes a success message when a user clicks on a closing "x"
var close = document.getElementsByClassName("closebtn");
for (var i = 0; i < close.length; i++) {
	close[i].onclick = function(){
	    var div = this.parentElement;
	    div.style.opacity = "0";
	    setTimeout(function(){ div.style.display = "none"; }, 600);
	}
}
