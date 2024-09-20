// tests/ui-tests/pages/HomePage.js
import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    // Locators specific to the home page
    this.banner = page.locator('#main-banner');
  }

  async navigate() {
    await this.goto('/');
  }

  async isBannerVisible() {
    return await this.banner.isVisible();
  }
}
