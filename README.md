# cypress-demo

### How do I get set up? ###
* Configuration
- Install Dependencies (see dependencies section below)
- Via the terminal navigate to the root folder and run "npm install"
- Each seperate front end project is represented in it's own folder under the root cypress folder e.g. *plotly*, it can also have it's own cypress configuration files (e.g. cypress.json).

* Dependencies
    * Node.js v21.5.0 [LINK](https://nodejs.org/en/)

How to run tests:
* Step 1:
    * Run `npm install` from the root folder
  * Step 2:
    * Run plotly tests: (Note: The default viewport is 1920x1080)
        // TODO


#### Clean code practices
Page object classes MUST have PascalCase
All variables, methods, functions MUST be camelCase
All Global Variables and DB methods MUST be UPPERCASE (WITH SNAKE_CASE)
All cypress aliases MUST be snake_case
