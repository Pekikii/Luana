
(function($) {
    
    const db = firebase.firestore();
    const auth = firebase.auth();
    var	$window = $(window),
	$body = $('body');
    var pageName = window.location.pathname;
    var col;
    var userMail;
    var start;
    var $row = $("section>.row.aln-center");
    
    $window.on('load', function() {
	window.setTimeout(function() {
	    $body.removeClass('is-preload');
	}, 100);
    });

    if(typeof $('#nav > ul').dropotron !== "undefined") {
	$('#nav > ul').dropotron({
	    mode: 'fade',
	    noOpenerFade: true,
	    alignment: 'center'
	});
	$(
	    '<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'</div>'
	)
	    .appendTo($body);
	$(
	    '<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
	    .appendTo($body)
	    .panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'left',
		target: $body,
		visibleClass: 'navPanel-visible'
	    });
    }

    auth.onAuthStateChanged(function(user) {
	if (user) {
	    if(pageName == "/"){
		window.location = "/main";

	    }
	    userMail = user.email;
	    start = 1;

	}
	else {
	    if(pageName != "/"){
		window.location = "/";
	    }

	}
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

    function addItem(name, doc, description, price, image){
	$(											
	    '<div class="col-8 col-10-medium col-16-small">' + 
		'<section class="box">' +
		'<a href="#" class="image featured"><img src="images/' + image + '" alt="" /></a>' + 
		'<header>' + 
		'<h3>' + name + '</h3>' + 
		'</header>' + 
		'<p>' + description + '</p>' + 
		'<b>Price: $' + price + '</b>' + 
		'</section>' + 
		'</div>'
	)
	    .appendTo($row);
    };

    setInterval(function(){
	if(pageName == "/cars"){
	    col = "cars";
	}else if(pageName == "/realEstate") {
	    col = "realEstate";
	}
	if(start && userMail != undefined && col != undefined){
	    db.collection(col).get().then(function(snapshot) {
		snapshot.docs.forEach(doc => {
		    if(doc.data().authorMail != userMail){
			addItem(doc.data().name, doc, doc.data().description, doc.data().price, doc.data().image);
			}
		    })
	    });
	    start = 0;
	}}, 1);
})(jQuery);
