const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Map environment variables from Github Actions to Cypress env
      config.env.standardUsername = process.env.STANDARD_USERNAME || config.env.standardUsername
      config.env.lockedoutUsername = process.env.LOCKEDOUT_USERNAME || config.env.lockedoutUsername
      config.env.password = process.env.PASSWORD || config.env.password
      return config
    },
    screenshotOnRunFailure: true,
    video: true,
    videoOnFailOnly: true,
    baseUrl: 'https://www.saucedemo.com'
  },
});
