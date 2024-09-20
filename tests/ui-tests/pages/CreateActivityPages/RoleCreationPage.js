// tests/ui-tests/pages/CreateActivityPages/RoleCreationPage.js
import { BaseActivityCreationPage } from './BaseActivityCreationPage.js';

export class RoleCreationPage extends BaseActivityCreationPage {
  constructor(page) {
    super(page);
    // Locators specific to Role Creation Page
  }

  async navigate() {
    await this.goto('/activities/role/new');
  }

  // Additional methods specific to Role Creation
}
