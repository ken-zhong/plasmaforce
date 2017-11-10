/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

var _player = __webpack_require__(2);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Howler from 'howler'


document.addEventListener('DOMContentLoaded', function () {
  var player = new _player2.default();
  var game = new _game2.default(player);
  game.run();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _background = __webpack_require__(7);

var _background2 = _interopRequireDefault(_background);

var _enemy_ships = __webpack_require__(9);

var Enemies = _interopRequireWildcard(_enemy_ships);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(player) {
    _classCallCheck(this, Game);

    this.canvas = document.querySelector('#game-canvas');
    this.bgCanvas = document.querySelector('#background-canvas');
    this.canvasContext = this.canvas.getContext('2d');
    this.bgContext = this.bgCanvas.getContext('2d');
    this.bg = new _background2.default();

    this.player = player;
    this.showTitleScreen = true;
    this.showGameOverScreen = false;
    this.bullets = [];
    this.enemies = [];
    this.enemies.push(new Enemies.GruntShip());
  }

  _createClass(Game, [{
    key: 'run',
    value: function run() {
      this.render();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      this.clearCanvas();
      this.bg.render(this.bgContext);
      this.player.render(this.canvasContext);
      // this.bullets = this.player.playerBullets
      this.player.playerBullets.forEach(function (bullet) {
        bullet.render(_this.canvasContext);
      });
      this.enemies.forEach(function (ship) {
        ship.render(_this.canvasContext);
      });
      window.requestAnimationFrame(this.render.bind(this));
    }
  }, {
    key: 'clearCanvas',
    value: function clearCanvas() {
      this.canvasContext.clearRect(0, 0, 400, 700);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(4);

var _bullet = __webpack_require__(5);

var _moving_object = __webpack_require__(6);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_MovingObject) {
  _inherits(Player, _MovingObject);

  function Player() {
    _classCallCheck(this, Player);

    var props = {
      posX: Math.floor(_util.canvasWidth / 2),
      posY: Math.floor(_util.canvasHeight / 1.2)
    };

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

    _this.actions = {
      moveLeft: false,
      moveRight: false,
      moveUp: false,
      moveDown: false,
      fireBullet: false
    };
    _this.bulletCooldown = 0;
    _this.topSpeed = 5;
    _this.playerBullets = [];
    _this.HP = 5;
    _this.playerController();
    _this.shipW = 30;
    _this.shipH = 46;
    return _this;
  }

  _createClass(Player, [{
    key: 'fireBullet',
    value: function fireBullet() {
      var bulletData = {
        speedX: [-1, 0, 1][Math.floor(Math.random() * 3)],
        speedY: -10,
        posX: this.posX + Math.floor(this.shipW / 2) - 10,
        posY: this.posY - 20
      };
      var newBullet = new _bullet.PlayerBulletBasic(bulletData);
      this.playerBullets.push(newBullet);
      this.bulletCooldown = 6;
    }
  }, {
    key: 'calculateInertia',
    value: function calculateInertia() {
      if (this.actions.moveLeft) {
        if (Math.abs(this.speedX) < this.topSpeed) {
          this.speedX--;
        }
      } else if (this.speedX < 0) {
        this.speedX++;
      }
      if (this.actions.moveRight) {
        if (Math.abs(this.speedX) < this.topSpeed) {
          this.speedX++;
        }
      } else if (this.speedX > 0) {
        this.speedX--;
      }
      if (this.actions.moveUp) {
        if (Math.abs(this.speedY) < this.topSpeed) {
          this.speedY--;
        }
      } else if (this.speedY < 0) {
        this.speedY++;
      }
      if (this.actions.moveDown) {
        if (Math.abs(this.speedY) < this.topSpeed) {
          this.speedY++;
        }
      } else if (this.speedY > 0) {
        this.speedY--;
      }
    }
  }, {
    key: 'move',
    value: function move() {
      if (this.actions.fireBullet) {
        if (this.bulletCooldown === 0) {
          this.fireBullet();
        } else {
          this.bulletCooldown--;
        }
      }
      if (this.posX + this.speedX >= 0 && this.posX + this.speedX <= _util.canvasWidth - this.shipW) {
        this.posX += this.speedX;
      }
      if (this.posY + this.speedY >= 0 && this.posY + this.speedY <= _util.canvasHeight - this.shipH) {
        this.posY += this.speedY;
      }
    }
  }, {
    key: 'deleteBullets',
    value: function deleteBullets() {
      this.playerBullets = this.playerBullets.filter(function (bul) {
        return !bul.cleanup;
      });
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      // optimization for speed?, uncomment this if needed
      if (this.bulletCooldown === 0) {
        this.deleteBullets();
      }
      this.calculateInertia();
      this.move();
      // ctx.fillStyle = 'grey'
      // ctx.fillRect(this.posX, this.posY, 20, 20)

      // player ship sprite: 420 x 85, 4 parts, left dmg normal right
      ctx.drawImage.apply(ctx, _toConsumableArray(this.getSprite()));
    }
  }, {
    key: 'getSprite',
    value: function getSprite() {
      var frame = [0, 1][Math.floor(Math.random() * 2)];

      var normalSprite = [[this.images.playerShip, 0, 0, 32, 44, this.posX, this.posY, this.shipW, this.shipH], [this.images.playerShip, 32, 0, 32, 44, this.posX, this.posY, this.shipW, this.shipH]];
      var leftSprite = [[this.images.playerShipL, 0, 0, 29, 44, this.posX, this.posY, this.shipW, this.shipH], [this.images.playerShipL, 29, 0, 29, 44, this.posX, this.posY, this.shipW, this.shipH]];
      var rightSprite = [[this.images.playerShipR, 0, 0, 29, 44, this.posX, this.posY, this.shipW, this.shipH], [this.images.playerShipR, 29, 0, 29, 44, this.posX, this.posY, this.shipW, this.shipH]];

      if (this.speedX === 0) {
        return normalSprite[frame];
      } else if (this.speedX < 0) {
        return leftSprite[frame];
      } else if (this.speedX > 0) {
        return rightSprite[frame];
      }
    }

    // KEYCODES: 37: left, 38: up, 39: right, 40: down, 32: space

  }, {
    key: 'playerController',
    value: function playerController() {
      var _this2 = this;

      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 37:
            _this2.actions.moveLeft = true;
            break;
          case 38:
            _this2.actions.moveUp = true;
            break;
          case 39:
            _this2.actions.moveRight = true;
            break;
          case 40:
            _this2.actions.moveDown = true;
            break;
          case 32:
            _this2.actions.fireBullet = true;
            break;
          default:
            console.log(e.keyCode);
            break;
        }
      });
      document.addEventListener('keyup', function (e) {
        switch (e.keyCode) {
          case 37:
            _this2.actions.moveLeft = false;
            break;
          case 38:
            _this2.actions.moveUp = false;
            break;
          case 39:
            _this2.actions.moveRight = false;
            break;
          case 40:
            _this2.actions.moveDown = false;
            break;
          case 32:
            _this2.actions.fireBullet = false;
            _this2.bulletCooldown = 0;
            break;
          default:
            break;
        }
      });
    }
  }]);

  return Player;
}(_moving_object2.default);

exports.default = Player;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var canvasHeight = exports.canvasHeight = 700;
var canvasWidth = exports.canvasWidth = 400;

var hitDetection = exports.hitDetection = function hitDetection(ship, bullet) {};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicEnemyBullet = exports.PlayerBulletBasic = exports.Bullet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(4);

var _moving_object = __webpack_require__(6);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = exports.Bullet = function (_MovingObject) {
  _inherits(Bullet, _MovingObject);

  function Bullet(props) {
    _classCallCheck(this, Bullet);

    var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, props));

    _this.sprite = _this.images.beams;
    return _this;
  }

  _createClass(Bullet, [{
    key: 'move',
    value: function move() {
      this.posX += this.speedX;
      this.posY += this.speedY;
      if (this.posX < 0 || this.posX > _util.canvasWidth || this.posY < 0 || this.posY > _util.canvasHeight) {
        this.destroySelf();
      }
    }
  }, {
    key: 'destroySelf',
    value: function destroySelf() {
      // mark this bullet for cleanup so that the game's cleanup function can delete it!
      this.cleanup = true;
    }
  }]);

  return Bullet;
}(_moving_object2.default);

