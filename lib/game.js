class Game {
  constructor (player) {
    this.canvas = document.querySelector('canvas')
    this.canvasContext = this.canvas.getContext('2d')
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
    this.player.render(this.canvasContext)
    requestAnimationFrame(this.render.bind(this))
  }

  clearCanvas () {
    this.canvasContext.clearRect(0, 0, 400, 700)
  }
}

export default Game
