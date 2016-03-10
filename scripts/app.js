//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(50).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(50).css({'overflow':'visible'});
	})
//]]>

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top-scroll").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top-scroll").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Back to Top
$(document).ready(function(){
	var t=220,s=500;
	$(window).scroll(function(){
		$(this).scrollTop()>t?$(".back-to-top").fadeIn(s):$(".back-to-top").fadeOut(s)}),
		$(".back-to-top").click(function(t){return t.preventDefault(),
		$("html, body").animate({scrollTop:0},s),!1}),
		$("a.scroll").click(function(){
			if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
				var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),
						t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}
	});
});


//Right Side Off-Canvas
// Closes the sidebar menu
$("#menu-toggle, .list-login01, .list-singup01").click(function(e) {
	$("#sidebar-wrapper").toggleClass("active");
	$(".wrapper").toggleClass("active");
	$('body').css("overflow-x","hidden");
});