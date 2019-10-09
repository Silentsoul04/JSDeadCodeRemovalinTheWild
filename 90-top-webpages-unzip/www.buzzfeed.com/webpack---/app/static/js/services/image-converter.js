import util from '@buzzfeed/buzzblocks/js/services/util';

/**
 * Defaults and methods for generating image urls using Akamai Image Converter service.
 * @exports service:image-converter
 */
var converter = {};

// config value defaults (for calculation)
var _default = {
  'span': '1',
  'width': '720',
};
// Default params (canonical for IC server, see IC documentation)
var _params = {
  // Modernizr.webp is an object, valueOf() is required.
  'output-format': 'auto',
  'output-quality': 'auto',
};

//-----------------------------------------------------------
// Public
//-----------------------------------------------------------

/**
 * constructs a complete image url with
 * @param  {String} url - base url string of original image consisting of host and uri
 * @param  {Object} config - object containing configuration for cropping and sizing
 * @returns {String} - constructed URL string with image conversion params
 */
converter.generate = function(url, config) {
  config = util.extend({}, _default, config); //extend default config

  var params = util.extend({}, _params, { // calculate new params and extend default params
    crop: config.crop,
    resize: config.resize,
    fit: config.fit,
    fill: config.fill,
    downsize: config.downsize,

  });

  //JS doesn't like the dash -
  if (config.quality) {
    params['output-quality'] = config.quality;
  }
  if (config.fit) {
    params.fit = config.fit;
  }
  if (config.fit) {
    params.fit = config.fit;
  }

  if (typeof url === 'undefined') {
    return false;
  }

  url += '?';
  url += util.getKeys(params)
    .filter(k => params[k] !== null && params[k] !== '' && typeof params[k] !== 'undefined')
    .map(k => k + '=' + params[k])
    .join('&');

  return url;
};

export default converter;