var PlayerBulletBasic = exports.PlayerBulletBasic = function (_Bullet) {
  _inherits(PlayerBulletBasic, _Bullet);

  function PlayerBulletBasic() {
    _classCallCheck(this, PlayerBulletBasic);

    return _possibleConstructorReturn(this, (PlayerBulletBasic.__proto__ || Object.getPrototypeOf(PlayerBulletBasic)).apply(this, arguments));
  }

  _createClass(PlayerBulletBasic, [{
    key: 'move',
    value: function move() {
      // give bullets a slight spread
      if (this.posY % 3 === 0 && this.speedX !== 0) {
        this.posX += this.speedX;
      }
      this.posY += this.speedY;
      if (this.posX < -20 || this.posX > _util.canvasWidth || this.posY < 0 || this.posY > _util.canvasHeight) {
        this.destroySelf();
      }
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      this.move();
      ctx.drawImage(this.sprite, 140, 318, 45, 77, this.posX, this.posY, 20, 40);
    }
  }]);

  return PlayerBulletBasic;
}(Bullet);

var BasicEnemyBullet = exports.BasicEnemyBullet = function (_Bullet2) {
  _inherits(BasicEnemyBullet, _Bullet2);

  function BasicEnemyBullet() {
    _classCallCheck(this, BasicEnemyBullet);

    return _possibleConstructorReturn(this, (BasicEnemyBullet.__proto__ || Object.getPrototypeOf(BasicEnemyBullet)).apply(this, arguments));
  }

  _createClass(BasicEnemyBullet, [{
    key: 'move',
    value: function move() {
      // give bullets a slight spread
      if (this.posY % 3 === 0 && this.speedX !== 0) {
        this.posX += this.speedX;
      }
      this.posY += this.speedY;
      if (this.posX < -20 || this.posX > _util.canvasWidth || this.posY < 0 || this.posY > _util.canvasHeight) {
        this.destroySelf();
      }
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      this.move();
      ctx.drawImage(this.sprite, 140, 318, 45, 77, this.posX, this.posY, 20, 40);
    }
  }]);

  return BasicEnemyBullet;
}(Bullet);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // This is the 'master' class that every single moving object inherits from

