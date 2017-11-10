import ImageableSingleton from './imageable'

class Explosion {
  constructor (pos) {
    let images = new ImageableSingleton()
    this.sprites = images.explosion
  }

  render (ctx) {

  }
}

export default Explosion
