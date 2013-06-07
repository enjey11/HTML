$(document).ready(function(){

	//jQuery(".hero-unit h1").fitText(1.1, { minFontSize: '50px', maxFontSize: '110px' });
	$(window).scroll(function () {
  		alert("hello");
	});

});

$(function(){

	//HeroU = $(".title-1").height();

	//
	navRight = $(".redes").width();

	$("#navigationMap").css('right',navRight);
	
	// container is the DOM element;	
	var container = $(".hero-unit h1, .hero-unit h2");
	
	// Shuffle the contents of container
	container.shuffleLetters();

	$('#ascensorBuilding').ascensor({
		ascensorName: 'ascensor',
		childType: 'section',
		ascensorFloorName: ['INICIO','NOSOTROS','SERVICIOS','CLIENTES','BLOG','CONTACTANOS'],
		time: 300,
		windowsOn: 0,
		direction: "chocolate",
		ascensorMap: [[1,0],[1,1],[2,1],[2,2],[2,3],[1,3]],
		easing: 'easeInOutQuad',
		keyNavigation: true,
		queued: true,
		queuedDirection: "x",
		overflow:"hidden"
	})
	
});