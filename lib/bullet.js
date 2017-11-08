import {canvasHeight, canvasWidth} from './util'

export class Bullet {
  constructor(props) {
    this.speedX = props.speedX
    this.speedY = props.speedY
    this.posX = props.speedX
    this.posY = props.speedY
    this.ctx = props.ctx
    this.cleanup = false
  }

  move () {
    this.posX += this.speedX
    this.posY += this.speedY
    if (this.posX < 0 || this.posX > canvasWidth || this.posY < 0 || this.posY > canvasHeight) {
      this.destroySelf()
    }
  }

  destroySelf () {
    // mark this bullet for cleanup so that the game's cleanup function can delete it!
    this.cleanup = true
  }

  render (ctx) {
    this.move()
    ctx.fillStyle = 'red'
    ctx.fillRect(this.posX, this.posY, 5, 5)
  }
}
