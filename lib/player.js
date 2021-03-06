import {canvasHeight, canvasWidth} from './util'
import { PlayerBulletBasic } from './bullet'
import MovingObject from './moving_object'
import SoundFx from './sound_fx'

class Player extends MovingObject {
  constructor () {
    let props = {
      posX: Math.floor(canvasWidth / 2),
      posY: Math.floor(canvasHeight / 1.2)
    }
    super(props)
    this.actions = {
      moveLeft: false,
      moveRight: false,
      moveUp: false,
      moveDown: false,
      fireBullet: false
    }
    this.bulletFx = SoundFx.playerBullet
    this.topSpeed = 5
    this.hp = 10
    this.bulletCooldown = 0
    this.playerBullets = []
    this.hitboxW = 30
    this.hitboxH = 46
    this.iframe = 0
    this.playerController()
  }

  fireBullet () {
    let bulletData = {
      speedX: [-1, 0, 1][Math.floor(Math.random() * 3)],
      speedY: -10,
      posX: this.posX + Math.floor(this.hitboxW / 2) - 10,
      posY: this.posY - 20
    }
    let newBullet = new PlayerBulletBasic(bulletData)
    this.playerBullets.push(newBullet)
    this.bulletCooldown = 6
    this.bulletFx.play()
  }

  calculateInertia () {
    if (this.actions.moveLeft) {
      if (Math.abs(this.speedX) < this.topSpeed) {
        this.speedX--
      }
    } else if (this.speedX < 0) {
      this.speedX++
    }
    if (this.actions.moveRight) {
      if (Math.abs(this.speedX) < this.topSpeed) {
        this.speedX++
      }
    } else if (this.speedX > 0) {
      this.speedX--
    }
    if (this.actions.moveUp) {
      if (Math.abs(this.speedY) < this.topSpeed) {
        this.speedY--
      }
    } else if (this.speedY < 0) {
      this.speedY++
    }
    if (this.actions.moveDown) {
      if (Math.abs(this.speedY) < this.topSpeed) {
        this.speedY++
      }
    } else if (this.speedY > 0) {
      this.speedY--
    }
  }

  move () {
    // if iframe is 0, it's falsey!
    this.iframe && this.iframe--
    if (this.actions.fireBullet) {
      if (this.bulletCooldown === 0) {
        this.fireBullet()
      } else {
        this.bulletCooldown--
      }
    }
    if (this.posX + this.speedX >= 0 && this.posX + this.speedX <= canvasWidth - this.hitboxW) {
      this.posX += this.speedX
    }
    if (this.posY + this.speedY >= 0 && this.posY + this.speedY <= canvasHeight - this.hitboxH) {
      this.posY += this.speedY
    }
  }

  deleteBullets () {
    this.playerBullets = this.playerBullets.filter(bul => !bul.cleanup)
  }

  render (ctx) {
    if (this.bulletCooldown === 0) {
      this.deleteBullets()
    }
    this.calculateInertia()
    this.move()
    ctx.drawImage(...this.getSprite())
  }

  getSprite () {
    const frame = [0, 1][Math.floor(Math.random() * 2)]

    let normalSprite = [
      [this.images.playerShip, 0, 0, 32, 44, this.posX, this.posY, this.hitboxW, this.hitboxH],
      [this.images.playerShip, 32, 0, 32, 44, this.posX, this.posY, this.hitboxW, this.hitboxH]
    ]
    let leftSprite = [
      [this.images.playerShipL, 0, 0, 26, 44, this.posX, this.posY, this.hitboxW, this.hitboxH],
      [this.images.playerShipL, 26, 0, 26, 44, this.posX, this.posY, this.hitboxW, this.hitboxH]
    ]
    let rightSprite = [
      [this.images.playerShipR, 0, 0, 26, 44, this.posX, this.posY, this.hitboxW, this.hitboxH],
      [this.images.playerShipR, 26, 0, 26, 44, this.posX, this.posY, this.hitboxW, this.hitboxH]
    ]

    if (this.speedX === 0) {
      return normalSprite[frame]
    } else if (this.speedX < 0) {
      return leftSprite[frame]
    } else if (this.speedX > 0) {
      return rightSprite[frame]
    }
  }

  // KEYCODES: 37: left, 38: up, 39: right, 40: down, 32: space
  playerController () {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 65:
        case 37:
          this.actions.moveLeft = true
          break
        case 87:
        case 38:
          this.actions.moveUp = true
          break
        case 68:
        case 39:
          this.actions.moveRight = true
          break
        case 83:
        case 40:
          this.actions.moveDown = true
          break
        case 32:
          this.actions.fireBullet = true
          break
        default:
          break
      }
    })
    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 65:
        case 37:
          this.actions.moveLeft = false
          break
        case 87:
        case 38:
          this.actions.moveUp = false
          break
        case 68:
        case 39:
          this.actions.moveRight = false
          break
        case 83:
        case 40:
          this.actions.moveDown = false
          break
        case 32:
          this.actions.fireBullet = false
          this.bulletCooldown = 0
          break
        default: break
      }
    })
  }
}

export default Player
