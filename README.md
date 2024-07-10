# AntinoVoiroTaskQA

# Cypress Automation Project Voiro
**Table of Contents**
Introduction
Project Structure
Prerequisites
Installation
Configuration
Running Tests
Reporting

**Introduction**
This project contains the execution of the test case of the create report and framework structure.

**Project Structure**
Cypress-API-Web-Automation/
├── cypress/
│   ├── downloads/         # Directory for downloaded files during tests
│   ├── e2e/               # End-to-end test files
│       ├── createReport.cy.js
│       ├── login.cy.js
│   ├── fixtures/          # Test data files
│       ├── createReportData.json
│   ├── POM/               # Page Object Model files
│       ├── createReportPage.js
│   ├── support/           # Support utilities and custom commands
│       ├── commands.js
│       ├── e2e.js
├── node_modules/          # Node.js modules
├── cypress.config.js      # Cypress configuration file
├── package.json           # Node dependencies and scripts
├── package-lock.json      # Dependency lock file
├── README.md              # Project documentation

**Prerequisites**
Node.js (>=14.x)
npm (>=6.x) or yarn (>=1.x)

**Installation**
Installing Cypress
npm install cypress --save-dev

Cloning repository 
git clone https://github.com/your-username/Cypress-API-Web-Automation.git

cd Cypress-API-Web-Automation

**Configuration**
Configuration settings for Cypress are in the cypress.json file. You can modify this file to change base URL, viewport settings, and other options
{
  "baseUrl": "https://example.com](https://demo.voiro.com/",
}

**Running Tests**
npm run cypress:open      - headed mode
npm run cypress:run       - headless mode

**Reporting**
install cypress-mochawesome-reporter

npm i --save-dev cypress-mochawesome-reporter

Change cypress reporter & setup hooks

Edit config file (cypress.config.js by default)

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
If you are override before:run or after:run hooks, use this:
  },
});
Add to cypress/support/e2e.js

import 'cypress-mochawesome-reporter/register';

1.After running the test scripts you will be able to see the report in the report folder
2.file name- index.html
3.To view report- copy the file path and paste it on the browser.
4.Also you will able to see the screenshots of the failed testcases.

