# SauceDemo Project

## Task Description

- **Launch URL:** https://www.saucedemo.com/
- **Test Automation Tool:** WebDriverIO
- **Browsers:** Edge, Chrome
- **Locators:** CSS
- **Patterns:** Page Object
- **Assertions:** Using built-in assertion functions from Cucumber

### Test Scenarios:

1. **UC-1:** Test Login form with empty credentials.
2. **UC-2:** Test Login form by entering only the username.
3. **UC-3:** Test Login form with correct credentials.

### Installation

To install all necessary dependencies, run the following command:

```bash
npm install
```

To run the tests, execute the following command:

```bash
npm run test
```

#### Generating and Viewing Test Reports

To generate the Allure report, use the following command:

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```
