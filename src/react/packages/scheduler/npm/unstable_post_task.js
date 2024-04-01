'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/scheduler-unstable_post_task.production.min.js.js.js');
} else {
  module.exports = require('./cjs/scheduler-unstable_post_task.development.js.js.js');
}
