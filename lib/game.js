import Background from './background'
import * as Enemies from './enemies/enemy_ships'
import * as Util from './util'

class Game {
  constructor (player) {
    this.bgCanvas = document.querySelector('#background-canvas')
    this.canvas = document.querySelector('#game-canvas')
    this.canvasContext = this.canvas.getContext('2d')
    this.bgContext = this.bgCanvas.getContext('2d')
    this.bg = new Background()
    this.player = player
    this.showTitleScreen = true
    this.showGameOverScreen = false
    this.bullets = []
    this.enemies = []
    this.enemies.push(new Enemies.GruntShip())
    this.enemies.push(new Enemies.GruntShip())
    this.enemies.push(new Enemies.GruntShip())
  }

  run () {
    this.render()
  }

  handleBulletHit (bullet, ship) {
    bullet.destroySelf()
  }

  render () {
    // RENDER LOOP: loop through and render each ship, and then render
    // each ship's bullets
    this.clearCanvas()
    this.bg.render(this.bgContext)
    this.player.playerBullets.forEach(bullet => {
      bullet.render(this.canvasContext)
      this.enemies.forEach(ship => {
        if (Util.checkCollision(ship, bullet)) {
          this.handleBulletHit(bullet, ship)
        }
      })
    })
    this.enemies.forEach(ship => {
      ship.render(this.canvasContext)
      ship.bullets.forEach(bullet => bullet.render(this.canvasContext))
    })
    this.player.render(this.canvasContext)
    window.requestAnimationFrame(this.render.bind(this))
  }

  clearCanvas () {
    this.canvasContext.clearRect(0, 0, Util.canvasWidth, Util.canvasHeight)
  }
}

export default Game
