import BaseShip from './base'
import { BasicEnemyBullet } from '../bullet'
import {canvasHeight, canvasWidth} from '../util'
import SoundFx from '../sound_fx'

// lvl1, weakest enemy ship
class GruntShip extends BaseShip {
  constructor (props) {
    props = Object.assign({speedX: 2, posY: -100, posX: Math.abs(Math.floor(Math.random() * canvasWidth) - 50)}, props)
    super(props)
    this.hp = 10
    this.sprite = this.images.enemyGrunt
    this.tickCount = 0
    this.boundY = Math.floor(Math.random() * 6) * 20
    this.hitboxW = 48
    this.hitboxH = 72
    this.sprites = [
      [this.sprite, 0, 0, 32, 48],
      [this.sprite, 32, 0, 32, 48],
      [this.sprite, 64, 0, 32, 48],
      [this.sprite, 96, 0, 32, 48]
    ]
  }

  move () {
    if (this.posY < this.boundY) {
      this.posY += 2
    } else {
      if (this.tickCount === 40 && (Math.random() * 2) > 1) {
        this.fireBullet()
        // this.deleteBullets()
      }
      if (this.posX + this.speedX >= 0 && this.posX + this.speedX <= canvasWidth - this.hitboxW) {
        this.posX += this.speedX
      } else {
        this.antiBumpTechnology()
      }
    }
  }

  fireBullet () {
    SoundFx.enemyBasicBullet.play()
    let posObj = {
      posX: this.posX + Math.floor(this.hitboxW / 2) - 10,
      posY: this.posY + this.hitboxH - 20
    }
    let bulletData = Object.assign({ speedX: 0, speedY: 5 }, posObj)
    let bulletData2 = Object.assign({ speedX: -3, speedY: 4 }, posObj)
    let bulletData3 = Object.assign({ speedX: 3, speedY: 4 }, posObj)
    this.bullets.push(new BasicEnemyBullet(bulletData),
      new BasicEnemyBullet(bulletData2), new BasicEnemyBullet(bulletData3))
  }

  render (ctx) {
    this.move()
    ctx.drawImage(...this.getSprite(), this.posX, this.posY, this.hitboxW, this.hitboxH)
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

export default GruntShip
