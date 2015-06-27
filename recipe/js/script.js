$(document).ready(function() {
	$('.ingredient ul li').click(function(){ 
 		var q = $(this).index()+1;
 		$('.picture img:nth-child('+q+')').toggleClass("shade");
 		$(this).toggleClass("lineout"); 
    });
	$('.ingredient ul li').hover(function(){
		var i = $(this).index()+1;
		$('.picture img:nth-child('+i+')').toggleClass("bigup");
	});	
	$('.picture img').click(function(){ 
		var x = $(this).index()+1;
		$(this).toggleClass("shade");
 		$('.ingredient ul li:nth-child('+x+')').toggleClass("lineout"); 
    });
	$('.ingredient ul li').hover(function(){
		$('li').toggleClass('pointer');
	});
	$('.instructionParagraph').hover(function(){
		$('p').toggleClass('pointer');
	});
	$('.instructionParagraph').click(function(){
		if( $(this).hasClass('highL')){	  
			$(this).removeClass('highL');		
		}else if ($(this).hasClass('highL') || $('p').hasClass('highL')){
			$('p').removeClass('highL')
			$(this).addClass('highL');
		}else{
			$(this).addClass('highL');
		}
	});
	$('.buttonToggleimages').click(function(){
		$('img').toggle();
	});	
});