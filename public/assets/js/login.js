
(function($) {
    const auth = firebase.auth();
    var mail;
    var pageName = window.location.pathname;
    console.log(pageName);
    auth.onAuthStateChanged(function(user) {
	if (user) {
	    if(pageName == "/"){
		window.location = "/main";

	    }
	} else {
	    if(pageName != "/"){
		window.location = "/";

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
    $(document).ready(function(){
	$("button#btnLogOut").on("click", logOut);
	$("button#btnLogOut").on("tap", logOut);
	
    });
    

    function logIn(){
	var userEmail = document.getElementById("txtEmail").value;
	var userPass = document.getElementById("txtPassword").value;
	auth.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
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
