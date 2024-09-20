// tests/ui-tests/pages/BasePage.js
export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Common locators
    this.header = page.locator('header');
    this.footer = page.locator('footer');
    this.linksComponent = new LinksComponent(page);
    this.adminComponent = new AdminComponent(page);
    this.profileComponent = new ProfileComponent(page);
    this.notificationPanel = new NotificationPanel(page);
  }

  async goto(url) {
    await this.page.goto(url);
  }

  // Common methods
  async clickHeaderLink(linkText) {
    await this.header.locator(`text=${linkText}`).click();
  }
}
