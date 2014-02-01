

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
 		$(".cover").css("overflow","hidden");
 		$(".centerfont").animate({
			paddingTop:"30%"
			},
			500);
		$( ".project,.blog,.playground" ).animate({
		    width: "32%",
		    marginLeft: "10px"
		  }, 500 );
		$("#harshbhatia").css("background","none");
		
 	});

// onclick link
	$('.project').click(function(){
		$(".back,.projectdesc").fadeIn(500);
		$(".playground,.blog").fadeOut(200);
		 $(".cover").css("overflow","auto");

		$("#harshbhatia").css("background","url(images/propics/prowebsitehb.png)");
		$("#harshbhatia").css("background-size","100%");

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