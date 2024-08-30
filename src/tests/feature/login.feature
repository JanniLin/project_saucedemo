Feature: Login functionality

  Background:
    Given I am on the login new page

  Scenario Outline: User sees an error message when providing incomplete credentials
    And I enter invalid credentials
    And I clear the following fields: <fields_to_clear> on the login page
    And I click the login button
    Then I should see the error <error_message> on the login page

    Examples:
      | fields_to_clear    | error_message                      |
      | username, password | Epic sadface: Username is required |
      | password           | Epic sadface: Password is required |

  Scenario Outline: User successfully logs in with correct credentials
    And I enter valid credentials
    And I click the login button
    Then I should see the header <text> on the inventory new page

    Examples:
      | text       |
      | Swag Labs  |