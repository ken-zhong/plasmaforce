import BaseShip from './base'
import { BasicEnemyBullet } from '../bullet'
import {canvasHeight, canvasWidth} from '../util'
import SoundFx from '../sound_fx'

// lvl1, weakest enemy ship
class SaucerShip extends BaseShip {
  constructor (props) {
    props = Object.assign({speedY: 3, posY: -100, posX: Math.floor(canvasWidth / 2 - 60)}, props)
    super(props)
    this.hp = 45
    this.sprite = this.images.enemySaucer
    this.tickCount = 0
    this.hitboxW = 125
    this.hitboxH = 117
    this.sprites = []
    for (let i = 0; i <= 6; i++) {
      this.sprites.push([this.sprite, i * 96, 0, 96, 90])
    }
    for (let i = 6; i >= 0; i--) {
      this.sprites.push([this.sprite, i * 96, 0, 96, 90])
    }
    this.BULLET_VECTORS = [
      [0, 5],
      [0, -5],
      [5, 0],
      [-5, 0],
      [-2, 4],
      [2, 4],
      [-2, -4],
      [2, -4],
      [4, 2],
      [4, -2],
      [-4, -2],
      [-4, 2]
    ]
  }

  move () {
    if (this.tickCount === 70) {
      this.fireBullet()
    }
    if (this.posY < 0) {
      this.posY += 2
    } else if (this.tickCount > 65 && this.tickCount < 100) {
      return false
    } else if (this.posY + this.speedY >= 0 && this.posY + this.speedY <= canvasHeight - this.hitboxH) {
      this.posY += this.speedY
    } else {
      this.antiBumpTechnology()
    }
  }

  fireBullet () {
    SoundFx.enemyBasicBullet.play()
    let posObj = {
      posX: this.posX + Math.floor(this.hitboxW / 2) - 10,
      posY: this.posY + Math.floor(this.hitboxH / 2) - 10
    }

    this.BULLET_VECTORS.forEach(vector => {
      let bulletData = Object.assign({ speedX: vector[0], speedY: vector[1] }, posObj)
      this.bullets.push(new BasicEnemyBullet(bulletData))
    })
  }

  render (ctx) {
    this.move()
    ctx.drawImage(...this.getSprite(), this.posX, this.posY, this.hitboxW, this.hitboxH)
  }

  getSprite () {
    if (this.tickCount >= 140) {
      this.tickCount = 0
    }
    let result = this.sprites[Math.floor(this.tickCount / 10)]
    this.tickCount++
    return result
  }
}

export default SaucerShip
