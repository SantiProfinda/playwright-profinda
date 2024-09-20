// tests/ui-tests/pages/CreateActivityPages/AuditEngagementCreationPage.js
import { BaseActivityCreationPage } from './BaseActivityCreationPage.js';

export class AuditEngagementCreationPage extends BaseActivityCreationPage {
  constructor(page) {
    super(page);
    // Locators specific to AuditEngagement Creation Page
  }

  async navigate() {
    await this.goto('/activities/audit_engagement/new');
  }

  // Additional methods specific to AuditEngagement Creation
}
