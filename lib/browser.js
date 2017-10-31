/*
** Create a puppeteer browser instance and launch it on the desired page
*/
const options = JSON.parse(process.argv[3]);
const puppeteer = require('puppeteer');

const fs = require('fs')
fs.writeFile('/tmp/puppet.out', 'here we go\n')

async function go () {
  fs.appendFileSync('/tmp/puppet.out', 'go\n')
  const browser = await puppeteer.launch(options);
  fs.appendFileSync('/tmp/puppet.out', 'got browser\n')
  const page = await browser.newPage();
  fs.appendFileSync('/tmp/puppet.out', 'got page\n')
  await page.goto(process.argv[2]);
  fs.appendFileSync('/tmp/puppet.out', 'gone\n')
  // const ppp = await page.$eval('body', () => {return body.tagName})
  // fs.appendFileSync('/tmp/puppet.out', `evald. ${pppr}\n`)
}
go();
