'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: ', 'rem;\n  padding-left: ', 'rem;\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: ', 'rem;\n  padding-left: ', 'rem;\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['', ''], ['', '']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n        margin-left: ', '%;\n      '], ['\n        margin-left: ', '%;\n      ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.isinteger');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ModificatorType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);

var offsetProps = _config.DIMENSION_NAMES.map(function (d) {
  return d + 'Offset';
});
var DimensionPropTypes = _config.DIMENSION_NAMES.reduce(function (propTypes, dimension) {
  propTypes[dimension] = ModificatorType;
  propTypes[dimension + 'Offset'] = _propTypes2.default.number;
  return propTypes;
}, {});

var Col = _styledComponents2.default.div(_templateObject, function (p) {
  return (0, _config2.default)(p).gutterWidth / 2;
}, function (p) {
  return (0, _config2.default)(p).gutterWidth / 2;
}, function (p) {
  return p.reverse && '\n    flex-direction: column-reverse;\n  ';
}, function (p) {
  return Object.keys(p).filter(function (k) {
    return ~_config.DIMENSION_NAMES.indexOf(k);
  }).sort(function (k1, k2) {
    return _config.DIMENSION_NAMES.indexOf(k1) - _config.DIMENSION_NAMES.indexOf(k2);
  }).map(function (k) {
    return (0, _config2.default)(p).media[k](_templateObject2, (0, _lodash2.default)(p[k])

    // Integer value
    ? '\n        flex-basis: ' + 100 / (0, _config2.default)(p).gridSize * p[k] + '%;\n        max-width: ' + 100 / (0, _config2.default)(p).gridSize * p[k] + '%;\n        display: block;\n      '
    // Boolean
    : p[k]
    // Auto-width
    ? '\n          flex-grow: 1;\n          flex-basis: 0;\n          max-width: 100%;\n          display: block;\n        '
    // Hide element
    : 'display: none;');
  });
}, function (p) {
  return Object.keys(p).filter(function (k) {
    return ~offsetProps.indexOf(k);
  }).map(function (k) {
    return (0, _config2.default)(p).media[k.replace(/Offset$/, '')](_templateObject3, 100 / (0, _config2.default)(p).gridSize * p[k]);
  });
});

Col.displayName = 'Col';

Col.propTypes = _extends({}, DimensionPropTypes, {
  reverse: _propTypes2.default.bool,
  children: _propTypes2.default.node
});

exports.default = Col;