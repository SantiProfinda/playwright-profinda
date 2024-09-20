// tests/ui-tests/pages/Components/ProfileComponent.js
import { BaseComponent } from './BaseComponent.js';

export class ProfileComponent extends BaseComponent {
  constructor(page) {
    super(page);
    // Locators for the Profile component
    this.profileAvatar = page.locator('#profile-avatar');
    this.profileDropdown = page.locator('#profile-dropdown');
  }

  async openProfileDropdown() {
    await this.profileAvatar.click();
  }

  // Additional methods
}
