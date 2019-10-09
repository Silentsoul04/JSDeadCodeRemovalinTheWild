'use strict';

import dom from '@buzzfeed/buzzblocks/js/services/dom';
import client from '@buzzfeed/buzzblocks/js/services/client';

//-----------------------------------------------------------
// Private
//-----------------------------------------------------------

const _countParticles = 150;

var _particles = [];
var _angle = 0;
var _canvas;
var _canvasContext;
var _windowWidth = client.getViewportWidth();
var _windowHeight = client.getViewportHeight();

/**
 * Creates canvas
 * Runs callback function
 * @return {void}
 */
function _createCanvas(callback) {
  dom.append(document.body,
    '<canvas id="confettiCanvas" style="display:block;position:fixed;left:0;top:0;z-index: -1;"></canvas>');

  setTimeout(function () {
    _canvas = dom.findOne(document, '#confettiCanvas');

    if (_canvas) {
      _canvas.width = _windowWidth;
      _canvas.height = _windowHeight;
      _canvasContext = _canvas.getContext('2d');

      if (typeof callback === 'function') {
        callback();
      }
    }
  }, 250);
}

/**
 * Creates particles
 * Sets first position and colors
 * @return {void}
 */
function _createParticles() {
  for (let i = 0; i < _countParticles; i++) {
    _particles.push({
      x: Math.random() * _windowWidth,
      y: Math.random() * _windowHeight,
      r: Math.random() * 4 + 1,
      d: Math.random() * _countParticles,
      color: 'rgba(' + Math.floor((Math.random() * 255))
      + ', ' + Math.floor((Math.random() * 255))
      + ', ' + Math.floor((Math.random() * 255)) + ', 0.8)',
    });
  }
}

/**
 * Draws particles on the canvas
 * @return {void}
 */
function _drawParticles() {
  _canvasContext.clearRect(0, 0, _windowWidth, _windowHeight);

  for(let i = 0; i < _countParticles; i++) {
    let p = _particles[i];
    _canvasContext.beginPath();
    _canvasContext.fillStyle = p.color;
    _canvasContext.moveTo(p.x, p.y);
    _canvasContext.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    _canvasContext.fill();
  }

  _updateParticlesPosition();
}

/**
 * Update particles position for next draw
 * @return {void}
 */
function _updateParticlesPosition() {
  _angle += 0.01;

  for(let i = 0; i < _countParticles; i++) {
    let p = _particles[i];
    p.y += Math.cos(_angle + p.d) + 1 + p.r / 2;
    p.x += Math.sin(_angle) * 2;

    if (p.x > _windowWidth + 5 || p.x < -5 || p.y > _windowHeight) {
      if (i % 3 > 0) {
        _particles[i] = {x: Math.random() * _windowWidth, y: -10, r: p.r, d: p.d, color: p.color, };
      } else if (Math.sin(_angle) > 0) {
        _particles[i] = {x: -5, y: Math.random() * _windowHeight, r: p.r, d: p.d, color: p.color, };
      } else {
        _particles[i] = {x: _windowWidth + 5, y: Math.random() * _windowHeight, r: p.r, d: p.d, color: p.color, };
      }
    }
  }
}

//-----------------------------------------------------------
// Public
//-----------------------------------------------------------

/**
 * Service for checking Konami code.
 * @exports service:konami-code
 */
var service = {};

/**
 * Renders canvas
 * @return {void}
 */
service.start = function() {
  _createCanvas(function () {
    _createParticles();
    requestAnimationFrame(function loop() {
      requestAnimationFrame(loop);
      _drawParticles();
    });

    dom.on(window, 'resize', function () {
      _windowWidth = client.getViewportWidth();
      _windowHeight = client.getViewportHeight();
      _canvas.width = _windowWidth;
      _canvas.height = _windowHeight;
    });
  });
};

export default service;
