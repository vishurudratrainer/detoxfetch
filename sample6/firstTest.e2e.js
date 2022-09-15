/* eslint-disable no-undef */
const express = require('express');
let server;
describe('Example', () => {
  beforeAll(async () => {
    const app = express();
    app.get("/hello", (req, res) =>{ console.log('here'); return res.json({ success: true })});


    await new Promise(function(resolve) {
        server = app.listen(3000, "127.0.0.1", function() {
            console.log(` Running server on '${JSON.stringify(server.address())}'...`);
            resolve();
        });
    });
    await detox.device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  afterAll(() => {
    server.close()
})
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
  it('click button visible', async () => {
    await expect(element(by.id('click'))).toBeVisible();
  });
  it('click button click', async () => {
    await expect(element(by.id('click'))).toBeVisible();

    await element(by.id('click')).tap();
    await expect(element(by.id('email'))).toHaveText('true');
  });

  it('Enter name test ', async () => {
    await expect(element(by.id('entername'))).toBeVisible();
    await element(by.id('entername')).typeText('Raj');
    await expect(element(by.id('enteredname'))).toHaveText('Raj');
  });
});
