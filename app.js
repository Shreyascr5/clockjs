var hour = document.getElementById("hrs");
var minute = document.getElementById("min");
var second = document.getElementById("sec");
var ampm = document.getElementById("am");
var date = document.getElementById("date");
// var month = document.getElementById("month");
// var year = document.getElementById("year");

function timeStamp() {
    var getdata = new Date();
    var hr = getdata.getHours();
    var mi = getdata.getMinutes();
    var se = getdata.getSeconds();
    var d = getdata.getDate();
    var m = getdata.getMonth() + 1;
    var y = getdata.getFullYear();

    if (hr < 10) {
        hour.innerHTML = "0" + hr;
    } else { hour.innerHTML = hr; }

    if (mi < 10) {
        minute.innerHTML = "0" + mi;
    } else { minute.innerHTML = mi; }

    if (se < 10) {
        second.innerHTML = "0" + se;
    } else {
        second.innerHTML = se;
    }
    if (hr >= 12) {
        ampm.innerHTML = "PM";
    } else {
        ampm.innerHTML = "AM";
    }
    date.innerHTML = d + "/" + m + "/" + y;
}
setInterval(timeStamp, 10);