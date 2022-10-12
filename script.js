const displayTime = () => {
    let a = new Date();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds()


    if (hour <= 12) {
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("session").innerHTML = "AM";
    } else {
        document.getElementById("hour").innerHTML = hour - 12;
        document.getElementById("session").innerHTML = "PM";
    }
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    let year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = week[a.getDay()];
    let date = a.getDate();
    let month = year[a.getMonth()];
    document.getElementById("date").innerHTML = date;
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
}

setInterval(displayTime,10);