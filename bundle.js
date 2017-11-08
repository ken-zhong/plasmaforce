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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(player) {
    _classCallCheck(this, Game);

    this.canvas = document.querySelector('canvas');
    this.canvasContext = this.canvas.getContext('2d');
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
      this.clearCanvas();
      this.player.render(this.canvasContext);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speedX = 0;
    this.speedY = 0;
    this.posX = 200;
    this.posY = 200;
    this.playerController();
  }

  _createClass(Player, [{
    key: 'fireBullet',
    value: function fireBullet() {}
  }, {
    key: 'move',
    value: function move() {
      if (this.posX + this.speedX >= 10 && this.posX + this.speedX <= 370) {
        this.posX += this.speedX;
      }
      if (this.posY + this.speedY >= 10 && this.posY + this.speedY <= 670) {
        this.posY += this.speedY;
      }
      // this.speedX = 0
      // this.speedY = 0
    }
  }, {
    key: 'render',
    value: function render(ctx) {
      this.move();
      ctx.fillStyle = 'red';
      ctx.fillRect(this.posX, this.posY, 20, 20);
    }
  }, {
    key: 'playerController',
    value: function playerController() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 37:
            _this.speedX = -5;
            break;
          case 38:
            _this.speedY = -5;
            break;
          case 39:
            _this.speedX = 5;
            break;
          case 40:
            _this.speedY = 5;
            break;
          default:
            break;
        }
      });
      document.addEventListener('keyup', function (e) {
        switch (e.keyCode) {
          case 37:
            _this.speedX = 0;
            break;
          case 38:
            _this.speedY = 0;
            break;
          case 39:
            _this.speedX = 0;
            break;
          case 40:
            _this.speedY = 0;
            break;
          default:
            break;
        }
      });
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map