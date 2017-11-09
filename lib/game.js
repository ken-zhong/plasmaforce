import Background from './background'
import * as Enemies from './enemy_ships'

class Game {
  constructor (player) {
    this.canvas = document.querySelector('#game-canvas')
    this.bgCanvas = document.querySelector('#background-canvas')
    this.canvasContext = this.canvas.getContext('2d')
    this.bgContext = this.bgCanvas.getContext('2d')
    this.bg = new Background()

    this.player = player
    this.showTitleScreen = true
    this.showGameOverScreen = false
    this.bullets = []
    this.enemies = []
    this.enemies.push(new Enemies.GruntShip())
  }

  run () {
    this.render()
  }

  render () {
    this.clearCanvas()
    this.bg.render(this.bgContext)
    this.player.render(this.canvasContext)
    // this.bullets = this.player.playerBullets
    this.player.playerBullets.forEach(bullet => {
      bullet.render(this.canvasContext)
    })
    this.enemies.forEach(ship => {
      ship.render(this.canvasContext)
    })
    window.requestAnimationFrame(this.render.bind(this))
  }

  clearCanvas () {
    this.canvasContext.clearRect(0, 0, 400, 700)
  }
}

export default Game
