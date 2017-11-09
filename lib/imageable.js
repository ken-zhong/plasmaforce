/* global Image  */

let instance = null

class ImageableSingleton {
  constructor () {
    if (!instance) {
      instance = this

      // scrolling background
      this.backgroundImg = new Image()
      this.backgroundImg.src = './assets/background1.png'

      // bullets and effects
      this.laserRed = new Image()
      this.laserRed.src = './assets/laserRed.png'
      this.laserGreen = new Image()
      this.laserGreen.src = './assets/laserGreen.png'
      this.beams = new Image()
      this.beams.src = './assets/beams.png'

      // enemy ships
      this.enemyGrunt = new Image()
      this.enemyGrunt.src = './assets/enemy_1grunt.png'

      // player ship sprite: 420 x 85, 4 parts, left dmg normal right
      this.playerShip = new Image()
      this.playerShip.src = './assets/playership.png'
      this.playerShipR = new Image()
      this.playerShipR.src = './assets/playership-right.png'
      this.playerShipL = new Image()
      this.playerShipL.src = './assets/playership-left.png'
    }

    return instance
  }
}

export default ImageableSingleton
