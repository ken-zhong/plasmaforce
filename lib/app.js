/* global Howler */

import Game from './game.js'
import Player from './player'
import { Howl } from 'howler'

const settings = {
  muted: true,
  muteBtn: document.querySelector('#mute-control')
}

Howler.mute(settings.muted)
const bgMusic = new Howl({
  autoplay: true,
  loop: true,
  src: './assets/music/bensound-scifi.mp3'
})
bgMusic.play()

settings.muteBtn.addEventListener('click', () => {
  settings.muted = !settings.muted
  Howler.mute(settings.muted)
})

document.addEventListener('DOMContentLoaded', () => {
  const player = new Player()
  const game = new Game(player)
  window.onload = () => {
    game.run()
  }
})
