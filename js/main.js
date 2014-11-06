// JavaScript Document

// Toggle Nav JS
var $win = $(window);
var navTop = document.querySelector('.nav-top');
var $logo = $('.logo');
var $headerSection = $('.header-section');
var $portfolioSection = $('#portfolio');
var contact = $('.contact');
var contactDetails = $('.contact-details');
var $photo = $('.photo');
var $about = $('.about');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$logo.css('transform', 'rotate(' + scrollPos / 1 + 'deg)');
	$headerSection.css('background-position', 'center ' + scrollPos / 1 + 'px');
	$portfolioSection.css('margin-top', '-' + scrollPos / .8 + 'px');
});

$headerSection.waypoint(function () {
	$logo.addClass('js-logo-fade');
	
}, { offset: '50%' });

$about.waypoint(function () {
	$photo.addClass('js-photo-slide');
	
}, { offset: '50%' });
	
document.querySelector('.nav-btn').addEventListener('click', function (e) { 
		e.preventDefault();
	
if (navTop.getAttribute('data-state') == 'expanded'){
		navTop.setAttribute('data-state', 'collapsed');
		
}else{
		navTop.setAttribute('data-state', 'expanded');
		
}
	
});

var buttonClickHandler = function () {
var currentState = contactDetails.attr('data-state');

if (currentState == 'active') {
	contactDetails.attr('data-state', 'inactive');
} else {
	contactDetails.attr('data-state', 'active');
}
};