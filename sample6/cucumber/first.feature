Feature: Initial Cucumber Test
  Try cucumber with detox

Scenario: Test Cucumber
  Given I should see the "welcome" element
  Then I should see the "Hi" text

Scenario: Test enter name  is visible
  Given I should see the "entername" element
  Then I should see the "" data in it entername

