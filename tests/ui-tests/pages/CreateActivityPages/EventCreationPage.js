// tests/ui-tests/pages/CreateActivityPages/EventCreationPage.js
import { BaseActivityCreationPage } from './BaseActivityCreationPage.js';

export class EventCreationPage extends BaseActivityCreationPage {
  constructor(page) {
    super(page);
    // Locators specific to Event Creation Page
  }

  async navigate() {
    await this.goto('/activities/event/new');
  }

  // Additional methods specific to Event Creation
}
