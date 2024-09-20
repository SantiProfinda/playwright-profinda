// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

const ENV = process.env.TEST_ENV || 'staging'; // Default to staging

const configData = await import(`./configs/${ENV}.json`, {
  assert: { type: 'json' },
});

export default defineConfig({
  use: {
    baseURL: configData.default.baseURL,
    // Additional shared settings
  },
  projects: [
    // Define projects if needed
  ],
  // Other configurations
});
