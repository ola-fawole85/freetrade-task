Feature: MWRR Portfolio Acceptance

  Scenario: Retrieve MWRR for a valid user
    Given the user has a valid user ID
    When the user makes a GET request to /api/mwrr with a valid user ID
    Then the response status code should be 200
    And the response should contain the user ID
    And the response should contain MWRR values for the last week, last month, and last year

  Scenario: Retrieve MWRR for an invalid user
    Given the user has an invalid user ID
    When the user makes a GET request to /api/mwrr with an invalid user ID
    Then the response status code should be 404
    And the response should contain an error message

  Scenario: Retrieve MWRR for a user with missing user ID
    When the user makes a GET request to /api/mwrr without a user ID
    Then the response status code should be 400
    And the response should contain an error message
