// tests/ui-tests/pages/WorkflowPage.js
import { BasePage } from './BasePage.js';

export class WorkflowPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators specific to the Workflow page
    this.workflowHeader = page.locator('h1', { hasText: 'Workflow' });
  }

  async navigate() {
    await this.goto('/workflow');
  }

  async isWorkflowHeaderVisible() {
    return await this.workflowHeader.isVisible();
  }
}
