'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Grid', function () {
  it('should work', function () {
    (0, _chai.expect)(_react2.default.createElement(_Grid2.default, null)).to.be.ok;
  });
}); /* eslint-env mocha */
/* eslint-disable no-unused-expressions */