var _imageable = __webpack_require__(8);

var _imageable2 = _interopRequireDefault(_imageable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import {canvasHeight, canvasWidth} from './util'

var defaultProps = {
  speedX: 0,
  speedY: 0,
  posX: 0,
  posY: 0
};

var MovingObject = function () {
  function MovingObject() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MovingObject);

    var newProps = Object.assign({}, defaultProps, props);
    this.speedX = newProps.speedX;
    this.speedY = newProps.speedY;
    this.posX = newProps.posX;
    this.posY = newProps.posY;
    this.cleanup = false;
    this.images = new _imageable2.default();
  }

  _createClass(MovingObject, [{
    key: 'move',
    value: function move() {
      this.posX += this.speedX;
      this.posY += this.speedY;
    }
  }, {
    key: 'destroySelf',
    value: function destroySelf() {
      // mark this object for cleanup so that the game's cleanup function can delete it!
      this.cleanup = true;
    }
  }]);

  return MovingObject;
}();

exports.default = MovingObject;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(6);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _imageable = __webpack_require__(8);

var _imageable2 = _interopRequireDefault(_imageable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {canvasHeight, canvasWidth} from './util'

var Background = function (_MovingObject) {
  _inherits(Background, _MovingObject);

  function Background() {
    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, { speedY: 1 }));

    var images = new _imageable2.default();
    _this.backgroundImg = images.backgroundImg;
    return _this;
  }

  _createClass(Background, [{
    key: 'render',
    value: function render(ctx) {
      ctx.drawImage(this.backgroundImg, this.posX, this.posY);
      ctx.drawImage(this.backgroundImg, this.posX, this.posY - this.backgroundImg.height);
      this.posY += this.speedY;
      if (this.posY >= this.backgroundImg.height) {
        this.posY = 0;
      }
    }
  }]);

  return Background;
}(_moving_object2.default);

