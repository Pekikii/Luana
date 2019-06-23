
(function($) {
	const auth = firebase.auth();
	var mail;
	var pageName = window.location.pathname.split("/").pop();
	
	auth.onAuthStateChanged(function(user) {
		if (user) {
			//alert("logged in");
		//console.log(user.email);
		if(pageName == "index.html"){
			//console.log("user signed in and on login page. Redirecting to main.html Link: " + pageName);
			window.location = "main.html";

		}
	  } else {
			//alert("not logged in");
			if(pageName != "index.html"){
				//console.log("user not signed in and not on login page. Redirecting to index.html Link: " + pageName);
				window.location = "index.html";

			}
		}
	});


	function logOut(){
		//console.log("logged out");
		auth.signOut().then(function(){
		return true;

		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			window.alert("Error : " + errorMessage);

		});
	};
	$(document).ready(function(){
		$("button#btnLogOut").on("click", logOut);
		$("button#btnLogOut").on("tap", logOut);
		$("button#btnLogOut span").on("click", logOut);
		$("button#btnLogOut span").on("tap", logOut);
	});
	

	/*document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('btnLogOut').addEventListener('click',function(){
            alert('hiii');
        },false);
    },false);*/
	
	//console.log($(".btnLogOut"));

	function logIn(){
		//console.log("logged in");
		var userEmail = document.getElementById("txtEmail").value;
		var userPass = document.getElementById("txtPassword").value;

		auth.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		window.alert("Error : " + errorMessage);
		});
	};
	$(document).ready(function(){
		$("button#btnLogIn").on("click", logIn);
		$("button#btnLogIn").on("tap", logIn);
	});

	
	
})(jQuery);