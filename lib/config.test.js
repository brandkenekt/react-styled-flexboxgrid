'use strict';

var _chai = require('chai');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

describe('config', function () {
  describe('BASE_CONF', function () {
    it('should be an object', function () {
      (0, _chai.expect)(_config.BASE_CONF).to.be.an('object');
    });
  });
  describe('DIMENSION_NAMES', function () {
    it('should be an array', function () {
      (0, _chai.expect)(_config.DIMENSION_NAMES).to.be.an('array');
    });
  });
  describe('config()', function () {
    it('should be a function', function () {
      (0, _chai.expect)(_config2.default).to.be.an('function');
    });
  });
});