import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,

  e2e: {
    baseUrl: 'http://localhost:19006',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
