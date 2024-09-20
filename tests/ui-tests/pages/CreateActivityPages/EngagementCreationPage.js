// tests/ui-tests/pages/CreateActivityPages/EngagementCreationPage.js
import { BaseActivityCreationPage } from './BaseActivityCreationPage.js';

export class EngagementCreationPage extends BaseActivityCreationPage {
  constructor(page) {
    super(page);
    // Locators specific to Engagement Creation Page
  }

  async navigate() {
    await this.goto('/activities/engagement/new');
  }

  // Additional methods specific to Engagement Creation
}
