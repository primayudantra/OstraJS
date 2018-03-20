console.time(`start_app`);

require('babel-register')({ presets: [ 'es2015' ]});
require('babel-polyfill');
require('babel-register');
require('./server');

console.timeEnd('start_app')
