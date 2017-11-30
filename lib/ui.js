import * as Util from './util'

class UI {
  constructor (game) {
    this.game = game
    this.scores = game.scores
    this.tick = 0
  }

  render (ctx) {
    if (this.tick % 4 === 0) {
      ctx.clearRect(0, 0, Util.canvasWidth, 50)
      ctx.fillStyle = 'white'
      ctx.font = '24px arcadeclassicregular'
      ctx.fillText(`SCORE: ${Util.formatScore(this.scores.score)}`, 140, 30)
      ctx.fillText(`HI: ${Util.formatScore(this.scores.hiScore)}`, 320, 30)

      ctx.fillText('HP', 10, 30)
      ctx.strokeStyle = 'white'
      ctx.strokeRect(45, 14, 81, 18)
      ctx.fillStyle = 'red'
      ctx.fillRect(45, 15, (this.game.player.hp * 4), 16)
      if (this.scores.score > this.scores.hiScore) {
        window.localStorage.hiScore = this.scores.score
        this.scores.hiScore = this.scores.score
      }
      this.tick > 300 && (this.tick = 0)
    }
    this.tick++
  }
}

export default UI
