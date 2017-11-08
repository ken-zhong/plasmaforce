export default {
  init: function (game) {
    this.game = game
    document.addEventListener('keydown', (e) => {
      this.handleKeyDown(e)
    })
  },

  handleKeyDown: function (e) {
    switch (e.keyCode) {
      case 37:
        this.game.player.speedX = -5
        break
      case 38:
        this.game.player.speedY = -5
        break
      case 39:
        this.game.player.speedX = 5
        break
      case 40:
        this.game.player.speedY = 5
        break
      default: break
    }
  }
}
