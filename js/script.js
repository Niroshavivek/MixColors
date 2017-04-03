$(document).ready(function () {
	var a=80;
	var b=80;
	var c=80;
	$(document).ready(function(event) {
	$(".tap").click(function(clickEvent) {
		if ($(".tap").hasClass("active")) {
			$(".water-container").stop()
			$(".tap").removeClass('active')
			$('.water-flow').removeClass('active')
			$('.water-container4').stop()
		} else {
			$(".tap").addClass('active')
			$(".water-container").animate({height: 0},18000)
			$('.water-flow').addClass('active')
			$('.water-container4').addClass('active')
			$(".water-container4").animate({
				height:a
			},28000)
			a++;
		}
	})
})

var aa="black"
var bb="yellow"


	$(document).ready(function(event) {
	$(".tap1").click(function(clickEvent) {
		if ($(".tap1").hasClass("active")) {
			$(".water-container1").stop()
			$(".tap1").removeClass('active')
			$('.water-flow1').removeClass('active')
			$('.water-container4').stop()
		} else {
			$(".tap1").addClass('active')
			$(".water-container4").css("background","yellow");
			$(".water-container1").animate({height: 0},20000)
			$('.water-flow1').addClass('active')
			$('.water-container4').addClass('active')
			$(".water-container4").animate({
			backgroundColor: aa,
			height:b
			},28000)
			aa="yellow"
			
			a++;
		}
	})
})





	$(document).ready(function(event) {
	$(".tap2").click(function(clickEvent) {
		if ($(".tap2").hasClass("active")) {
			$(".water-container2").stop()
			$(".tap2").removeClass('active')
			$('.water-flow2').removeClass('active')
			$('.water-container6').stop()
		} else {
			$(".tap2").addClass('active')
			$(".water-container2").animate({height: 0},18000)
			$('.water-flow2').addClass('active')
			$('.water-container4').addClass('active')
			$(".water-container4").animate({
				height:c
			},28000)
			c++;
		}
	})
})
});