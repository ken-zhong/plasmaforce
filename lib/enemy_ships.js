import MovingObject from './moving_object'
import { BasicEnemyBullet } from './bullet'

// basic shared ship code can go in here
class BaseShip extends MovingObject {
  constructor (props) {
    super(props)
    this.bullets = []
  }

  deleteBullets () {
    this.bullets = this.bullets.filter(bul => !bul.cleanup)
  }
}

// lvl1, weakest enemy ship
export class GruntShip extends BaseShip {
  constructor (props) {
    super(props)
    this.sprite = this.images.enemyGrunt
    this.tickCount = 0
    this.shipW = 32
    this.shipH = 76
  }

  move () {

  }

  fireBullet () {

  }

  render (ctx) {
    if (this.tickCount === 40) {
      this.fireBullet()
    }
    this.move()
    ctx.drawImage(...this.getSprite())
  }

  getSprite () {
    if (this.tickCount >= 40) {
      this.tickCount = 0
    }
    let sprites = [
      [this.sprite, 0, 0, 16, 38, this.posX, this.posY, this.shipW, this.shipH],
      [this.sprite, 16, 0, 16, 38, this.posX, this.posY, this.shipW, this.shipH],
      [this.sprite, 32, 0, 16, 38, this.posX, this.posY, this.shipW, this.shipH],
      [this.sprite, 48, 0, 16, 38, this.posX, this.posY, this.shipW, this.shipH]
    ]
    let result = sprites[Math.floor(this.tickCount / 10)]
    this.tickCount++
    return result
  }
}
