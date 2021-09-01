function clock() {
	time = new Date();
	clockHours = time.getHours();
	clockMinutes = time.getMinutes();
	clockSeconds = time.getSeconds();
    
    if (clockHours <= 12 ) {
     	percentageHours = clockHours / 12 * 360;
    }  else {
    	percentageHours = clockHours / 24 * 360;
    }

    

    percentageHours += clockMinutes / 60 * 30;
    percentageMinutes = clockMinutes / 60 * 360;
    percentageSeconds = clockSeconds / 60 * 360;

    document.getElementById("hours").style.transform = "rotate("+ percentageHours +"deg)";
    document.getElementById("minutes").style.transform = "rotate("+ percentageMinutes +"deg)";
    document.getElementById("seconds").style.transform = "rotate("+ percentageSeconds +"deg)";
    document.getElementById("hourdigital").innerText = clockHours + ":" + clockMinutes + ":" + clockSeconds;
}


setInterval(clock, 1000);
