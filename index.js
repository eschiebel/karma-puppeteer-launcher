const puppeteer = require('puppeteer');

var PuppeteerBrowser = function (baseBrowserDecorator, args, config) {
  const options = config.puppeteerOptions || {};
  let browser;
  baseBrowserDecorator(this);
  this._start = async function (url) {
    browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.on('console', msg => console.log('LOG>', msg.text));
    await page.exposeFunction('echo', function(text) {
      console.log('>>> inside echo', text)
      throw text;
    });

    await page.goto(url);
    this.on('kill', async function (done) {
      browser.close()
      done();
    })
  }
}

PuppeteerBrowser.prototype = {
  name: 'Puppeteer',
}

PuppeteerBrowser.$inject = ['baseBrowserDecorator', 'args', 'config']

module.exports = {
  'launcher:Puppeteer': ['type', PuppeteerBrowser]
}
