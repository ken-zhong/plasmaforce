import MovingObject from './moving_object'
import ImageableSingleton from './imageable'
// import {canvasHeight, canvasWidth} from './util'

// basic shared ship code can go in here
class BaseShip extends MovingObject {
  constructor (props) {
    super(props)
  }
}

// lvl1, weakest enemy ship
export class GruntShip extends BaseShip {

}
