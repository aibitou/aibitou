$(function(){
	$('li').mouseover(function(){
		$(this).css({'background':'#F1F1F1','color':'#FA7A20'});
		$('.content').slideDown();
	})
	$('li').mouseout(function(){
		$(this).css('background','none');
	})

	$('#menu').mouseover(function(){
		$(this).animate({
			width: '16%',
			height: '100%',
			background: '#666'
		})
	})
	$('#menu').mouseout(function(){
		$(this).animate({
			width: '40px',
			height: '100%',
			background: '#666'
		})
	})
});