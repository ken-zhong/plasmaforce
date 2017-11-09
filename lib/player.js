import {canvasHeight, canvasWidth} from './util'
import { Bullet, PlayerBulletBasic } from './bullet'
import MovingObject from './moving_object'

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
    this.bulletCooldown = 0
    this.topSpeed = 5
    this.playerBullets = []
    this.HP = 5
    this.playerController()
    this.sprite = this.images.playerShip
    this.shipW = 50
    this.shipH = 40
  }

  fireBullet () {
    let bulletData = {
      speedX: [-1, 0, 1][Math.floor(Math.random() * 3)],
      speedY: -10,
      posX: this.posX + Math.floor(this.shipW / 2) - 5,
      posY: this.posY - 20
    }
    let newBullet = new PlayerBulletBasic(bulletData)
    this.playerBullets.push(newBullet)
    this.bulletCooldown = 6
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
    if (this.actions.fireBullet) {
      if (this.bulletCooldown === 0) {
        this.fireBullet()
      } else {
        this.bulletCooldown--
      }
    }
    if (this.posX + this.speedX >= 0 && this.posX + this.speedX <= canvasWidth - this.shipW) {
      this.posX += this.speedX
    }
    if (this.posY + this.speedY >= 0 && this.posY + this.speedY <= canvasHeight - this.shipH) {
      this.posY += this.speedY
    }
  }

  deleteBullets () {
    this.playerBullets = this.playerBullets.filter(bul => !bul.cleanup)
  }

  render (ctx) {
    this.deleteBullets()
    this.calculateInertia()
    this.move()
    // ctx.fillStyle = 'grey'
    // ctx.fillRect(this.posX, this.posY, 20, 20)

    // player ship sprite: 420 x 85, 4 parts, left dmg normal right
    ctx.drawImage(...this.getSprite())
  }

  getSprite () {
    let sprite = [this.sprite]
    let normalShip = [0, 0, 107, 85]
    let leftShip = [317, 0, 100, 85]
    let rightShip = [218, 0, 101, 85]
    let pos = [this.posX, this.posY, this.shipW, this.shipH]
    if (this.speedX === 0) {
      return sprite.concat(normalShip, pos)
    } else if (this.speedX < 0) {
      return sprite.concat(rightShip, pos)
    } else if (this.speedX > 0) {
      return sprite.concat(leftShip, pos)
    }
  }

  // KEYCODES: 37: left, 38: up, 39: right, 40: down, 32: space
  playerController () {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
          this.actions.moveLeft = true
          break
        case 38:
          this.actions.moveUp = true
          break
        case 39:
          this.actions.moveRight = true
          break
        case 40:
          this.actions.moveDown = true
          break
        case 32:
          this.actions.fireBullet = true
          break
        default:
          console.log(e.keyCode)
          break
      }
    })
    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 37:
          this.actions.moveLeft = false
          break
        case 38:
          this.actions.moveUp = false
          break
        case 39:
          this.actions.moveRight = false
          break
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
