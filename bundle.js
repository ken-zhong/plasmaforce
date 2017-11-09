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
      this.bullets = this.player.playerBullets;
      this.bullets.forEach(function (bullet) {
        bullet.render(_this.canvasContext);
      });
      requestAnimationFrame(this.render.bind(this));
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
    _this.sprite = _this.images.playerShip;
    _this.shipW = 50;
    _this.shipH = 40;
    return _this;
  }

  _createClass(Player, [{
    key: 'fireBullet',
    value: function fireBullet() {
      var bulletData = {
        speedX: [-1, 0, 1][Math.floor(Math.random() * 3)],
        speedY: -10,
        posX: this.posX + Math.floor(this.shipW / 2) - 5,
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
      this.deleteBullets();
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
      var sprite = [this.sprite];
      var normalShip = [0, 0, 107, 85];
      var leftShip = [317, 0, 100, 85];
      var rightShip = [218, 0, 101, 85];
      var pos = [this.posX, this.posY, this.shipW, this.shipH];
      if (this.speedX === 0) {
        return sprite.concat(normalShip, pos);
      } else if (this.speedX < 0) {
        return sprite.concat(rightShip, pos);
      } else if (this.speedX > 0) {
        return sprite.concat(leftShip, pos);
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerBulletBasic = exports.Bullet = undefined;

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

  function Bullet() {
    _classCallCheck(this, Bullet);

    return _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).apply(this, arguments));
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

  function PlayerBulletBasic(props) {
    _classCallCheck(this, PlayerBulletBasic);

    var _this2 = _possibleConstructorReturn(this, (PlayerBulletBasic.__proto__ || Object.getPrototypeOf(PlayerBulletBasic)).call(this, props));

    _this2.sprite = _this2.images.laserGreen;
    return _this2;
  }

  _createClass(PlayerBulletBasic, [{
    key: 'move',
    value: function move() {
      // give bullets a slight spread
      if (this.posY % 3 === 0 && this.speedX !== 0) {
        this.posX += this.speedX;
      }
      this.posY += this.speedY;
      if (this.posX < 0 || this.posX > _util.canvasWidth || this.posY < 0 || this.posY > _util.canvasHeight) {
        this.destroySelf();
      }
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      this.move();
      ctx.drawImage(this.sprite, this.posX, this.posY);
    }
  }]);

  return PlayerBulletBasic;
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
    this.backgroundImg = new Image();
    this.backgroundImg.src = './assets/background1.png';
    this.laserRed = new Image();
    this.laserRed.src = './assets/laserRed.png';
    this.laserGreen = new Image();
    console.log(this.laserGreen.height);
    this.laserGreen.src = './assets/laserGreen.png';

    // player ship sprite: 420 x 85, 4 parts, left dmg normal right
    this.playerShip = new Image();
    this.playerShip.src = './assets/playerShip.png';
  }

  return instance;
};

exports.default = ImageableSingleton;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map