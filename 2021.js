// Set the date we're counting down to
var countDownDate = new Date("Mar 6, 2022 23:59:59").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function () {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("demo").innerHTML = days + "<small>D</small> " + hours + "<small>H</small> " + minutes + "<small>M</small> " + seconds + "<small>S</small> ";
	document.getElementById("maintitle").innerHTML = "梦想，不会遥远";
	console.log(document.title);
	document.title = '梦想，不会遥远';
	console.log(document.title);
	
	if (distance < 0) {
		clearInterval(countdownfunction);
		document.title = '梦想，触手可及';
		document.getElementById("maintitle").innerHTML = "梦想，触手可及";
		document.getElementById("demo").innerHTML = "16岁，勇往直前";
	}
}, 1000);