import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_LS = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const seconds = JSON.parse(localStorage.getItem(KEY_LS)) ?? 0;

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(seconds);

function onPlay(data) {
  localStorage.setItem(KEY_LS, JSON.stringify(data.seconds));
}
