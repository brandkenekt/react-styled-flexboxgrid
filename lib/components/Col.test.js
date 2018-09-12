'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Col', function () {
  it('should work', function () {
    (0, _chai.expect)(_react2.default.createElement(_Col2.default, null)).to.be.ok;
  });
}); /* eslint-env mocha */
/* eslint-disable no-unused-expressions */