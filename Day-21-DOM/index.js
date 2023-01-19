setInterval(function () {
     var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
     document.getElementById("years").style.color = randomColor;
}, 1000);

setInterval(function () {
     var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
     document.getElementById("years").style.color = randomColor;
     document.getElementById("clock").style.backgroundColor = randomColor;
}, 1000);

function displayTime() {
     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var day = currentTime.getDate();
     var month = currentTime.getMonth() + 1; // January is 0
     var year = currentTime.getFullYear();
     var timeOfDay = hours < 12 ? "AM" : "PM";

     // format hours, minutes, and seconds
     hours = hours > 12 ? hours - 12 : hours;
     hours = hours == 0 ? 12 : hours;
     minutes = (minutes < 10 ? "0" : "") + minutes;
     seconds = (seconds < 10 ? "0" : "") + seconds;

     // display time
     var currentTimeString = hours + ":" + minutes + ":" + seconds + " " + timeOfDay + " " + day + "-" + month + "-" + year;
     document.getElementById("clock").innerHTML = currentTimeString;
}

setInterval(displayTime, 1000);
