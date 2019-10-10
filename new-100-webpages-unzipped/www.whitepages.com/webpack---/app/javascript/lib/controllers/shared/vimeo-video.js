import Player from '@vimeo/player';
import amplitudeClient from 'amplitudeClient';

const player = new Player('vimeo-video');

player.on('play', () => {
    amplitudeClient.log('WPPlayedVideo');
});