// Tests for the calculator.
exports.config = {
  directConnect: true,

  framework: 'jasmine2',

  specs: [
    'spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },
};

if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
}
