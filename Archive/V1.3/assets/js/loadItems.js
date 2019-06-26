
(function($) {
	const auth = firebase.auth();
	const db = firebase.firestore();
	var pageName = window.location.pathname.split("/").pop();
	var col;
	var userMail;
	var query;
	var start;
	const $row = $("section>.row.aln-center");
	
	auth.onAuthStateChanged(function(user) {
		if (user) {
			userMail = user.email;
			start = 1;
		}
	   else {
			// Not logged in
		}
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
					/*'<footer>' + 
						'<ul class="actions">' + 
							'<li><a href="#" class="button alt">Find out more</a></li>' + 
						'</ul>' + 
					'</footer>' +*/ 
				'</section>' + 
			'</div>'
		)
		.appendTo($row);
		
		};
		
	setInterval(function(){
		if(pageName == "whips.html"){
			col = "cars";
		
		}else if(pageName == "cribs.html") {
			col = "realEstate";
			
		}

		if(start){
			
			db.collection(col).get().then(function(snapshot) {
				snapshot.docs.forEach(doc => {
					if(doc.data().authorMail != userMail){
						if(userMail != undefined){
							addItem(doc.data().name, doc, doc.data().description, doc.data().price, doc.data().image);
						}
					}	
				})
			
				
			});

			start = 0;
		
	}}, 1);

})(jQuery);