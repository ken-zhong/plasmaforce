import ImageableSingleton from './imageable'

class Explosion {
  constructor (pos, size = 30) {
    let images = new ImageableSingleton()
    this.spriteSheet = images.explosion
    this.sprites = []
    this.tickCount = 31
    for (let i = 0; i <= 192; i += 64) {
      for (let j = 0; j <= 192; j += 64) {
        this.sprites.push(
          [this.spriteSheet, j, i, 64, 64, pos[0], pos[1], size, size]
        )
      }
    }
    this.sprites = this.sprites.slice(0).reverse().concat(this.sprites)
  }

  render (ctx) {
    if (this.tickCount >= 0) {
      ctx.drawImage(...this.sprites[Math.floor(this.tickCount)])
      this.tickCount--
    } else {
      this.cleanup = true
    }
  }
}

export default Explosion
