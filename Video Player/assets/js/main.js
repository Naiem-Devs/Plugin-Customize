//codepen.io/Gilmar_Santos/pen/yvBrQo

const $VIDEO = document.querySelector('.video'),
      $VIDEO_CONTROLS = document.querySelector('.video-controls'),
      $BUTTON_PAUSE_AND_PLAY = document.querySelector('.play-and-pause-video'),
      $PROGRESS_VIDEO = document.querySelector('.progress-video'),
      $CHANGE_VOLUME = document.querySelector('.slide-volume-video'),
      $FULLSCREEN = document.querySelector('.fullscreen-video');

function durationVideo() {
    let durationMidia = $VIDEO.duration,
        $durationTime = document.querySelector('.duration-time');
    $durationTime.innerHTML = transformVideoDuration(durationMidia);
    animationVolume($VIDEO.volume);
};

function progressVideo() {
    var autoProgress = $VIDEO.currentTime,
        $progressBar = document.querySelector('.progress-video'),
        $progressTime = document.querySelector('.progress-time');
    $progressBar.value = autoProgress.toFixed(0);
    $progressBar.setAttribute('max', $VIDEO.duration);

    $progressTime.innerHTML = transformVideoDuration(autoProgress);
    animationProgress();
};

function ChangeProgressVideo() {
    $changeProgress = document.querySelector('.progress-video');
    $VIDEO.currentTime = $changeProgress.value;
};

function animationProgress() {
    let percentageProgress = (($PROGRESS_VIDEO.value - $PROGRESS_VIDEO.min) * 100) / ($PROGRESS_VIDEO.max - $PROGRESS_VIDEO.min);
    $PROGRESS_VIDEO.style.backgroundSize = `${percentageProgress}% 100%`;
    console.log('progress: ' + percentageProgress)
};

function animationVolume(volume) {
    let animationVolume = volume;
    animationVolume = volume * 100;
    if (animationVolume === 100) {
        animationVolume = 100;        
    }
    $CHANGE_VOLUME.style.backgroundSize = `${animationVolume}% 100%`;
};

function transformVideoDuration(timeVideo) {
    let hours, mins, secds, time;
    hours = Math.floor(timeVideo / 3600);
    mins = Math.floor(timeVideo / 60);
    secds = Math.floor(timeVideo - mins * 60)
    return time = formartTimeVideo(hours, mins, secds);
};

function formartTimeVideo(hours, mins, secds) {
    let time;
    if (hours < 1) {
        hours = '';
    };
    if (hours < 10 && hours != '') {
        hours = '0' + hours + ':';
    };
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secds < 10) {
        secds = '0' + secds;
    }
    return time = `${hours}${mins}:${secds}`;
};

function playAndPause() {
    let $playButton = document.querySelector('.play-and-pause-video');
    if ($VIDEO.paused == true) {
        playVideo();
        $playButton.classList.remove('fa-play');
        $playButton.classList.add('fa-pause');
    } else {
        pauseVideo();
        $playButton.classList.remove('fa-pause');
        $playButton.classList.add('fa-play');
    }
};

function pauseVideo(){
    $VIDEO.pause();
};

function playVideo(){
    $VIDEO.play();
};

function volume() {
    let $changeVolume = document.querySelector('.slide-volume-video').value;
    $VIDEO.volume = $changeVolume;
    let $buttonVolume = document.querySelector('.volume-video');
    if ($VIDEO.volume === 0) {
        $buttonVolume.classList.remove('fa-volume-up');
        $buttonVolume.classList.add('fa-volume-off');
    } else {
        $buttonVolume.classList.remove('fa-volume-off');
        $buttonVolume.classList.add('fa-volume-up');
    };
    animationVolume($changeVolume);
};

function endVideo(){
    let $playButtonEnd = document.querySelector('.play-and-pause-video');
    $VIDEO_CONTROLS.classList.remove('video-controls-visibility--hidden');
    $playButtonEnd.classList.remove('fa-pause');
    $playButtonEnd.classList.add('fa-play');

}

function videoFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
        if ($VIDEO.requestFullscreen) {
            $VIDEO.requestFullscreen();
        } else if ($VIDEO.msRequestFullscreen) {
            $VIDEO.msRequestFullscreen();
        } else if ($VIDEO.mozRequestFullScreen) {
            $VIDEO.mozRequestFullScreen();
        } else if ($VIDEO.webkitRequestFullscreen) {
            $VIDEO.webkitRequestFullscreen();
        }
        $FULLSCREEN.classList.remove('fa-expand');
        $FULLSCREEN.classList.add('fa-compress'); 
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            $FULLSCREEN.classList.remove('fa-compress');
            $FULLSCREEN.classList.add('fa-expand'); 
        };
};

function controlVisibility(){
    setTimeout(function(){
        $VIDEO_CONTROLS.classList.remove('video-controls-visibility--visible');
        $VIDEO_CONTROLS.classList.add('video-controls-visibility--hidden');
    }, 10000)
    console.log('play')
};


//               EVENTS PLAYER

// EVENTS VIDEO
$VIDEO.addEventListener('loadeddata', durationVideo);

$VIDEO.addEventListener('timeupdate', progressVideo);

$VIDEO.addEventListener('play', controlVisibility);

$VIDEO.addEventListener('click', playAndPause);

$VIDEO.addEventListener('ended', endVideo);

// EVENTS VIDEO CONTROLS

$PROGRESS_VIDEO.addEventListener('change', ChangeProgressVideo)

$BUTTON_PAUSE_AND_PLAY.addEventListener('click', playAndPause);

$CHANGE_VOLUME.addEventListener('change', volume);

$FULLSCREEN.addEventListener('click', videoFullScreen);







//codepen.io/AllThingsSmitty/pen/JJavZN


(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "07/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


    let btn = document.querySelectorAll('.popup_btn');

    btn.forEach(btns => {
        btns.addEventListener('click', (e) => {
            e.preventDefault()
            let body = document.querySelector('body')
            body.classList.toggle('activePopup')
        })
    });

    let vdo = document.querySelectorAll('.video-container button');

    vdo.forEach(vdos => {
        vdos.addEventListener('click', (e) => {
            e.preventDefault()
            vdos.parentElement.classList.toggle('controlHide')
        })
    })