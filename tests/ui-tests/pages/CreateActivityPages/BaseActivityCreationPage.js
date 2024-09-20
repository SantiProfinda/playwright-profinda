// tests/ui-tests/pages/CreateActivityPages/BaseActivityCreationPage.js
import { BasePage } from '../BasePage.js';

export class BaseActivityCreationPage extends BasePage {
  constructor(page) {
    super(page);
    // Common locators for activity creation
    this.titleInput = page.locator('#title');
    this.descriptionInput = page.locator('#description');
    this.submitButton = page.locator('#submit');
  }

  async fillTitle(title) {
    await this.titleInput.fill(title);
  }

  async fillDescription(description) {
    await this.descriptionInput.fill(description);
  }

  async submit() {
    await this.submitButton.click();
  }
}
