'use strict';

exports.__esModule = true;
exports.DIMENSION_NAMES = exports.BASE_CONF = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n    @media ', ' {\n      ', '\n    }\n  '], ['\n    @media ', ' {\n      ', '\n    }\n  ']);

exports.default = config;

var _styledComponents = require('styled-components');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var THEME_CONF = 'flexboxgrid';
var BASE_CONF = exports.BASE_CONF = {
  gridSize: 12,
  gutterWidth: 1,
  outerMargin: 2,
  mediaQuery: 'only screen',
  container: {
    sm: 46,
    md: 61,
    lg: 76
  },
  breakpoints: {
    xs: 0,
    sm: 48,
    md: 64,
    lg: 75
  }
};

var configCache = [];
var makeCacheId = function makeCacheId(props) {
  return JSON.stringify(props.theme && props.theme[THEME_CONF] || {});
};
var resolveConfig = function resolveConfig(props) {
  var themeConf = props.theme && props.theme[THEME_CONF] || {};

  var conf = _extends({}, BASE_CONF, themeConf, {
    container: _extends({}, BASE_CONF.container, themeConf.container),
    breakpoints: _extends({}, BASE_CONF.breakpoints, themeConf.breakpoints)
  });

  conf.media = Object.keys(conf.breakpoints).reduce(function (media, breakpoint) {
    var breakpointWidth = conf.breakpoints[breakpoint];
    media[breakpoint] = makeMedia([conf.mediaQuery, breakpoint !== 0 && '(min-width: ' + breakpointWidth + 'em)'].filter(Boolean).join(' and '));
    return media;
  }, {});

  return conf;
};

var DIMENSION_NAMES = exports.DIMENSION_NAMES = ['xs', 'sm', 'md', 'lg'];

function config(props) {
  var cacheId = makeCacheId(props);
  if (configCache[0] === cacheId) {
    return configCache[1];
  }

  var conf = resolveConfig(props);

  configCache[0] = cacheId;
  configCache[1] = conf;

  return conf;
}

function makeMedia(media) {
  return function () {
    return (0, _styledComponents.css)(_templateObject, media, _styledComponents.css.apply(undefined, arguments));
  };
}