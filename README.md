# Cypress Testing with GitHub Actions

This repository is dedicated to learning how to set up and use GitHub Actions to automate API testing with Cypress. Cypress is a powerful tool for end-to-end testing, and GitHub Actions provides an easy way to integrate these tests into your CI/CD workflow.

## What are GitHub Actions?

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate development processes such as building, testing, and deploying applications directly within GitHub.

## Repository Objectives

- Understand the Basics of GitHub Actions: Learn what they are, how they work, and how they can be used.
- Create Workflows: Set up and write YAML files to define workflows.
- Explore Custom Actions: Create and use custom actions.
- Automate Common Tasks: Automate tasks like automated testing, linting, and continuous deployment.
- Configure GitHub Actions to run Cypress tests automatically.
- Understand the benefits of test automation in CI/CD pipelines.

## Requirements

- Node.js 
- npm ou yarn
- GitHub account

## Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/seu-usuario/cypress-github-actions.git
    cd cypress-github-actions
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Add Cypress to the project:
    ```bash
    npm install cypress --save-dev
    ```

4. Configure Cypress (optional):

    ```bash
    npx cypress open
    ```

## Check the GitHub Actions Workflow

    - Go to the "Actions" tab in this GitHub repository.
    - Check if the workflow has run successfully.

## Project Structure

```plaintext
cypress-github-actions/
├── .github/
│   └── workflows/
│       └── cypress.yml
│       └── learn-github-actions.yml
├── cypress/
│   ├── downloads/
│   ├── fixtures/
│   └── screenshots/
│   ├── integration/
│   ├── plugins/
│   └── support/
│   └── videos/
├── node_modules/
├── .gitignore
├── cypress.json
├── package.json
└── README.md



