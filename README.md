# karma-puppeteer-launcher

A karma launcher for puppeteer. 

The goal here is go have a launcher that makes the instance of the puppeteer Page,
or at least a set of Page functions, visible to the tests. In particular, I want 
to be able to run mocha tests that mount React components with enzyme, do some stuff,
then take a screenshot.

My first try was a riff on karma-nightwatch, which launches puppeteer in a new process by
executing `node browser.js`, but that didn't work.

This attempt tried to use Page.exposeFunction to expose Page.screenshot, but the Promise
returned by exposeFunction never resolved.

Pushing so I don't lose the work. Hope to get back to it someday soon.
