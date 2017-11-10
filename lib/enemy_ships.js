import MovingObject from './moving_object'
import { BasicEnemyBullet } from './bullet'
import {canvasHeight, canvasWidth} from './util'

// basic shared ship code can go in here
class BaseShip extends MovingObject {
  constructor (props) {
    super(props)
    this.bullets = []
    this.limitY = Math.floor(canvasHeight / 2)
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
    this.sprites = [
      [this.sprite, 0, 0, 16, 38],
      [this.sprite, 16, 0, 16, 38],
      [this.sprite, 32, 0, 16, 38],
      [this.sprite, 48, 0, 16, 38]
    ]
  }

  move () {
    if (this.tickCount === 40 && (Math.random() * 2) > 1) {
      this.fireBullet()
    }
  }

  fireBullet () {
    let bulletData = {
      speedX: 0,
      speedY: 5,
      posX: this.posX + Math.floor(this.shipW / 2) - 10,
      posY: this.posY + this.shipH
    }
    let bulletData2 = {
      speedX: -3,
      speedY: 4,
      posX: this.posX + Math.floor(this.shipW / 2) - 10,
      posY: this.posY + this.shipH
    }
    let bulletData3 = {
      speedX: 3,
      speedY: 4,
      posX: this.posX + Math.floor(this.shipW / 2) - 10,
      posY: this.posY + this.shipH
    }
    let newBullet = new BasicEnemyBullet(bulletData)
    let newBullet2 = new BasicEnemyBullet(bulletData2)
    let newBullet3 = new BasicEnemyBullet(bulletData3)
    this.bullets.push(newBullet, newBullet2, newBullet3)
  }

  render (ctx) {
    this.move()
    ctx.drawImage(...this.getSprite(), this.posX, this.posY, this.shipW, this.shipH)
  }

  getSprite () {
    if (this.tickCount >= 40) {
      this.tickCount = 0
    }
    let result = this.sprites[Math.floor(this.tickCount / 10)]
    this.tickCount++
    return result
  }
}
