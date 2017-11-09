import Background from './background'

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
  }

  run () {
    this.render()
  }

  render () {
    this.clearCanvas()
    this.bg.render(this.bgContext)
    this.player.render(this.canvasContext)
    this.bullets = this.player.playerBullets
    this.bullets.forEach(bullet => {
      bullet.render(this.canvasContext)
    })
    requestAnimationFrame(this.render.bind(this))
  }

  clearCanvas () {
    this.canvasContext.clearRect(0, 0, 400, 700)
  }
}

export default Game
