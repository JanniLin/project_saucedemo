Feature: Login functionality

  Scenario Outline: UC-1 Test Login form with empty credentials
    Given I am on the login page
    When I enter <username> in the username field
    When I enter <password> in the password field
    When I clear the username field
    When I clear the password field
    When I click the login button
    Then I should see the error <error_message>

    Examples:
      | username   | password  |error_message                     |
      | some_name  | some_pass |Epic sadface: Username is required|

  Scenario Outline: UC-2 Test Login form by entering only the username
    Given I am on the login page
    When I enter <username> in the username field
    When I enter <password> in the password field
    When I clear the password field
    When I click the login button
    Then I should see the error <error_message>

    Examples:
      | username   | password  |error_message                     |
      | some_name  | some_pass |Epic sadface: Password is required|

  Scenario Outline: UC-3 Test Login form with correct credentials

    Given I am on the login page
    When I enter <username> in the username field
    When I enter <password> in the password field
    When I click the login button
    Then I should see the header <text>

    Examples:
      | username      | password      | text    |
      | standard_user | secret_sauce  |Swag Labs|

