/* global Image  */

let instance = null

class ImageableSingleton {
  constructor () {
    if (!instance) {
      instance = this

      // scrolling background
      this.backgroundImg = new Image()
      this.backgroundImg.src = './assets/background1.jpg'

      // bullets and beam effects
      this.beams = new Image()
      this.beams.src = './assets/beams.png'
      this.explosion = new Image()
      this.explosion.src = './assets/explosion.png'

      // enemy ships
      this.enemySuicider = new Image()
      this.enemySuicider.src = './assets/enemy_suicider.png'
      this.enemyGrunt = new Image()
      this.enemyGrunt.src = './assets/enemy_grunt.png'
      this.enemySaucer = new Image()
      this.enemySaucer.src = './assets/enemy_saucer.png'
      this.enemyOculus = new Image()
      this.enemyOculus.src = './assets/enemy_oculus.png'

      // player ship sprite
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
