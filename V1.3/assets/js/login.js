
const auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
  if (user) {
	document.getElementById("btnLogIn").style.display = "none" ;
	document.getElementById("btnLogOut").style.display = "inline-block" ;
	window.location.href = 'index.html'; 
	
  } else {
	document.getElementById("btnLogIn").style.display = "inline-block" ;
	document.getElementById("btnLogOut").style.display = "none" ;
  }
});


function logOut(){
	auth.signOut().then(function(){
		
	}).catch(function(error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		window.alert("Error : " + errorMessage);

	});
};



function logIn(){
	
	var userEmail = document.getElementById("txtEmail").value;
	var userPass = document.getElementById("txtPassword").value;

	auth.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	window.alert("Error : " + errorMessage);
	});
};



