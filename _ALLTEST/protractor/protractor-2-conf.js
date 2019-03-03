exports.config = {
// address of running selenium server
seleniumAddress: 'http://localhost:4444/tm/hub',

// capabilities to be passed to webdriver instance.
capabilities: {
  'browserName': 'chrome'
},

// spec patterns are relative to current working dirctly when 
// protractor is called
specs: ['search-box-spec.js'],

// options to be passed to Jasmine-node
jasmineNodeOpts: {
  showColors: true,
  defaultTimeoutInterval: 30000
  }
};
