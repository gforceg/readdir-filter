Feature: The test should fail

Scenario: I want to test the ts-base template project
  Given that I run "node ng-base/index.js"
  Then the program should fail