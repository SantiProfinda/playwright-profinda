// tests/ui-tests/tests/engagementCreation.spec.js
import { test, expect } from '@playwright/test';
import { EngagementCreationPage } from '../pages/CreateActivityPages/EngagementCreationPage.js';

test.describe('Engagement Creation Tests', () => {
  test('Create a new engagement', async ({ page }) => {
    const engagementPage = new EngagementCreationPage(page);
    await engagementPage.navigate();
    await engagementPage.fillTitle('Test Engagement');
    await engagementPage.fillDescription('This is a test engagement.');
    await engagementPage.submit();

    // Add assertions to verify the engagement was created
    // For example, check for a success message or redirection
  });
});
