// tests/ui-tests/pages/CreateActivityPages/ProjectCreationPage.js
import { BaseActivityCreationPage } from './BaseActivityCreationPage.js';

export class ProjectCreationPage extends BaseActivityCreationPage {
  constructor(page) {
    super(page);
    // Locators specific to Project Creation Page
  }

  async navigate() {
    await this.goto('/activities/project/new');
  }

  // Additional methods specific to Project Creation
}
