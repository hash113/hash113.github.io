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
 	$(".back").click(function(){
 		$(this).fadeOut(0);
 		$(".projectdesc").fadeOut(0);
 		$(".playground,.blog,.playground").fadeIn(0);
 		$(".centerfont").animate({
			paddingTop:"30%"
			},
			500);
		$( ".project,.blog,.playground" ).animate({
		    width: "32%",
		    marginLeft: "10px"
		  }, 500 );

		
 	});

// onclick link
	$('.project').click(function(){
		$(".back,.projectdesc").fadeIn(0);
		$(".playground,.blog").fadeOut(0);
		

		$(".centerfont").animate({
			paddingTop:"1%"
			},
			500);
		$( ".project" ).animate({
		    width: "90%",
		    marginLeft: "5%"
		  }, 500 );

	});
}