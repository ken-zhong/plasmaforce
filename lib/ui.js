import * as Util from './util'

class UI {
  constructor (scores) {
    this.scores = scores
    this.tick = 0
  }

  render (ctx) {
    if (this.tick % 4 === 0) {
      ctx.clearRect(0, 0, Util.canvasWidth, 100)
      ctx.fillStyle = 'white'
      ctx.font = '24px arcadeclassicregular'
      ctx.fillText(`SCORE: ${Util.formatScore(this.scores.score)}`, 40, 30)
      ctx.fillText(`HI: ${Util.formatScore(this.scores.hiScore)}`, 300, 30)

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
