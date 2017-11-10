import { Howl } from 'howler'

const SoundFx = {
  playerBullet: new Howl({src: './assets/sound/bullet01.mp3', volume: 0.8}),
  enemyBasicBullet: new Howl({src: './assets/sound/bullet02.mp3', volume: 0.3}),
  hit: new Howl({src: './assets/sound/explosion_hit.mp3'}),
  explosion: new Howl({src: './assets/sound/explosion_big.flac'})
}

export default SoundFx
