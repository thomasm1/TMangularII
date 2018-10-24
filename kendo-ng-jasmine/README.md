
### '''
  "scripts": {
    "test": "jasmine"
  },
  '''
## Jasmine testing  (testing on appTest)
## UI Router 0.4.2  
## Angular 1.5.11
#### based on http://scotch.io/tutorials/javascript/angular-routing-using-ui-router


## Jasmine testing  (testing on appTest)
## UI Router 0.4.2  
## Angular 1.5.11
#### based on http://scotch.io/tutorials/javascript/angular-routing-using-ui-router

We need to add unit testing to the Datafunnel UI.  
We should research possible frameworks and tools that can be used. 
The outcome of this will be a recomendations as to the best framework/tools to use for unit testing. We should also be able to provide a demo of a simple test being used for some existing functionality in the UI.
 
Karma (formerly testacular) browser testing for ...
Jasmine Testing Frameworks...
karma config.js
----GRUNT-------------------------------------
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  }); 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.registerTask('default', ['jshint']);

};
----JASMINE-----------------------------------
Behavioral Driven  Dev (BDD) Testing Framework --->(using Jasmine)
Given (setting up state); When (Describing action); Then (Consequences of Action)
describe("Given a string containing 'foo'", function(){
    var someString;
    beforeEach(function() {
        someString = "foo";
    });
    describe("When I append 'bar'", function(){
        beforeEach(function() {
            someString += "bar";
        });
        it("Then the string is 'foobar'", function(){
            expect(someString).toBe("foobar");
        });
    });
    it("When I append 'baz' Then the string is 'foobaz'", function(){
        someString += "baz";
        expect(someString).toBe("foobaz");
    });
});
-------------KARM----------------------
npm install -g karma-cli
npm install karma-jasmine karma-chrome-launcher --save-dev
npm install karma-phantomjs-launcher --save-dev ## headless browser
karma init
karma start
karma start karma.conf.js
PACKAGE.JSON -->
		"test": "./node_modules/karma/bin/karma start karma.conf.js
		