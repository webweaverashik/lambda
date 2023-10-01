$(document).ready(function(){
    //Sticky Menu
    $(".js-sticky-standard").waypoint(function(direction){
        if(direction == "down"){
                $("nav").addClass("sticky");
           }else{
                $("nav").removeClass("sticky");
           }
    });
});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

//today date picker

let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;





	// One Page Nav
	var top_offset = $('.header-area').height() - 650;
	$('.header-area nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});


