import * as Enemies from './enemies/enemy_ships'
// Suicider - small enemy ship; no bullet logic
// GruntShip - basic enemy, fires triangle spread bullets

const ShipFactory = {
  init: function (game) {
    this.game = game
    this.scores = game.scores
  },

  spawnEnemies: function () {
    let bullets = this.game.bullets

    // temp spawn to test features
    this.game.enemies.push(new Enemies.GruntShip({bullets}))
    this.game.enemies.push(new Enemies.GruntShip({bullets}))
    this.game.enemies.push(new Enemies.GruntShip({bullets}))
  }
}

export default ShipFactory
