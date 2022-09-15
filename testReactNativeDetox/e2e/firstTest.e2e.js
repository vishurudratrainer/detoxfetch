/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await detox.device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('click button visible', async () => {
    await expect(element(by.id('click'))).toBeVisible();
  });
});
