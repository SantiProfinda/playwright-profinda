// tests/ui-tests/pages/Components/BaseComponent.js
export class BaseComponent {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }
}

