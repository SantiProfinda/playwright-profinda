// tests/ui-tests/pages/CreateActivityPages/PositionCreationPage.js
import { BaseActivityCreationPage } from './BaseActivityCreationPage.js';

export class PositionCreationPage extends BaseActivityCreationPage {
  constructor(page) {
    super(page);
    // Locators specific to Position Creation Page
  }

  async navigate() {
    await this.goto('/activities/position/new');
  }

  // Additional methods specific to Position Creation
}
