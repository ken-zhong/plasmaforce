import Game from './game.js'
import Player from './player'
// import Howler from 'howler'



document.addEventListener('DOMContentLoaded', () => {
  const player = new Player()
  const game = new Game(player)
  game.run()
})
