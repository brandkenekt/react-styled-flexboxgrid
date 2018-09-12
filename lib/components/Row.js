'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    justify-content: flex-start;\n  '], ['\n    justify-content: flex-start;\n  ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n    justify-content: center;\n  '], ['\n    justify-content: center;\n  ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n    justify-content: flex-end;\n  '], ['\n    justify-content: flex-end;\n  ']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n    align-items: flex-start;\n  '], ['\n    align-items: flex-start;\n  ']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n    align-items: center;\n  '], ['\n    align-items: center;\n  ']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n    align-items: flex-end;\n  '], ['\n    align-items: flex-end;\n  ']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n    justify-content: space-around;\n  '], ['\n    justify-content: space-around;\n  ']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n    justify-content: space-between;\n  '], ['\n    justify-content: space-between;\n  ']),
    _templateObject10 = _taggedTemplateLiteralLoose(['\n    order: -1;\n  '], ['\n    order: -1;\n  ']),
    _templateObject11 = _taggedTemplateLiteralLoose(['\n    order: 1;\n  '], ['\n    order: 1;\n  ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var ModificatorType = _propTypes2.default.oneOf(_config.DIMENSION_NAMES);

var Row = _styledComponents2.default.div(_templateObject, function (p) {
  return p.reverse && '\n    flex-direction: row-reverse;\n  ';
}, function (p) {
  return p.start && (0, _config2.default)(p).media[p.start](_templateObject2);
}, function (p) {
  return p.center && (0, _config2.default)(p).media[p.center](_templateObject3);
}, function (p) {
  return p.end && (0, _config2.default)(p).media[p.end](_templateObject4);
}, function (p) {
  return p.top && (0, _config2.default)(p).media[p.top](_templateObject5);
}, function (p) {
  return p.middle && (0, _config2.default)(p).media[p.middle](_templateObject6);
}, function (p) {
  return p.bottom && (0, _config2.default)(p).media[p.bottom](_templateObject7);
}, function (p) {
  return p.around && (0, _config2.default)(p).media[p.around](_templateObject8);
}, function (p) {
  return p.between && (0, _config2.default)(p).media[p.between](_templateObject9);
}, function (p) {
  return p.first && (0, _config2.default)(p).media[p.first](_templateObject10);
}, function (p) {
  return p.last && (0, _config2.default)(p).media[p.last](_templateObject11);
});

Row.displayName = 'Row';

Row.propTypes = {
  reverse: _propTypes2.default.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  children: _propTypes2.default.node
};

exports.default = Row;