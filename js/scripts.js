var interval;
var numSec = 1, numMin = 1, numHours = 1;

onload = function (){
    let btnStart = document.getElementById("start");
    btnStart.addEventListener("click", startStopwatch);

    let btnStop = document.getElementById("stop");
    btnStop.addEventListener("click", stopStopwatch);

    let btnReset = document.getElementById("reset");
    btnReset.addEventListener("click", resetStopwatch);
}

function updateHours(){
    let hours = document.getElementById("hours");
    hours.innerHTML = numHours;
    numHours++;
    numMin = 0;
    updateMin();
}

function updateMin(){
    let min = document.getElementById("min");
    min.innerHTML = numMin;
    numMin++;
    numSec = 0;
    updateSec();

}

function updateSec(){
    let sec = document.getElementById("sec");
    sec.innerHTML = numSec;
    numSec++;
}

function showTime(){
    if (numSec<60){
        updateSec();
    } else if(numMin<60){
        updateMin();
    } else{
        updateHours();
    }
}

function startStopwatch(){
    interval = setInterval(showTime, 1000);
}

function stopStopwatch(){
    clearInterval(interval);
}

function resetStopwatch(){
    let hours = document.getElementById("hours");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    hours.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';

    numSec = 1, numMin = 1, numHours = 1;
}