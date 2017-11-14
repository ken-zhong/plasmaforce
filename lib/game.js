import Background from './background'
import ShipFactory from './ship_factory'
import * as Util from './util'
import SoundFx from './sound_fx'
import Explosion from './explosion'
import UI from './ui'
import Player from './player'

class Game {
  constructor (player) {
    this.bgCanvas = document.querySelector('#background-canvas')
    this.canvas = document.querySelector('#game-canvas')
    this.UICanvas = document.querySelector('#ui-canvas')
    this.canvasContext = this.canvas.getContext('2d')
    this.bgContext = this.bgCanvas.getContext('2d')
    this.UIContext = this.UICanvas.getContext('2d')
    this.scores = {score: 0, hiScore: parseInt(window.localStorage.hiScore)}
    this.bg = new Background()
    this.ui = new UI(this)
    this.player = new Player()
    this.showTitleScreen = true
    this.showGameOverScreen = false
    this.paused = false
    this.bullets = []
    this.enemies = []
    this.explosions = []
    ShipFactory.init(this)
    Util.addListeners(this)
  }

  run () {
    this.render()
    ShipFactory.spawnEnemies()
  }

  pauseGame () {
    this.pause = !this.pause
  }

  resetGame () {
    this.player = new Player()
    this.scores.score = 0
    this.bullets.length = 0
    this.enemies.length = 0
    this.explosions.length = 0
    this.showGameOverScreen = false
    ShipFactory.spawnEnemies()
  }

  cleanup () {
    this.enemies = this.enemies.filter(ship => !ship.cleanup)
    this.explosions = this.explosions.filter(exp => !exp.cleanup)
    if (this.enemies.length === 0) {
      ShipFactory.spawnEnemies()
    }
  }

  deleteBullets () {
    this.bullets = this.bullets.filter(bul => !bul.cleanup)
    this.enemies.forEach(ship => { ship.bullets = this.bullets })
  }

  handlePlayerAction () {
    this.player.playerBullets.forEach(bullet => {
      bullet.render(this.canvasContext)
      this.enemies.forEach(ship => {
        if (ship.posY + ship.hitboxH >= 0 && Util.checkCollision(ship, bullet)) {
          this.handleBulletHit(bullet, ship)
          this.scores.score += 5
          this.player.deleteBullets()
        }
      })
    })
  }

  handleBulletHit (bullet, ship) {
    SoundFx.hit.play()
    this.explosions.push(new Explosion([bullet.posX,
      ship.constructor.name === 'Player' ? bullet.posY : bullet.posY - 20]))
    bullet.destroySelf()
    this.deleteBullets()
    ship.hp--
    if (ship.hp <= 0) {
      ship.destroySelf()
      this.cleanup()
      SoundFx.explosion.play()
      this.explosions.push(new Explosion([bullet.posX,
        ship.constructor.name === 'Player' ? bullet.posY : bullet.posY - 20], 64))
      if (this.player.cleanup) {
        this.showGameOverScreen = true
      }
    }
  }

  clearGameCanvas () {
    this.canvasContext.clearRect(0, 0, Util.canvasWidth, Util.canvasHeight)
  }

  render () {
    // RENDER LOOP: loop through and render each ship, and then render
    // each ship's bullets
    if (!this.pause) {
      this.bg.render(this.bgContext)
      this.clearGameCanvas()
      if (this.showTitleScreen) {
        this.renderTitleScreen(this.canvasContext)
      } else {
        this.renderGame()
      }
    }
    window.requestAnimationFrame(this.render.bind(this))
  }

  renderGame () {
    this.enemies.forEach(ship => {
      ship.render(this.canvasContext)
      if (Util.checkCollision(ship, this.player) && !this.player.iframe && !this.showGameOverScreen) {
        SoundFx.explosion.play()
        this.explosions.push(new Explosion([this.player.posX + 5, this.player.posY - 10], 64))
        this.player.iframe = 10
        this.player.hp--
        if (this.player.hp <= 0) { this.showGameOverScreen = true }
      }
    })
    this.bullets.forEach(bullet => {
      bullet.render(this.canvasContext)
      if (Util.checkCollision(bullet, this.player)) {
        if (!this.player.iframe && !this.showGameOverScreen) {
          this.handleBulletHit(bullet, this.player)
          // give player 30 invincible frames after each bullet hit
          this.player.iframe = 30
        }
      }
    })
    if (this.showGameOverScreen) {
      this.renderGameOverScreen(this.canvasContext)
    } else {
      this.player.render(this.canvasContext)
      this.handlePlayerAction()
    }
    this.explosions.forEach(explosion => explosion.render(this.canvasContext))
    this.ui.render(this.UIContext)
  }

  renderTitleScreen (ctx) {
    ctx.fillStyle = '#ff9e4f'
    ctx.font = '48px arcadeclassicregular'
    ctx.fillText('PlasmaForce', 80, 200)
    ctx.fillStyle = 'white'
    ctx.font = '30px arcadeclassicregular'
    ctx.fillText('press enter to start', 70, 350)
  }

  renderGameOverScreen (ctx) {
    this.player = {}
    ctx.font = '48px arcadeclassicregular'
    ctx.fillStyle = 'white'
    ctx.fillText('GAME OVER', 110, 200)
    ctx.font = '30px arcadeclassicregular'
    ctx.fillText('press r to restart', 90, 350)
  }
}

export default Game
