var countDownDate = new Date("Jul 8, 2024 12:00:00").getTime(); // Sets the date and time to count down to (July 8 2024, 12:00:00)

var x = setInterval(function() { // Sets up a recurring function to execute every 1000 milliseconds (1 second)

  var now = new Date().getTime(); // Gets the current date and time

  var distance = countDownDate - now; // Calculates the distance between now and the countdown date

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Displays the result in the "countdown" element
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the countdown is finished, (distance is less than 0), clear the interval and show the below message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "HAPPY BIRTHDAY BETH!";
  }
}, 1000); // Repeat every 1 second (1000 milliseconds)