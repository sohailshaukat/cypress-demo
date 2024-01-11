# cypress-demo

### How do I get set up? ###
* Configuration
  - Install Dependencies (see dependencies section below)
  - Via the terminal navigate to the root folder and run "npm install"
  - Each seperate front end project is represented in it's own folder under the root cypress folder e.g. `.../cypress/plotly/`, it can also have it's own cypress configuration files (e.g. cypress.json).

* Dependencies
    * Node.js v21.5.0 [LINK](https://nodejs.org/en/)

* How to run tests:
  * Step 1:
    * Run `npm install` from the root folder
  * Step 2:
    * Run plotly tests: (Note: The default viewport is 1920x1080) 
      * HEADLESS
        * On Electron browser: `npm run cy:run`
        * On Chrome: `npm run cy:chrome`
        * On Firefox: `npm run cy:firefox`
        * With Cypress Dashboard ()
          * add `:record` to the above scripts. For e.g.,
            *`npm run cy:firefox:record`
      * HEADED
        * On Electron browser: `npm run cy:run:headed`
        * On Chrome: `npm run cy:chrome:headed`
        * On Firefox: `npm run cy:firefox:headed`
        * With Cypress Dashboard ()
          * add `:record` to the above scripts. For e.g.,
            *`npm run cy:chrome:headed:record`
    * Note: For executions with Cypress Dashboard Record enabled, export the CYPRESS_RECORD_KEY as environment variable instead of passing it in package.json.
      - For Linux Systems: `export CYPRESS_RECORD_KEY=<KEY>`


### Contribution guidelines ###
* Writing tests
  * Every test must be self contained, meaning it can be run on its own (excluding setups / teardowns). Test should NEVER rely on data or steps from another test.
  * Test must pass 90% of the time in order to be commited; that is if the test is run 10 times in a row it must pass at least 9 times.
  * Any additional dependencies to the project must be vetted by the automation team before being committed.

* Code review
  * Your first code review should be done via a meeting with someone from the Automation team, this is to make it much less likely that you will need to perform multiple commits to fix any issues
  * There must be NO reported errors from ESlint or Prettier before you commit your code. e.g. JSON data should be stored in JSON files.
  * 90% Pass rate

* Other guidelines
  * Follow DRY principles in your code
  * Page object classes MUST have PascalCase
  * All variables, methods, functions MUST be camelCase
  * All Global Variables and DB methods MUST be UPPERCASE (WITH SNAKE_CASE)
  * All cypress aliases MUST be snake_case


## Bonus Section
- Github Actions Integration
  - Runs test on Firefox, Chrome, Electron (default browser)
  - Secrets/Credentials Check
  - Dependency Check
- CircleCI Inregration
  - Runs test on Firefox, Chrome, iPhoneX.
- Cypress Dashboard Integration
  - Gets results from CircleCI, GitHub Actions and Local (when `--record` or `:record` is provided)
- Slack Integration
  - Notifies of execution results that are sent to Cypress Dashboard (all mentioned in above point).
- Linter / Code Formatter
  - ESLint - Linter
  - Prettier - Code Formatter
