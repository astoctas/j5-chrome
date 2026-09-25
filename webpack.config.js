const path = require('path');

const noop = path.resolve(__dirname, 'src/noop');
const mode = process.env.BUILD_MODE || 'development';

module.exports = {
  entry: {
    "j5": "./src/j5.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: mode === 'development' ? 'j5.js' : 'j5.min.js'
  },
  mode,
  resolve: {
    alias: {
      fs: noop,
      serialport: noop,
      bindings: noop,
      repl: noop,
      ws: noop,
      noble: noop
    }
  },
};