$( window ).load(function() 
{
 	$("#one,.header").fadeIn("slow");

 	$(".sketch").hover(function(){
 		$("#hide").fadeIn("slow")},function(){
 			$("#hide").fadeOut("slow")
 	});


// onclick link
	$('.sketch').click(function(){
		window.open("sketches.html","_self");
	});

});