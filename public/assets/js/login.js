// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

function login(){
	
	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;
	window.alert(userPass);
	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	window.alert("Error : " + errorMessage);
});
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	window.location.replace("/index.html");
  } else {
    window.location.replace("/login.html");
  }
});

$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});


