// tests/ui-tests/pages/AnalyticsPage.js
import { BasePage } from './BasePage.js';

export class AnalyticsPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators specific to the Analytics page
    this.analyticsHeader = page.locator('h1', { hasText: 'Analytics' });
  }

  async navigate() {
    await this.goto('/analytics');
  }

  async isAnalyticsHeaderVisible() {
    return await this.analyticsHeader.isVisible();
  }
}
