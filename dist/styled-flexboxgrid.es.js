import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import isInteger from 'lodash.isinteger';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};

var _templateObject = taggedTemplateLiteralLoose(['\n    @media ', ' {\n      ', '\n    }\n  '], ['\n    @media ', ' {\n      ', '\n    }\n  ']);

var THEME_CONF = 'flexboxgrid';
var BASE_CONF = {
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

var DIMENSION_NAMES = ['xs', 'sm', 'md', 'lg'];

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
    return css(_templateObject, media, css.apply(undefined, arguments));
  };
}

var _templateObject$1 = taggedTemplateLiteralLoose(['\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: ', ';\n  padding-left: ', ';\n\n  ', '\n'], ['\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: ', ';\n  padding-left: ', ';\n\n  ', '\n']),
    _templateObject2 = taggedTemplateLiteralLoose(['\n    ', '\n  '], ['\n    ', '\n  ']),
    _templateObject3 = taggedTemplateLiteralLoose(['\n        width: ', 'rem;\n      '], ['\n        width: ', 'rem;\n      ']);

var Grid = styled.div(_templateObject$1, function (p) {
  return config(p).outerMargin + 'rem';
}, function (p) {
  return config(p).outerMargin + 'rem';
}, function (p) {
  return !p.fluid && css(_templateObject2, DIMENSION_NAMES.map(function (t) {
    return config(p).container[t] && config(p).media[t](_templateObject3, function (p) {
      return config(p).container[t];
    });
  }));
});

Grid.displayName = 'Grid';

Grid.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
};

var _templateObject$2 = taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2$1 = taggedTemplateLiteralLoose(['\n    justify-content: flex-start;\n  '], ['\n    justify-content: flex-start;\n  ']),
    _templateObject3$1 = taggedTemplateLiteralLoose(['\n    justify-content: center;\n  '], ['\n    justify-content: center;\n  ']),
    _templateObject4 = taggedTemplateLiteralLoose(['\n    justify-content: flex-end;\n  '], ['\n    justify-content: flex-end;\n  ']),
    _templateObject5 = taggedTemplateLiteralLoose(['\n    align-items: flex-start;\n  '], ['\n    align-items: flex-start;\n  ']),
    _templateObject6 = taggedTemplateLiteralLoose(['\n    align-items: center;\n  '], ['\n    align-items: center;\n  ']),
    _templateObject7 = taggedTemplateLiteralLoose(['\n    align-items: flex-end;\n  '], ['\n    align-items: flex-end;\n  ']),
    _templateObject8 = taggedTemplateLiteralLoose(['\n    justify-content: space-around;\n  '], ['\n    justify-content: space-around;\n  ']),
    _templateObject9 = taggedTemplateLiteralLoose(['\n    justify-content: space-between;\n  '], ['\n    justify-content: space-between;\n  ']),
    _templateObject10 = taggedTemplateLiteralLoose(['\n    order: -1;\n  '], ['\n    order: -1;\n  ']),
    _templateObject11 = taggedTemplateLiteralLoose(['\n    order: 1;\n  '], ['\n    order: 1;\n  ']);

var ModificatorType = PropTypes.oneOf(DIMENSION_NAMES);

var Row = styled.div(_templateObject$2, function (p) {
  return p.reverse && '\n    flex-direction: row-reverse;\n  ';
}, function (p) {
  return p.start && config(p).media[p.start](_templateObject2$1);
}, function (p) {
  return p.center && config(p).media[p.center](_templateObject3$1);
}, function (p) {
  return p.end && config(p).media[p.end](_templateObject4);
}, function (p) {
  return p.top && config(p).media[p.top](_templateObject5);
}, function (p) {
  return p.middle && config(p).media[p.middle](_templateObject6);
}, function (p) {
  return p.bottom && config(p).media[p.bottom](_templateObject7);
}, function (p) {
  return p.around && config(p).media[p.around](_templateObject8);
}, function (p) {
  return p.between && config(p).media[p.between](_templateObject9);
}, function (p) {
  return p.first && config(p).media[p.first](_templateObject10);
}, function (p) {
  return p.last && config(p).media[p.last](_templateObject11);
});

Row.displayName = 'Row';

Row.propTypes = {
  reverse: PropTypes.bool,
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
  children: PropTypes.node
};

var _templateObject$3 = taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: ', 'rem;\n  padding-left: ', 'rem;\n\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: ', 'rem;\n  padding-left: ', 'rem;\n\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2$2 = taggedTemplateLiteralLoose(['', ''], ['', '']),
    _templateObject3$2 = taggedTemplateLiteralLoose(['\n        margin-left: ', '%;\n      '], ['\n        margin-left: ', '%;\n      ']);

var ModificatorType$1 = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

var offsetProps = DIMENSION_NAMES.map(function (d) {
  return d + 'Offset';
});
var DimensionPropTypes = DIMENSION_NAMES.reduce(function (propTypes, dimension) {
  propTypes[dimension] = ModificatorType$1;
  propTypes[dimension + 'Offset'] = PropTypes.number;
  return propTypes;
}, {});

var Col = styled.div(_templateObject$3, function (p) {
  return config(p).gutterWidth / 2;
}, function (p) {
  return config(p).gutterWidth / 2;
}, function (p) {
  return p.reverse && '\n    flex-direction: column-reverse;\n  ';
}, function (p) {
  return Object.keys(p).filter(function (k) {
    return ~DIMENSION_NAMES.indexOf(k);
  }).sort(function (k1, k2) {
    return DIMENSION_NAMES.indexOf(k1) - DIMENSION_NAMES.indexOf(k2);
  }).map(function (k) {
    return config(p).media[k](_templateObject2$2, isInteger(p[k])

    // Integer value
    ? '\n        flex-basis: ' + 100 / config(p).gridSize * p[k] + '%;\n        max-width: ' + 100 / config(p).gridSize * p[k] + '%;\n        display: block;\n      '
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
    return config(p).media[k.replace(/Offset$/, '')](_templateObject3$2, 100 / config(p).gridSize * p[k]);
  });
});

Col.displayName = 'Col';

Col.propTypes = _extends({}, DimensionPropTypes, {
  reverse: PropTypes.bool,
  children: PropTypes.node
});

export { Grid, Row, Col, BASE_CONF };
