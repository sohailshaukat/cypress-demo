const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.cypress.io/',
    specPattern: 'cypress/plotly/tests/*.spec.js',
  },

  projectId: 'rimkz6',
});
