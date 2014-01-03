
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
    
    $('#art-button').hover(function(){
    	$(".artdisplay").fadeIn('slow');
    	$(".prodisplay").fadeOut('slow');
    	},
    	function(){
	$(".artdisplay").fadeOut('slow');
    	}
    )
$('#programming-button').hover(function(){
    	$(".prodisplay").fadeIn('slow');},
    	function(){
	$(".prodisplay").fadeOut('slow');
    	
    })

// click functions
	
$('#art-button').click(function(){
		window.open("creativity.html","_self");
    });
$('#programming-button').click(function(){
		window.open("programming.html","_self");
    });
	$('#link_main').click(function(){
    	$('#welcometab').fadeOut("slow");
    	$('.foot,.boxlink').fadeIn("slow");
    });
}