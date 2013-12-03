$( window ).load(function() 
{
 	$("#one,.header").fadeIn("slow");

 	$(".sketch").hover(function(){
 		$("#sketch_cover").fadeIn("slow")},function(){
 			$("#sketch_cover").fadeOut("slow")
 	});


// onclick link
	$('.sketch').click(function(){
		window.open("sketches.html","_self");
	});

});