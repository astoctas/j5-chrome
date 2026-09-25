const path = require('path');

const noop = path.resolve(__dirname, 'src/noop');
const mode = process.env.BUILD_MODE || 'development';

module.exports = {
  entry: {
    "turbowarp": "./src/turbowarp.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: mode === 'development' ? 'turbowarp_j5.js' : 'turbowarp_j5.min.js'
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
