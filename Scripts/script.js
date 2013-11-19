
$( document ).ready(function() {
	var $win = $(window),
        w = 0,h = 0,
        opacity = 1,
        getWidth = function() {
            w = $win.width();
            h = $win.height();
        };

	$(document).mousemove(function(e) {
	    getWidth();
	    opacity = event.pageX/w*2
	    // console.log(opacity);
	    $('#rightsplit').css('opacity',opacity);
	    $('#leftsplit').css('opacity',1-opacity);
	});
});


/*
$( window ).load(function() {
    console.log( "window loaded" );
});
*/