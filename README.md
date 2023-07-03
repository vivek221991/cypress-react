# cypress-react

test React applications using Cypress
cypress is an easy to use tool, setting up Cypress for react applications quicker and easier.

Pre-requisites:

Download and Install NodeJS
Download and Install VSCode (Optional and Recommended)
npm install
Step 1:Use the below command to create package.json
 npm init
Step 2: Install Cypress
npm install cypress --save-dev
Step 3:
 npx cypress open
Configuring Cypress
choose test type E2E
review configuration file and click continue
choose browser 
click Create First Spec window

to run cypress > 
syntax: npx cypress run --browser <browser_name> --spec <spec_file>

npx cypress run --browser chrome --spec './cypress/e2e/react-demo.cy.js'