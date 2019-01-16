require('dotenv').load();

exports.config = {
  seleniumAddress: process.env.SERVER,
  specs: ['specs/test.js'],
  jasmineNodeOpts: {
  defaultTimeoutInterval: 2500000
  },
  //Un comment belwo code to run on headless browser
 /*capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  }*/
};
