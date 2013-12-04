
$( document ).ready(function() {
	console.log("first");
	});
	
// window.onload=function(){

// }

$( window ).load(function() 
{
    console.log( "window loaded" );

    $('#link_main').click(function(){
    	$('#welcometab').fadeOut("slow");
   

    });
    
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

     $('#white_half').click(function()
     {
     	$("#welcometab,#white_half,#black_half").fadeOut("fast");
     	window.open("creativity.html","_self");
     });

     $('#black_half').click(function()
     {
     	window.open("programming1.html","_self");
     });
});
