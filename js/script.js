
$( document ).ready(function() {
	});

// window.onload=function(){

// }

$( window ).load(function() 
{
    console.log( "window loaded" );
    
    $('#white_half').hover(function()
	    {
	 	   $("#white_half").css("background-color","black");
	  		},function(){
	  		$("#white_half").css("background-color","#ececec");
		});

     $('#black_half').hover(function()
	    {
	 	   $("#black_half").css("background-color","#ececec");
	  		},function(){
	  		$("#black_half").css("background-color","black");
		});
});
