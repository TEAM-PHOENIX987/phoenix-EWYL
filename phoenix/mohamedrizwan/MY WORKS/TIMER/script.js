const startingMinutes =10;
let time = startingMinutes * 60;

const countDownEl =document.getElementById('countDown');
setInterval (updateCountdown,1000);
function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds <10 ? '0' +seconds:seconds;
console.log(seconds,minutes,countDownEl)
    countDownEl.innerHTML =`${minutes}:${seconds}`;
    time--;

    
}  