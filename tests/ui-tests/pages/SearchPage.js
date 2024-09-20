// tests/ui-tests/pages/SearchPage.js
import { BasePage } from './BasePage.js';

export class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators specific to the Search page
    this.searchInput = page.locator('#search-input');
    this.searchButton = page.locator('#search-button');
  }

  async navigate() {
    await this.goto('/search');
  }

  async searchFor(query) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }
}
