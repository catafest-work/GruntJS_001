const sass = require('node-sass');
module.exports = function(grunt)
{
  // configuration
 grunt.initConfig({
    // pass in options for plugins, references to files, etc.
    // use this: 'src: ['js/jquery-3.7.0.min.js','js/scripts.js'] '
    // or like this: 'src: ['js/*.js'] '
    // then run commands like this: grunt concat
    concat: {
      js: {
        src:['js/*.js'],
        dest: 'build/scripts.js'
      },
      css: {
        src:['css/*.css'],
        dest: 'build/styles.css'
      }
    },      
    sass: { 
      options: {
        implementation: require('sass'), // Specify the Sass compiler implementation
        sourceMap: true // Enable source maps if needed
      },
      build: {
        files: [{
          src: 'css/sass/styles.scss',
          dest: 'css/styles.css'
        }]
      } 
    }
});

  // load plugins
  //grunt.loadNpmTasks('');

  // load plugins grunt-contrib-concat
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');

  // register tasks for concat plugin
  grunt.registerTask('concat-js', ['concat:js']);
  grunt.registerTask('concat-css', ['concat:css']);
  grunt.registerTask('default', ['sass']);
  
  // register tasks examples
  // grunt.registerTask('run', function(){
  //   console.log('I am running ...');
  // });
  
  // grunt.registerTask('sleep', function(){
  //   console.log('I am sleeping ...');
  // });

  // grunt.registerTask('all', ['sleep', 'run']);
  
};