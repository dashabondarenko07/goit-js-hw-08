import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime)
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));