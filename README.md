# cypress-react

# test React applications using Cypress
cypress is an easy to use tool, setting up Cypress for react applications quicker and easier.

# Pre-requisites:
1. Download and Install NodeJS
2. Download and Install VSCode (Optional and Recommended)
3. npm install(If using existing repos)
# To setup cypress from scratch
# Step 1: Use the below command to create package.json
 npm init
# Step 2: Install Cypress
npm install cypress --save-dev
# Step 3:
 npx cypress open (It will open cypress server to manage your test suits)
# Configuring Cypress once server open in browser
1. choose test type E2E
2. review configuration file and click continue
3. choose browser 
4. click Create First Spec window

# To run cypress using CLI> 
# syntax: npx cypress run --browser <browser_name> --spec <spec_file>
  => npx cypress run --browser chrome --spec './cypress/e2e/react-demo.cy.js'
ref : https://docs.cypress.io/api/commands/first


  
