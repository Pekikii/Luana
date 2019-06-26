
(function($) {
	const auth = firebase.auth();
	var mail;

	auth.onAuthStateChanged(function(user) {
	  if (user) {
		if(window.location.href =="file:///D:/Programming%20etc/Shared%20Folder%20Ubuntu%20Main%2018.04.2/Luana/V1.3/login.html"){
			mail = user.email;
			window.location.replace ("index.html");

		}
	  } else {
			if(window.location.href !="file:///D:/Programming%20etc/Shared%20Folder%20Ubuntu%20Main%2018.04.2/Luana/V1.3/login.html"){
				mail = null;
				window.location.replace ("login.html");

			}
		}
	});


	function logOut(){
		auth.signOut().then(function(){
		return true;

		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			window.alert("Error : " + errorMessage);

		});
	};
	$("button#btnLogOut").on("click", logOut);


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
	$("button#btnLogIn").on("click", logIn);
	
})(jQuery);


