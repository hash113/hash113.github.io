
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
        }  );

    $('#programming').hover(function(){
                $(".fullimage").attr("src","images/wallpaper_mat.png");
                $(".fullimage").fadeIn(700);
                $(".display").text("Projects ");
                $(".name").css('color', 'green');
        },
        function(){
            $(".fullimage").fadeOut(500);
            $(".display").text("H B");
            $(".name").css('color', 'black');
            $(".fullimage").attr("src","images/wallpaper_art2.png");
        }  );

    $('#blog').hover(function(){
                // document.body.style.backgroundImage=url('../images/wallpaper_art.jpg');
                $(".fullimage").fadeIn(700);
                $(".display").text("Blog ");
                $(".name").css('color', 'Violet');
        },
        function(){
            $(".fullimage").fadeOut(500);
            $(".display").text("H B");
            $(".name").css('color', 'black');
        }  );

    $('#about').hover(function(){
                // document.body.style.backgroundImage=url('../images/wallpaper_art.jpg');

        $('body').css('background-color', '#ececec');
                $("span,.artdesc").fadeIn(700);
                $(".display").text("About");
                $(".name").css('color', 'blue');
        },
        function(){
            $('body').css('background-color', '#ffffff');
            $("span,.artdesc").fadeOut(500);
            $(".display").text("H B");
            $(".name").css('color', 'black');
        }  );


}