import {canvasHeight, canvasWidth} from './util'

class Player {
  constructor () {
    this.speedX = 0
    this.speedY = 0
    this.posX = canvasWidth / 2
    this.posY = canvasHeight / 2
    this.playerBullets = []
    this.playerController()
  }

  fireBullet () {
    let bulletData = {
      
    }
    let newBullet = new Bullet(bulletData)
  }

  move () {
    if (this.posX + this.speedX >= 10 && this.posX + this.speedX <= 370) {
      this.posX += this.speedX
    }
    if (this.posY + this.speedY >= 10 && this.posY + this.speedY <= 670) {
      this.posY += this.speedY
    }
  }

  render (ctx) {
    this.move()
    ctx.fillStyle = 'blue'
    ctx.fillRect(this.posX, this.posY, 20, 20)
  }

  playerController () {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
          this.speedX = -5
          break
        case 38:
          this.speedY = -5
          break
        case 39:
          this.speedX = 5
          break
        case 40:
          this.speedY = 5
          break
        case 32:

          break
        default:
          console.log(e.keyCode)
          break
      }
    })
    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 37:
          this.speedX = 0
          break
        case 38:
          this.speedY = 0
          break
        case 39:
          this.speedX = 0
          break
        case 40:
          this.speedY = 0
          break
        default: break
      }
    })
  }
}

export default Player
