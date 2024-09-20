// tests/ui-tests/tests/authenticatedTest.spec.js
import { test, expect } from '../fixtures/ui-auth.js';
import { HomePage } from '../pages/HomePage.js';

test('Authenticated user can access home page', async ({ loggedInPage }) => {
  const homePage = new HomePage(loggedInPage);
  await homePage.navigate();
  expect(await homePage.isBannerVisible()).toBeTruthy();
});

