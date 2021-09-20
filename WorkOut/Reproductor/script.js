const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const sliders = player.querySelectorAll('.player__slider');
const skipButton = player.querySelectorAll('[data-skip]');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

//funciones
function handleVolumeRange() {
    video[this.name] = parseFloat(this.value);
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateProgress() {
    const porcent = parseFloat(video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${porcent}%`
}

//eventos
video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
});

video.addEventListener('play', () => {
    toggle.textContent = '❚ ❚';
});

video.addEventListener('pause', () => {
    toggle.textContent = '►'
});

video.addEventListener('timeupdate', updateProgress)

sliders.forEach(slider => slider.addEventListener('click', handleVolumeRange));
sliders.forEach(slider => slider.addEventListener('mousemove', handleVolumeRange));

skipButton.forEach(button => button.addEventListener('click', skip));


