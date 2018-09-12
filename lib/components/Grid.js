'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: ', ';\n  padding-left: ', ';\n\n  ', '\n'], ['\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: ', ';\n  padding-left: ', ';\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    ', '\n  '], ['\n    ', '\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n        width: ', 'rem;\n      '], ['\n        width: ', 'rem;\n      ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Grid = _styledComponents2.default.div(_templateObject, function (p) {
  return (0, _config2.default)(p).outerMargin + 'rem';
}, function (p) {
  return (0, _config2.default)(p).outerMargin + 'rem';
}, function (p) {
  return !p.fluid && (0, _styledComponents.css)(_templateObject2, _config.DIMENSION_NAMES.map(function (t) {
    return (0, _config2.default)(p).container[t] && (0, _config2.default)(p).media[t](_templateObject3, function (p) {
      return (0, _config2.default)(p).container[t];
    });
  }));
});

Grid.displayName = 'Grid';

Grid.propTypes = {
  fluid: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

exports.default = Grid;