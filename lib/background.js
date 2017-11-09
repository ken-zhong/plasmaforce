import MovingObject from './moving_object'
import ImageableSingleton from './imageable'
// import {canvasHeight, canvasWidth} from './util'

class Background extends MovingObject {
  constructor () {
    super({speedY: 1})
    let images = new ImageableSingleton()
    this.backgroundImg = images.backgroundImg
  }

  render (ctx) {
    ctx.drawImage(this.backgroundImg, this.posX, this.posY)
    ctx.drawImage(this.backgroundImg, this.posX, this.posY - this.backgroundImg.height)
    this.posY += this.speedY
    if (this.posY >= this.backgroundImg.height) {
      this.posY = 0
    }
  }
}

export default Background
