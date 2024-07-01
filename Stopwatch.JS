let [seconds,minutes,hours] = [0,0,0]

let Displaytime = document.getElementById('Displaytime');
let timer = null;

function stopwatch(prams) {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    Displaytime.innerHTML = h + ":" + m + ":" + s;
}

function watchstart() {
    if (timer!== null) {
        clearInterval(timer)
    }
   timer = setInterval(stopwatch,1000);
}

function stopwatchstop(){
    clearInterval(timer);
}
function stopwatchReset(){
    clearInterval(timer);
  [seconds,minutes,hours] = [0,0,0];
  Displaytime.innerHTML = "00:00:00";
}