const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.cypress.io/',
    specPattern: 'cypress/plotly/tests/*.spec.js',
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  env: {
    accentColor1: 'rgb(73, 86, 227)',
    accentColor2: 'rgb(163, 231, 203)',
  },
  watchForFileChanges: false,
  projectId: 'rimkz6',
  retries: {
    runMode: 3,
    openMode: 2,
  },
});
