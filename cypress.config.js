const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        'cypress/e2e/UserLogin.cy.js', 
        'cypress/e2e/GetUserList.cy.js',
        'cypress/e2e/CreateUser.cy.js',
        'cypress/e2e/DeleteUser.cy.js'
      ]
      return config;
    },
  },
});
