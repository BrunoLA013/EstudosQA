const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '57tk5f',
  e2e: {

    baseUrl: 'https://alura-fotos.herokuapp.com/#/home',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reporterDir: "cypress/report/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "ddmmyyyy_HHMMss",

  }
});
