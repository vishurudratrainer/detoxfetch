import { Then, Given,When } from '@cucumber/cucumber';
import { expect, element, by, waitFor } from 'detox';

Given('I should see the {string} element', async (elementId) => {
  await expect(element(by.id(elementId))).toBeVisible();
});
Then('I should see the {string} text', async (text) => {
  await expect(element(by.text(text))).toBeVisible();
});

Then('I should see the {string} data in it entername', async(data) => {
  await expect(element(by.id("entername"))).toBeVisible();
  await expect(element(by.id("entername"))).toHaveText(data);
});

When('I should enter {string} in {string} element', async (text, elementId) =>{ 
   await expect(element(by.id(elementId))).toBeVisible();
  await element(by.id(elementId)).typeText(text);
});

Then('I should see the {string} in {string}', async (text, elementId)=> {
    await expect(element(by.id(elementId))).toBeVisible();
  await expect(element(by.id(elementId))).toHaveText(text);
});



