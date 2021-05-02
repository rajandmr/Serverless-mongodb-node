This repo contains basic CRUD functionality using NodeJS and serverless Library. It uses MongoDB as database, API gateway as triggers for AWS Lambda Functions and mongoose as ODM

To use this Repo:
- Clone it and navigate into the root directory
- Install all the required packages using ``` npm install ```
- Change the aws profile name to your own aws account profile from *serverless.yml*
- Deploy the project using ``` sls deploy ```

To run the tests, first add test database uri in **utils/db.js**
run ``` npm run test ```

### Prerequisites:
- You must have **serverless** package installed globally
- an AWS account with required access along with aws profile set up 