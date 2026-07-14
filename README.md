# Safety code Automation

This project is using Playwright and TypeScript to automate the My Application flow

# Approach

I used page object model to separate the page locators and actions from the test validations.

The application data in the grid is collected and compared with the expected data stored in the test data folder.

# Assumptions

- Dummy URL and login credentials are used.
- The application grid uses a standard html table.
- The grid column order is based on the provided screenshots

# Project Structure

I used a folders stucture similar to the automation frameworks I have worked with in my previous projects.

- config - Environment configuration
- pages - page objects
- test data - test user and expected data
- tests - playwright tests
- fixtures - empty (Reserved for reusable test setup)
- reports - empty (Reserved for test reports)
- utils - empty (Reserved for test data generation)

# Commands used to Build the Framework

- Create the project folder 
    - mkdir safety-codes-automation
    - cd safety-codes-automation

- Initialize the Playwright project
    - npm init playright@latest 

- Create the folder structure 
    - mkdir config pages fixtures test-data reports tests utils 
    - The environment,Test data ,page objects and README files were added manually
