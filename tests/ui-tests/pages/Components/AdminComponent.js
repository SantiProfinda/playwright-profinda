// tests/ui-tests/pages/Components/AdminComponent.js
import { BaseComponent } from './BaseComponent.js';

export class AdminComponent extends BaseComponent {
  constructor(page) {
    super(page);
    // Locators for the Admin component
    this.adminMenu = page.locator('#admin-menu');
  }

  async openAdminMenu() {
    await this.adminMenu.click();
  }

  // Additional methods
}
