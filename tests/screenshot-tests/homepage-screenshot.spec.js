// tests/screenshot-tests/homepage-screenshot.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Visual Regression Tests', () => {
  test('homepage snapshot', async ({ page }) => {
    await page.goto('/');
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');
  });

  test('about page snapshot', async ({ page }) => {
    await page.goto('/about');
    expect(await page.screenshot()).toMatchSnapshot('about-page.png');
  });
});
