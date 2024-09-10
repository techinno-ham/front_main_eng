import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Base URL for your application
    baseUrl: 'http://localhost:3000', // Change this to match your application's URL

    // Define the directory where your integration tests are located
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,

    // Setup Node event listeners
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },

    // Other optional settings
    // Enable or disable screenshots on test failure
    screenshotOnRunFailure: true,

    // Set the default timeout for requests
    defaultCommandTimeout: 10000, // 10 seconds

    // Add environment variables
    env: {
      apiUrl: 'http://api.example.com', // Example environment variable
    },
  },
});
