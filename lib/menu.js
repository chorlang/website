/*
$(document).ready( function() {
	$.history.init( function( pageName ) {
		if( pageName == "" ) {
			pageName = "about"; // Default content
		}
		$("#nav li a").removeClass( "current" );
		$("#navlink_" + pageName).addClass( "current" );
		$.get( "content/" + pageName + ".html", function(data) {
			$("#body").html( data );
		});
    },
    { unescape: ",/" } );
});

$(document).ready(function() {
	$("#nav li a").click( function() {
		var pageName = this.id.split( "_" )[1];
		$.history.load( pageName );
	});
});
*/

// $(document).ready(function() {
// 	$("#navlink_about").click();
// });