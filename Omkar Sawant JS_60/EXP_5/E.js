function display() {
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var ip = date + " " + time;

    document.getElementById("demo").innerHTML = "Timer: " + ip;

    let deadline = new Date(ip).getTime();

    // To call defined function every second
    let x = setInterval(function () {
        // Getting current time
        let now = new Date().getTime();

        // Calculating the time difference
        let t = deadline - now;

        // Getting value of days, hours, minutes, and seconds
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);

        // Output the remaining time
        document.getElementById("demo").innerHTML =
            "Days: " + days + "<br>" +
            "Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;

        // If the countdown is expired
        if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Expired";
        }
    }, 1000);
}