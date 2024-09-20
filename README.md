Playwright Framework Project
============================

# Target

Creating a robust Playwright testing framework that meets your requirements involves several steps. Below is a comprehensive guide to help you set up a framework that can:

- Test UI locators and assert elements are present.
- Perform screenshot testing of all stable pages.
- Support multiple environments like Staging, Integration, and UAT with different URLs.

## 1. **Project Setup**

First, initialize a new Node.js project and install Playwright:

```bash
mkdir playwright-testing-framework
cd playwright-testing-framework
npm init -y
npm install @playwright/test

```

## 2. **Directory Structure**

Organise your project directories for clarity:

```
playwright-testing-framework/
├── tests/
│   ├── ui-tests/
│   ├── screenshot-tests/
├── configs/
│   ├── staging.json
│   ├── integration.json
│   └── uat.json
├── playwright.config.js
├── package.json
└── README.md

```

## 3. **Environment Configuration**

### **Using Configuration Files**

Create JSON files in the `configs/` directory for each environment:

- **configs/staging.json**
    
    ```json
    {
      "baseURL": "<https://staging.example.com>",
      "apiEndpoint": "<https://api.staging.example.com>"
    }
    
    ```
    
- **configs/integration.json**
    
    ```json
    {
      "baseURL": "<https://integration.example.com>",
      "apiEndpoint": "<https://api.integration.example.com>"
    }
    
    ```
    
- **configs/uat.json**
    
    ```json
    {
      "baseURL": "<https://uat.example.com>",
      "apiEndpoint": "<https://api.uat.example.com>"
    }
    
    ```
    

### **playwright.config.js**

Configure Playwright to read these configurations based on an environment variable:

```jsx
// playwright.config.js
const { devices } = require('@playwright/test');
const fs = require('fs');

const ENV = process.env.TEST_ENV || 'staging'; // Default to staging
const configData = JSON.parse(fs.readFileSync(`./configs/${ENV}.json`, 'utf-8'));

module.exports = {
  use: {
    baseURL: configData.baseURL,
    // Additional shared settings
  },
  projects: [
    // Define projects if needed
  ],
  // Other configurations
};

```

## 4. **Testing UI Locators and Assertions**

Create tests in the `tests/ui-tests/` directory.

### **Example Test**

```jsx
// tests/ui-tests/homepage.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests', () => {
  test('should display the main banner', async ({ page }) => {
    await page.goto('/');
    const banner = await page.locator('#main-banner');
    await expect(banner).toBeVisible();
  });

  test('should have a working navigation menu', async ({ page }) => {
    await page.goto('/');
    const menu = await page.locator('.nav-menu');
    await expect(menu).toHaveCount(5); // Assuming there are 5 menu items
  });
});

```

## 5. **Screenshot Testing**

Implement visual regression tests in the `tests/screenshot-tests/` directory.

### **Setting Up Baseline Screenshots**

Run the following command to capture baseline screenshots:

```bash
npx playwright test --config=playwright.config.js --update-snapshots

```

### **Example Screenshot Test**

```jsx
// tests/screenshot-tests/page-visual.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Visual Regression Tests', () => {
  test('homepage snapshot', async ({ page }) => {
    await page.goto('/');
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');
  });

  test('about page snapshot', async ({ page }) => {
    await page.goto('/about');
    expect(await page.screenshot()).toMatchSnapshot('about-page.png');
  });
});

```

## 6. **Running Tests in Multiple Environments**

Use the `TEST_ENV` environment variable to specify which environment to test against.

### **Command Examples**

- **Staging Environment**
    
    ```bash
    TEST_ENV=staging npx playwright test
    
    ```
    
- **Integration Environment**
    
    ```bash
    TEST_ENV=integration npx playwright test
    
    ```
    
- **UAT Environment**
    
    ```bash
    TEST_ENV=uat npx playwright test
    
    ```
    

## 7. **Continuous Integration**

Integrate your tests into a CI/CD pipeline. Here's an example using GitHub Actions:

```yaml
# .github/workflows/playwright-tests.yml
name: Playwright Tests

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        environment: [ staging, integration, uat ]
    steps:
      - uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm install
      - name: Run Playwright Tests
        env:
          TEST_ENV: ${{ matrix.environment }}
        run: npx playwright test

```

## 8. **Best Practices**

- **Custom Test Fixtures**: Use Playwright's fixtures to set up common test scenarios.
    
    ```jsx
    // tests/helpers/test-fixtures.js
    const { test as base } = require('@playwright/test');
    
    exports.test = base.extend({
      // Define fixtures here
    });
    
    ```
    
- **Error Handling**: Implement robust error handling and logging mechanisms.
- **Modular Code**: Keep your tests modular to enhance maintainability.
- **Selectors Strategy**: Use stable selectors like data attributes (e.g., `data-testid`) to reduce flaky tests.

## 9. **Additional Tools**

- **Reporting**: Use Playwright's built-in HTML reporter or integrate with third-party tools.
    
    ```bash
    npx playwright test --reporter=html
    
    ```
    
- **Visual Comparison Tools**: For more advanced screenshot comparisons, consider integrating tools like [Applitools](https://applitools.com/) or [Percy](https://percy.io/).

## 10. **Example Repository**

For a complete example, you can refer to [Playwright's official example projects](https://github.com/microsoft/playwright/tree/main/examples).

---

By following this guide, you'll set up a flexible and powerful Playwright testing framework that meets all your specified requirements. This framework will help ensure the reliability and visual consistency of your application across multiple environments.

---