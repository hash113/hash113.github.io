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
	$('.sketch').click(function(){
		
		$("body").slideUp(600);
		window.open("sketches.html","_self");

	});
}