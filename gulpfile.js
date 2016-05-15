// NOTE: I previously suggested doing this through Grunt, but had plenty of problems with
// my set up. Grunt did some weird things with scope, and I ended up using nodemon. This
// setup is now using Gulp. It works exactly how I expect it to and is WAY more concise.
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect');

// /**
//  * $ gulp server
//  * description: launch the server. If there's a server already running, kill it.
//  */
// gulp.task('server', ['webserver'], function() {
//   if (node) node.kill()
//   node = spawn('node', ['./host/server.js'], {
//     stdio: 'inherit'
//   })
//   node.on('close', function(code) {
//     if (code === 8) {
//       gulp.log('Error detected, waiting for changes...');
//     }
//   });
// })


gulp.task('webserver', function() {
  connect.server({
      root: '',
      livereload: false
    });
});

gulp.task('start', function () {
  nodemon({
    script: 'host/server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

/**
 * $ gulp
 * description: start the development environment
 */
gulp.task('default',['start', 'webserver'], function() {

  // Need to watch for sass changes too? Just add another watch call!
  // no more messing around with grunt-concurrent or the like. Gulp is
  // async by default.
})

// clean up if an error goes unhandled.
process.on('exit', function() {
  if (node) node.kill()
})
