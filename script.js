const video = document.getElementById('myVid');
const btn = document.querySelector('.playToggle');
const fullscreenbtn = document.getElementById('fullscreen');
const miniscreenbnt = document.getElementById('miniscreen');
const progressBar = document.getElementById('progress');
const hprogressBar = document.getElementById('hProgress');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const volumeControl = document.getElementById('volumeControl');
const volume = document.querySelector('.volume');
const controls = document.querySelector('.controls');
const mute = document.querySelector('.mute');
const forward = document.querySelector('.forward-skip');
const backward = document.querySelector('.backward-skip');


btn.addEventListener('click', playVid);

function playVid() {
    if (video.paused) {
        video.play();
        pauseBtn.style.display = 'flex';
        playBtn.style.display = 'none';
    } else {
        video.pause();
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'flex';
    }
}

fullscreenbtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.mozRequestFullscreen) {
        video.mozRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
})

video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    const value = (progressBar.value - progressBar.min) / (progressBar.max - progressBar.min) * 100;
    progressBar.style.background = 'linear-gradient(to right, white 0%, white ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)';
    hprogressBar.style.background = 'linear-gradient(to right, #FFBE33 0%, #FFBE33 ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)';
});

forward.addEventListener('click', () => {
    video.currentTime += 10;
})


backward.addEventListener('click', () => {
    video.currentTime -= 10;
})

video.addEventListener('ended', () => {
    btn.innerHTML = `<p>Play</p>`;
    progressBar.value = 0;
    const value = (progressBar.value - progressBar.min) / (progressBar.max - progressBar.min) * 100;
    progressBar.style.background = 'linear-gradient(to right, white 0%, white ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)';
})

progressBar.addEventListener('input', () => {
    video.currentTime = progressBar.value / 100 * video.duration;
});


volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
    const value = (volumeControl.value - volumeControl.min) / (volumeControl.max - volumeControl.min) * 100;
    volumeControl.style.background = 'linear-gradient(to right, #0084ff 0%, #0084ff ' + value + '%, #d3d3d3 ' + value + '%, #d3d3d3 100%)';
});

volume.addEventListener('click', () => {
    video.volume = 0;
    volume.style.display = 'none';
    mute.style.display = 'flex'
});

mute.addEventListener('click', () => {
    video.volume = volumeControl.value;
    volume.style.display = 'flex';
    mute.style.display = 'none'
});


