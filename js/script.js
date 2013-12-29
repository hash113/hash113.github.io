
$( document ).ready(function() {
	//console.log("first");
	});
	// $(window).load(function() { callFunction(); });
// window.onload=function(){

// }

$( window ).load(function() 
{
   	// console.log( "window loaded" );
    $("#spinner").css("display","block");
    loader();

});

function loader()
{
	
// display images
    $("#spinner").css("display","none");
	$('.none,#link_main').delay(50).fadeIn();
    $('#logosvg').animate({marginTop:0},"slow");
    
    


    $('#white_half').hover(function()
	    {
	 	    
	 	   	$( "#wing,#tatoo" ).fadeTo( "slow" , 1);
	 	    $("#tatoohover").fadeIn("slow");
	 	    $( "#left_title" ).fadeTo( "slow" , 0.7);
	 	    
	 	    // fadein
	  		},function(){
	  		$("#tatoohover").fadeOut("slow")
	  		$( "#wing,#tatoo" ).fadeTo( "slow" , 0.1);
	  		$( "#left_title" ).fadeTo( "slow" , 1);

		});

     $('#black_half').hover(function()
	    {
	 	   // $("#black_half").css("background-color","#ececec");
	 	   $('#matrix').fadeTo("slow", 0.3);
	 	   $('#right_title').fadeTo("slow",0.9);

	  		},function(){
	  		$("#black_half").css("background-color","black");
	  		$('#matrix').fadeTo("slow",0.1);
	  		$('#right_title').fadeTo("slow",1);
		});

// click functions
	$('#creativity-button').click(function(){
		window.open("creativity.html","_self");
    	
    });

	$('#link_main').click(function(){
    	$('#welcometab').fadeOut("slow");
    	$('.foot,.boxlink').fadeIn("slow");
    });
}