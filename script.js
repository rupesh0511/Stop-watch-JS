let timer = document.querySelector(".timer");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let hours = 0;
let minutes = 0;
let seconds = 0;
let time = null;

start.addEventListener("click", () => {
  starttimer();
  time = setInterval(starttimer, 1000);
});

function starttimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  timer.innerText = hours + ":" + minutes + ":" + seconds;
}

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

stop.addEventListener("click", () => {
    clearInterval(time);
});

reset.addEventListener('click', ()=>{
    clearInterval(time);
    timer.innerText = "00:00:00";
    hours= 0;
    minutes= 0;
    seconds= 0;
    time= null;
})