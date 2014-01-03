$( window ).load(function() 
{
	loader();

});

function loader(){
	$("#load").fadeOut("slow");
	$("#container").fadeIn("slow");
 	$(".header").fadeIn(600);

 	$(".sketch").hover(function(){
 		$("#sketch_cover").fadeIn("slow")},function(){
 			$("#sketch_cover").fadeOut("slow")
 	});


// onclick link
	$('.project').click(function(){
		
		// $("body").slideUp(600);
		window.open("https://github.com/hash113?tab=repositories","_self");

	});
}