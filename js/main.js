// JavaScript Document

// Toggle Nav JS
var $win = $(window);
var navTop = document.querySelector('.nav-top');
var $logo = $('.logo');
var $headerSection = $('.header-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$logo.css('transform', 'rotate(' + scrollPos / 1 + 'deg)');
	$headerSection.css('background-position', 'center ' + scrollPos / 1 + 'px');
});

$headerSection.waypoint(function () {
	$logo.addClass('js-logo-fade');
	
}, { offset: '50%' });
	
document.querySelector('.nav-btn').addEventListener('click', function (e) { 
		e.preventDefault();
	
if (navTop.getAttribute('data-state') == 'expanded'){
		navTop.setAttribute('data-state', 'collapsed');
		
}else{
		navTop.setAttribute('data-state', 'expanded');
		
}
	
});