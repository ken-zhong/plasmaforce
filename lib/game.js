import Background from './background'
import * as Enemies from './enemies/enemy_ships'
import * as Util from './util'
import SoundFx from './sound_fx'

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
    this.paused = false
    this.bullets = []
    this.enemies = []
    this.spawnEnemies()
  }

  run () {
    this.render()
  }

  spawnEnemies () {
    this.enemies.push(new Enemies.GruntShip({bullets: this.bullets}))
    this.enemies.push(new Enemies.GruntShip({bullets: this.bullets}))
    this.enemies.push(new Enemies.GruntShip({bullets: this.bullets}))
  }

  cleanup () {
    this.enemies = this.enemies.filter(ship => !ship.cleanup)
  }

  deleteBullets () {
    this.bullets = this.bullets.filter(bul => !bul.cleanup)
    this.enemies.forEach(ship => { ship.bullets = this.bullets })
  }

  handlePlayerAction () {
    this.player.playerBullets.forEach(bullet => {
      bullet.render(this.canvasContext)
      this.enemies.forEach(ship => {
        if (Util.checkCollision(ship, bullet)) {
          this.handleBulletHit(bullet, ship)
          this.player.deleteBullets()
        }
      })
    })
  }

  handleBulletHit (bullet, ship) {
    SoundFx.hit.play()
    bullet.destroySelf()
    this.deleteBullets()
    ship.hp--
    if (ship.hp <= 0) {
      ship.destroySelf()
      this.cleanup()
      SoundFx.explosion.play()
    }
  }

  clearCanvas () {
    this.canvasContext.clearRect(0, 0, Util.canvasWidth, Util.canvasHeight)
  }

  render () {
    // RENDER LOOP: loop through and render each ship, and then render
    // each ship's bullets
    this.clearCanvas()
    this.bg.render(this.bgContext)
    this.enemies.forEach(ship => {
      ship.render(this.canvasContext)
    })
    this.bullets.forEach(bullet => {
      bullet.render(this.canvasContext)
      if (Util.checkCollision(bullet, this.player)) {
        this.handleBulletHit(bullet, this.player)
      }
    })
    this.player.render(this.canvasContext)
    this.handlePlayerAction()
    window.requestAnimationFrame(this.render.bind(this))
  }
}

export default Game
