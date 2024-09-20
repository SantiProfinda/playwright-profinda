// tests/ui-tests/tests/homepage.spec.js
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test.describe('Home Page Tests', () => {
  test('Home page loads and displays banner', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    expect(await homePage.isBannerVisible()).toBeTruthy();
  });
});
