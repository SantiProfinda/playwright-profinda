// tests/ui-tests/pages/AuditPlannerPage.js
import { BasePage } from './BasePage.js';

export class AuditPlannerPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators specific to the Analytics page
    this.auditPlannerHeader = page.locator('h1', { hasText: 'Analytics' });
  }

  async navigate() {
    await this.goto('/audit_planner');
  }

  async isAuditPlannerHeaderVisible() {
    return await this.auditPlannerHeader.isVisible();
  }
}