exports.default = Background;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global Image  */

var instance = null;

var ImageableSingleton = function ImageableSingleton() {
  _classCallCheck(this, ImageableSingleton);

  if (!instance) {
    instance = this;

    // scrolling background
    this.backgroundImg = new Image();
    this.backgroundImg.src = './assets/background1.jpg';

    // bullets and effects
    this.laserRed = new Image();
    this.laserRed.src = './assets/laserRed.png';
    this.laserGreen = new Image();
    this.laserGreen.src = './assets/laserGreen.png';
    this.beams = new Image();
    this.beams.src = './assets/beams.png';

    // enemy ships
    this.enemyGrunt = new Image();
    this.enemyGrunt.src = './assets/enemy_1grunt.png';

    // player ship sprite: 420 x 85, 4 parts, left dmg normal right
    this.playerShip = new Image();
    this.playerShip.src = './assets/playership.png';
    this.playerShipR = new Image();
    this.playerShipR.src = './assets/playership-right.png';
    this.playerShipL = new Image();
    this.playerShipL.src = './assets/playership-left.png';
  }

  return instance;
};

exports.default = ImageableSingleton;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GruntShip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(6);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _bullet = __webpack_require__(5);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// basic shared ship code can go in here
var BaseShip = function (_MovingObject) {
  _inherits(BaseShip, _MovingObject);

  function BaseShip(props) {
    _classCallCheck(this, BaseShip);

    var _this = _possibleConstructorReturn(this, (BaseShip.__proto__ || Object.getPrototypeOf(BaseShip)).call(this, props));

    _this.bullets = [];
    _this.limitY = Math.floor(_util.canvasHeight / 2);
    return _this;
  }

  _createClass(BaseShip, [{
    key: 'deleteBullets',
    value: function deleteBullets() {
      this.bullets = this.bullets.filter(function (bul) {
        return !bul.cleanup;
      });
    }
  }]);

  return BaseShip;
}(_moving_object2.default);

// lvl1, weakest enemy ship


var GruntShip = exports.GruntShip = function (_BaseShip) {
  _inherits(GruntShip, _BaseShip);

  function GruntShip(props) {
    _classCallCheck(this, GruntShip);

    var _this2 = _possibleConstructorReturn(this, (GruntShip.__proto__ || Object.getPrototypeOf(GruntShip)).call(this, props));

    _this2.sprite = _this2.images.enemyGrunt;
    _this2.tickCount = 0;
    _this2.shipW = 32;
    _this2.shipH = 76;
    _this2.sprites = [[_this2.sprite, 0, 0, 16, 38], [_this2.sprite, 16, 0, 16, 38], [_this2.sprite, 32, 0, 16, 38], [_this2.sprite, 48, 0, 16, 38]];
    return _this2;
  }

  _createClass(GruntShip, [{
    key: 'move',
    value: function move() {}
  }, {
    key: 'fireBullet',
    value: function fireBullet() {}
  }, {
    key: 'render',
    value: function render(ctx) {
      if (this.tickCount === 40 && Math.random() * 2 > 1) {
        this.fireBullet();
      }
      this.move();
      ctx.drawImage.apply(ctx, _toConsumableArray(this.getSprite()).concat([this.posX, this.posY, this.shipW, this.shipH]));
    }
  }, {
    key: 'getSprite',
    value: function getSprite() {
      if (this.tickCount >= 40) {
        this.tickCount = 0;
      }
      var result = this.sprites[Math.floor(this.tickCount / 10)];
      this.tickCount++;
      return result;
    }
  }]);

  return GruntShip;
}(BaseShip);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map