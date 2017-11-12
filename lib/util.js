export const canvasHeight = 700
export const canvasWidth = 450

export const checkCollision = (obj1, obj2) => {
  if (obj1.posY + obj1.hitboxH < obj2.posY || obj1.posY > obj2.posY + obj2.hitboxH ||
    obj1.posX + obj1.hitboxW < obj2.posX || obj1.posX > obj2.posX + obj2.hitboxW) {
    return false
  } else {
    return true
  }
}

export const formatScore = (num) => {
  if (num > 999999) {
    return '999999'
  } else if (num > 99999) {
    return num
  } else if (num > 9999) {
    return '0' + num
  } else if (num > 999) {
    return '00' + num
  } else if (num > 99) {
    return '000' + num
  } else if (num > 9) {
    return '0000' + num
  } else {
    return '00000' + num
  }
}

export const addListeners = (game) => {
  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 13:
        game.showTitleScreen = false
        break
      case 80:
        game.pauseGame()
        break
      case 82:
        game.resetGame()
        break
      default:
        break
    }
  })
}
