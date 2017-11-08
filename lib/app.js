import Game from './game.js'
import Player from './player'

document.addEventListener('DOMContentLoaded', () => {
  const player = new Player()
  const game = new Game(player)
  game.run()
})
