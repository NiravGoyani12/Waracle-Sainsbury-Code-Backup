# Installation

install `Node.JS v14.16.0`

install `npm 6.14.12`

`JDK - Install JDK 1.8+`


- Go to package.json file & run `npm install`
  
- verify package.json.lock file updated with `Jfrog artifactory`

# Run Tests

1.To run/execute cucumber tests in your local development

 - `npm run test`
     
the above command will delete existing cucumber reports & run cucumber tests + generates cucumber report

2.browserstack tests


- `npm run bs-test`

the above command will delete existing browserStack reports & run browserStack tests + generate BS reports

  

# Reports

# 1.Cucumber reports

Multiple Cucumber HTML report:

- The reports automatically generates in  `cucumber-report` folder


view multiple-html report

- Go to `test > cucumber-reports > Index.html` right click Open In Browser

# 2.Browserstack reports

BS Multiple Cucumber HTML report:

- The BS reports automatically generates in  `cucumber-browserstack-report` folder

view browserstack multiple-html report

- Go to `test > cucumber-browserstack-reports > Index.html` right click Open In Browser




