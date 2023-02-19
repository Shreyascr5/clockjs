var hour = document.getElementById("hrs");
var minute = document.getElementById("min");
var second = document.getElementById("sec");
var ampm = document.getElementById("am");

function timeStamp() {
    var getdata = new Date();
    var hr = getdata.getHours();
    var mi = getdata.getMinutes();
    var se = getdata.getSeconds();
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
}
setInterval(timeStamp, 10);