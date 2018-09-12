'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Row', function () {
  it('should work', function () {
    (0, _chai.expect)(_react2.default.createElement(_Row2.default, null)).to.be.ok;
  });
}); /* eslint-env mocha */
/* eslint-disable no-unused-expressions */