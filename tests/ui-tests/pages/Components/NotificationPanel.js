// tests/ui-tests/pages/Components/NotificationPanel.js
import { BaseComponent } from './BaseComponent.js';

export class NotificationPanel extends BaseComponent {
  constructor(page) {
    super(page);
    // Locators for the Notification Panel
    this.notificationIcon = page.locator('#notification-icon');
    this.notificationList = page.locator('#notification-list');
  }

  async openNotifications() {
    await this.notificationIcon.click();
  }

  async isNotificationVisible(notificationText) {
    return await this.notificationList.locator('li', { hasText: notificationText }).isVisible();
  }
}
