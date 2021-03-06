// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
				
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    	document.getElementById("header").style.fontSize = "3vw";
    } else {
    	document.getElementById("header").style.fontSize = "4vw";
    }
}
	
function openInstagram() {
	window.open("https://www.instagram.com/thesocietyofqueens/", "_blank");
}

function openTwitter() {
	window.open("https://twitter.com/soqinc", "_blank");
}

function openFacebook() {
	window.open("https://www.facebook.com/thesocietyofqueens/", "_blank");
}

function openPaypal() {
	var result = confirm("You will be taken to our PayPal donation page."); 
            if (result == true) { 
                window.open("https://www.paypal.me/SOQinc", "_blank"); 
            }
}

function openEvents() {
	window.open("HTML/events.html", "_self");
}

// Set countdown date
var countDownDate = new Date("Apr 14, 2020 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get current system time
  var now = new Date().getTime();
    
  // Calculate difference
  var distance = countDownDate - now;
    
  // Calculate component values
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
    
  // Output to p tag with neat little checks to have correct use of plurals
  
	if (hours == 1) {
		document.getElementById("countdownLabel").innerHTML = "April 14th, 18:00 - " + days + " days,  " + hours + " hour and " + minutes + " minutes to go!";
	}
	else if (days == 1) {
		document.getElementById("countdownLabel").innerHTML = "April 14th, 18:00 - " + days + " day,  " + hours + " hours and " + minutes + " minutes to go!";
	}
	else if (hours == 1 && hours == 1) {
		document.getElementById("countdownLabel").innerHTML = "April 14th, 18:00 - " + days + " day,  " + hours + " hour and " + minutes + " minutes to go!";
	} else {
		document.getElementById("countdownLabel").innerHTML = "April 14th, 18:00 - " + days + " days,  " + hours + " hours and " + minutes + " minutes to go!";
	}
  
      
  // Catch text for if timer has passed the date 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownLabel").innerHTML = "This event already happened!";
  }
}, 1000);