console.log("'Allo 'Allo!"),$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$("a.page-scroll").bind("click",function(a){var b=$(this);$("html, body").stop().animate({scrollTop:$(b.attr("href")).offset().top},1500,"easeInOutExpo"),a.preventDefault()})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()});