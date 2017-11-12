import * as Enemies from './enemies/enemy_ships'
// Suicider - small enemy ship; no bullet logic
// GruntShip - basic enemy, fires triangle spread bullets

const ShipFactory = {
  init: function (game) {
    this.game = game
    this.scores = game.scores
    this.waves = [this.addGrunt, this.addSaucer, this.addTwoSaucers]
  },

  spawnEnemies: function () {
    if (this.scores.score < 45) {
      this.addGrunt()
    } else if (this.scores.score < 145) {
      this.addGrunt()
      this.addGrunt()
    } else if (this.scores.score < 290) {
      this.addGrunt()
      this.addGrunt()
      this.addGrunt()
    } else if (this.scores.score < 400) {
      this.addSaucer()
    } else if (this.scores.score < 700) {
      this.addGrunt()
      this.addSaucer()
    } else if (this.scores.score < 1000) {
      this.addTwoSaucers()
    } else {
      this.randomWave()
    }
    // this.randomWave()
  },

  addGrunt: function () {
    this.game.enemies.push(new Enemies.GruntShip({bullets: this.game.bullets}))
  },
  addSaucer: function () {
    this.game.enemies.push(new Enemies.SaucerShip({bullets: this.game.bullets}))
  },
  addTwoSaucers: function () {
    this.game.enemies.push(new Enemies.SaucerShip({bullets: this.game.bullets, posX: 20}))
    this.game.enemies.push(new Enemies.SaucerShip({bullets: this.game.bullets, posX: 320, posY: -400}))
  },
  randomWave: function () {
    this.waves[Math.floor(Math.random() * this.waves.length)].call(ShipFactory)
    this.waves[Math.floor(Math.random() * this.waves.length)].call(ShipFactory)
  }
}

export default ShipFactory
