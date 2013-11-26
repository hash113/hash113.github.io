
$( document ).ready(function() {
	});

// window.onload=function(){

// }

$( window ).load(function() 
{
    console.log( "window loaded" );
    
    $('#white_half').hover(function()
	    {
	 	    $("#tatoo").css("opacity","0.5");

	 	    // $("#tattoo").fadeIn("slow");
	 	    // $("#wing").css("display","inline");
	 	    $("#wing").fadeIn("slow");
	 	    $("#tatoohover").fadeIn("slow");
	 	    // fadein
	  		},function(){
	  		$("#white_half").css("background-color","#ececec");
	  		$("#tatoo").css("opacity","0.1");
	  		$("#wing,#tatoohover").css("display","none");

		});

     $('#black_half').hover(function()
	    {
	 	   // $("#black_half").css("background-color","#ececec");
	 	   $('#matrix').css("opacity","0.4");
	  		},function(){
	  		$("#black_half").css("background-color","black");
	  		$('#matrix').css("opacity","0.2");
		});

     $('#white_half').click(function()
     {
     	window.open("creativity.html","_self");
     });

     $('#black_half').click(function()
     {
     	window.open("programming.html","_self");
     });
});
