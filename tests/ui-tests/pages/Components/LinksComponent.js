// tests/ui-tests/pages/Components/LinksComponent.js
import { BaseComponent } from './BaseComponent.js';

export class LinksComponent extends BaseComponent {
  constructor(page) {
    super(page);
    // Locators for the Links component
    this.links = page.locator('.links-component a');
  }

  async clickLink(linkText) {
    await this.links.filter({ hasText: linkText }).click();
  }
}
