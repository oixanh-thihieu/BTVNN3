const { defineConfig } = require('cypress')
//bai4
module.exports = defineConfig({
  e2e: {
    retries: {
      runMode: 2,   // CI retry 2 lần
      openMode: 1   // local retry 1 lần
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here (nếu cần)
    }
  }
})
