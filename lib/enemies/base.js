import MovingObject from '../moving_object'

// basic shared ship code can go in here
class BaseShip extends MovingObject {
  constructor (props) {
    super(props)
    this.bullets = props.bullets
  }

  deleteBullets () {
    this.bullets = this.bullets.filter(bul => !bul.cleanup)
  }

  antiBumpTechnology () {
    this.speedX = -this.speedX
  }
}

export default BaseShip
