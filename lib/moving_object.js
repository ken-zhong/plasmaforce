// This is the 'master' class that every single moving object inherits from

import ImageableSingleton from './imageable'
// import {canvasHeight, canvasWidth} from './util'

const defaultProps = {
  speedX: 0,
  speedY: 0,
  posX: 0,
  posY: 0
}

class MovingObject {
  constructor (props = {}) {
    let newProps = Object.assign({}, defaultProps, props)
    this.speedX = newProps.speedX
    this.speedY = newProps.speedY
    this.posX = newProps.posX
    this.posY = newProps.posY
    this.cleanup = false
    this.images = new ImageableSingleton()
  }

  move () {
    this.posX += this.speedX
    this.posY += this.speedY
  }

  destroySelf () {
    // mark this object for cleanup so that the game's cleanup function can delete it!
    this.cleanup = true
  }
}

export default MovingObject
