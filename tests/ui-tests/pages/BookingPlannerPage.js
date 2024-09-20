// tests/ui-tests/pages/BookingPlannerPage.js
import { BasePage } from './BasePage.js';

export class BookingPlannerPage extends BasePage {
  constructor(page) {
    super(page);
    // Locators specific to the Analytics page
    this.bookingPlannerHeader = page.locator('h1', { hasText: 'Booking Planner' });
  }

  async navigate() {
    await this.goto('/booking/overview');
  }

  async isAnalyticsHeaderVisible() {
    return await this.bookingPlannerHeader.isVisible();
  }
}
