const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  video: true,
  trashAssetsBeforeRuns: true,

  e2e: {
    baseUrl: 'https://serverest.dev/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
