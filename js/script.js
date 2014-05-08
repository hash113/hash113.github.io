$(window).load(function() {

    // $("#spinner").css("display","block");
    loader();

});

function loader() {
    // display images
    // $("#spinner").css("display","none");
    $('#art').hover(function() {
            $(".fullimage").stop(true, false).attr("src", "images/wallpaper_art2.png");
            $(".fullimage").stop(true, false).fadeIn(700);
            $(".display").text("Art ");
            $(".name").stop(true, false).css('color', 'red');
        },
        function() {
            $(".fullimage").fadeOut(500);
            $(".display").text("H.B.");
            $(".name").css('color', 'black');
        });

    $('#programming').hover(function() {
            $(".fullimage").stop(true, false).attr("src", "images/wallpaper_mat.png");
            $(".fullimage").fadeIn(700);
            $(".display").text("Projects ");
            $(".name").css('color', 'green');
        },
        function() {
            $(".fullimage").fadeOut(500);
            $(".display").text("H.B.");
            $(".name").css('color', 'black');
            // $(".fullimage").attr("src","images/wallpaper_art2.png");
        });

    $('#blog').hover(function() {
            $(".fullimage").stop(true, false).attr("src", "images/wallpaper_blog.png");
            $(".fullimage").fadeIn(700);
            $(".display").text("Blog ");
        },
        function() {
            $(".fullimage").fadeOut(500);
            $(".display").text("H.B.");
            $(".name").css('color', 'black');
        });

    $('#about').hover(function() {
            $(".fullimage").stop(true, false).attr("src", "images/wallpaper_ab.png");
            $("span,.artdesc,.fullimage").stop(true, false).fadeIn(700);
            $(".display").text("About");
            $(".name").css('color', 'blue');
        },
        function() {

            $("span,.artdesc,.fullimage").fadeOut(500);
            $(".display").text("H.B.");
            $(".name").css('color', 'black');
        });


}