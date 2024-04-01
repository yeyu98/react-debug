'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-fetch.browser.production.min.js.js.js');
} else {
  module.exports = require('./cjs/react-fetch.browser.development.js.js.js');
}
