const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.cypress.io/',
    specPattern: 'cypress/plotly/tests/*.spec.js',
    viewportHeight: 1080,
    viewportWidth: 1920,
  },

  projectId: 'rimkz6',
});
