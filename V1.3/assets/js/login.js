
(function($) {
	const auth = firebase.auth();
	var mail;

	auth.onAuthStateChanged(function(user) {
	  if (user) {
		if(window.location.href =="file:///D:/Programming%20etc/Shared%20Folder%20Ubuntu%20Main%2018.04.2/Luana/V1.3/login.html"){
		mail = user.email;
		window.alert("on login logged in. redirecting to index User Email: " + mail);
		window.location.replace ("index.html");

		}
	  } else {

			window.alert(window.location.href);
			if(window.location.href !="file:///D:/Programming%20etc/Shared%20Folder%20Ubuntu%20Main%2018.04.2/Luana/V1.3/login.html"){
				mail = null;
				window.alert("not on login and logged out. Redirecting to login page Email: " + mail);
				window.location.replace ("login.html");

			}
		}
	});


	function logOut(){
		auth.signOut().then(function(){
		window.alert("pressed log out button");
		return true;

		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			window.alert("Error : " + errorMessage);

		});
	};
	$("button#btnLogOut").on("click", logOut);


	function logIn(){
		window.alert("pressed log in button");
		var userEmail = document.getElementById("txtEmail").value;
		var userPass = document.getElementById("txtPassword").value;

		auth.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		window.alert("Error : " + errorMessage);
		});
	};
	$("button#btnLogIn").on("click", logIn);
	
})(jQuery);


