// tests/ui-tests/pages/ActivityFeedPage.js
import { BasePage } from './BasePage.js';

export class ActivityFeedPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators specific to the Analytics page
    this.activityFeedHeader = page.locator('h1', { hasText: 'Activity Feed' });
  }

  async navigate() {
    await this.goto('/feed/all_activities');
  }

  async isActivityFeedHeaderVisible() {
    return await this.activityFeedHeader.isVisible();
  }
}
