
$( window ).load(function() 
{
   	
    // $("#spinner").css("display","block");
    loader();

});

function loader()
{
// display images
    // $("#spinner").css("display","none");
    $('#art').hover(function(){
                // document.body.style.backgroundImage=url('../images/wallpaper_art.jpg');
                $(".fullimage").fadeIn(700);
                $(".display").text("Art ");
                $(".name").css('color', 'red');

    	},
        function(){
            $(".fullimage").fadeOut(500);
            $(".display").text("H B");
            $(".name").css('color', 'black');
        }
        );
}