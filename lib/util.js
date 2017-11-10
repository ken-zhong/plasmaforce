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
