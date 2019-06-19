
(function($) {
	const auth = firebase.auth();
	const db = firebase.firestore();
	const col = db.collection("items");
	var mail;
	var query;
	var start;
	const $row = $("section>.row.aln-center");
	auth.onAuthStateChanged(function(user) {
		if (user) {
			mail = user.email;
			//query = col.where("authorMail", "<", mail).where("authorMail", ">", mail);
			//window.alert(query);
			start = 1;
		}
	   else {
			//not logged in
		}
	});
	function addItem(doc, description, price){
		console.log($row);
		$(											
			'<div class="col-8 col-10-medium col-16-small">' + 
				'<section class="box">' +
					'<a href="#" class="image featured"><img src="images/weisserStoff.jpg" alt="" /></a>' + 
					'<header>' + 
						'<h3>Der weiße Stoff</h3>' + 
					'</header>' + 
					'<p>' + description + '</p>' + 
					'<b>Preis: ' + price + ' Euro/M^2</b>' + 
					'<footer>' + 
						'<ul class="actions">' + 
							'<li><a href="#" class="button alt">Find out more</a></li>' + 
						'</ul>' + 
					'</footer>' + 
				'</section>' + 
			'</div>'
		)
		.appendTo($row);
		
	};
	setInterval(function(){
		//var docRef = query.doc("House 1");
		if(start){
			db.collection("items").get().then((snapshot) => {
				snapshot.docs.forEach(doc => {
					addItem(doc, doc.data().description, doc.data().price);
				})
				
				
			});
			/*db.collection("items").where("authorMail", "<", mail).where("authorMail", ">", mail).get().then((snapshot) => {
				console.log(snapshot.docs);
				
				
			});*
			
			/*docRef.get().then(function(doc) {
				if(doc.exists) {
					console.log("Document data:", doc.data());
				} else {
					console.log("No such document!");
				}
			}).catch(function(error) {
				console.lgo("Error getting document: ", error);
				
			});*/
			//window.alert(query);
			start = 0;
		
	}}, 1);

/*		docRef.get().then(function(doc) {
		if (doc.exists) {
			console.log("Document data:", doc.data().price);
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
	*/	
		
		
		
		
		
	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		if(typeof $('#nav > ul').dropotron !== "undefined") {
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center'
			});
		
	// Nav.

		// Title Bar.
			
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);
		
		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
					'<nav>' +
						$('#btns').navList() +
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
})(jQuery);