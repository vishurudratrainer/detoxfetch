/* eslint-disable no-undef */
const express = require('express');
let server;
describe('Example', () => {
  beforeAll(async () => {
    await detox.device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  afterAll(() => {
    })
  it('scroll till visible', async () => {
    await waitFor(element(by.text('Sample7'))).toBeVisible().whileElement(by.id('scrollView')).scroll(50, 'down');
  });
  
});
