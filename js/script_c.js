$( window ).load(function() 
{
	$('#sketches').click(function(){
		$("#two").fadeIn("slow");
		$("#one").fadeOut("slow");
	});

	$('#graphics').click(function(){
		$("#three").fadeIn("slow");
		$("#one").fadeOut("slow");
	})
});