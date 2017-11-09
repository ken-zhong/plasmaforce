/* global Image  */

let instance = null

class ImageableSingleton {
  constructor () {
    if (!instance) {
      instance = this
      this.backgroundImg = new Image()
      this.backgroundImg.src = './assets/background1.png'
      this.laserRed = new Image()
      this.laserRed.src = './assets/laserRed.png'
      this.laserGreen = new Image()
      console.log(this.laserGreen.height);
      this.laserGreen.src = './assets/laserGreen.png'

      // player ship sprite: 420 x 85, 4 parts, left dmg normal right
      this.playerShip = new Image()
      this.playerShip.src = './assets/playerShip.png'
    }

    return instance
  }
}

export default ImageableSingleton
