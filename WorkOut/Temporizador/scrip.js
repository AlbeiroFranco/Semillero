let countdown;
const timeOn = document.querySelector('.displaystart');
const endTime = document.querySelector('.end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
            
        displayTimeLeft(secondsLeft);
        
    }, 1000);

}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    timeOn.textContent = display;
}

for(let i = 0; i < buttons.length; i++){
    console.log(buttons[i].dataset.time);
    buttons[i].addEventListener('click',()=>{timer(buttons[i].dataset.time)})
}


document.addtime.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();  
  });


