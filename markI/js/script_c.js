$( window ).load(function() 
{
	loader();

});

function loader(){
	$("#load").fadeOut("slow");
	$("#container").fadeIn("slow");
 	$("#one,.header").fadeIn(600);

 	$(".sketch").hover(function(){
 		$("#sketch_cover").fadeIn("slow")},function(){
 			$("#sketch_cover").fadeOut("slow")
 	});
 	$(".poem").hover(function(){
 		$("#poem_cover").fadeIn("slow")},function(){
 			$("#poem_cover").fadeOut("slow")
 	});

 	$(".graphicdesign").hover(function(){
 		$("#graphic_cover").fadeIn("slow")},function(){
 			$("#graphic_cover").fadeOut("slow")
 	});

}