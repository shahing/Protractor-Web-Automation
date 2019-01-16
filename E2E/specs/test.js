var sleep_time = process.env.SLEEP;
var url = process.env.URL;

describe('Launch PayPal', function () {
  var width = 1600;
  var height = 875;
  browser.driver.manage().window().setSize(width, height);
  it('should login PayPal succesfully', function () {
    browser.ignoreSynchronization = true;
    browser.get(url);

    element(by.id('ul-btn')).click();
    browser.sleep(sleep_time*10);
    element(by.id('email')).sendKeys('abc@gmail.com')
    browser.sleep(sleep_time*10);
    expect(browser.getCurrentUrl()).toEqual(url + '/in/signin');
  });
});
