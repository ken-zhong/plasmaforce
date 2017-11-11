import BaseShip from './base'
import { BasicEnemyBullet } from '../bullet'
import {canvasHeight, canvasWidth} from '../util'

// this ship just suicides into the enemy
class Suicider extends BaseShip {
  constructor (props) {
    super(props)
    this.sprite = this.images.enemySuicider
    this.tickCount = 0
    this.hp = 5
    this.boundY = Math.floor(Math.random() * 6) * 20
    this.hitboxW = 16
    this.hitboxH = 38
    this.sprites = [
      [this.sprite, 0, 0, 16, 38],
      [this.sprite, 16, 0, 16, 38],
      [this.sprite, 32, 0, 16, 38],
      [this.sprite, 48, 0, 16, 38]
    ]
  }

  move () {
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

export default Suicider
