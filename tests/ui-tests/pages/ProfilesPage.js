// tests/ui-tests/pages/ProfilesPage.js
import { BasePage } from './BasePage.js';

export class ProfilesPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators specific to the Analytics page
    this.profilesPageHeader = page.locator('h1', { hasText: 'Profiles' });
  }

  async navigate() {
    await this.goto('/profiles');
  }

  async isProfilesPageHeader() {
    return await this.profilesPageHeader.isVisible();
  }
}
