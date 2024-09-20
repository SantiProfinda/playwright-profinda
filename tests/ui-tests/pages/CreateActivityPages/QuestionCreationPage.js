// tests/ui-tests/pages/CreateActivityPages/QuestionCreationPage.js
import { BaseActivityCreationPage } from './BaseActivityCreationPage.js';

export class QuestionCreationPage extends BaseActivityCreationPage {
  constructor(page) {
    super(page);
    // Locators specific to Question Creation Page
  }

  async navigate() {
    await this.goto('/activities/question/new');
  }

  // Additional methods specific to Question Creation
}
