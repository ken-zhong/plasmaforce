import {canvasHeight, canvasWidth} from './util'
import MovingObject from './moving_object'

export class Bullet extends MovingObject {
  constructor (props) {
    super(props)
    this.sprite = this.images.beams
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
}

export class PlayerBulletBasic extends Bullet {
  constructor (props) {
    super(props)
    this.bulletW = 20
    this.bulletH = 40
  }

  move () {
    // give bullets a slight spread
    if (this.posY % 3 === 0 && this.speedX !== 0) {
      this.posX += this.speedX
    }
    this.posY += this.speedY
    if (this.posX < -20 || this.posX > canvasWidth || this.posY < 0 || this.posY > canvasHeight) {
      this.destroySelf()
    }
  }

  render (ctx) {
    this.move()
    ctx.drawImage(this.sprite, 140, 318, 45, 77, this.posX, this.posY, this.bulletW, this.bulletH)
  }
}

export class BasicEnemyBullet extends Bullet {
  constructor (props) {
    super(props)
    this.bulletW = 19
    this.bulletH = 19
  }
  move () {
    // give bullets a slight spread
    this.posX += this.speedX
    this.posY += this.speedY
    if (this.posX < -20 || this.posX > canvasWidth || this.posY < 0 || this.posY > canvasHeight) {
      this.destroySelf()
    }
  }

  render (ctx) {
    this.move()
    ctx.drawImage(this.sprite, 36, 115, 19, 19, this.posX, this.posY, this.bulletW, this.bulletH)
  }
}
