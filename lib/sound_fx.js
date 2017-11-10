import { Howl } from 'howler'

const SoundFx = {
  playerBullet: new Howl({src: './assets/sound/bullet01.mp3'}),
  // enemyBasicBullet:
  hit: new Howl({src: './assets/sound/explosion_hit.flac'}),
  explosion: new Howl({src: './assets/sound/explosion_big.flac'})
}

export default SoundFx
