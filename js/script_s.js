$( window ).load(function() 
{
	loader();
});

function loader(){
	$("#load").fadeOut("slow");
	$("#container").fadeIn("slow");
	$('.carousel').carousel();
}
