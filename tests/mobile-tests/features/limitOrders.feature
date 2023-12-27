Feature: Limit Orders in Freetrade Plus App

  As a Plus customer
  I want to place different types of limit orders based on my location
  So that I can buy, sell or stop share orders at a specified price

  Scenario Outline: Place a Limit Buy Order as a <TraderLocation> Trader
    Given I am a logged-in Plus customer from <TraderLocation>
    And I navigate to the trading page
    When I choose to place a "<OrderType>" order
    And I set the share price to "<Price>"
    And I confirm the order
    Then the order should be placed successfully

    Examples:
      | TraderLocation | OrderType  | Price |
      | UK             | Limit Buy  | 100   |
      | US             | Limit Buy  | 150   |

  Scenario Outline: Place a Limit Sell Order as a <TraderLocation> Trader
    Given I am a logged-in Plus customer from <TraderLocation>
    And I navigate to the trading page
    When I choose to place a "<OrderType>" order
    And I set the share price to "<Price>"
    And I confirm the order
    Then the order should be placed successfully

    Examples:
      | TraderLocation | OrderType  | Price |
      | UK             | Limit Sell | 200   |
      | US             | Limit Sell | 250   |


  Scenario Outline: Place a Stop Loss Order as a <TraderLocation> Trader
    Given I am a logged-in Plus customer from <TraderLocation>
    And I navigate to the trading page
    And I set the lower limit to "<Price>"
    When I choose to place a "Stop Loss" order
    And I confirm the order
    Then the stop loss order should be placed successfully

    Examples:
      | TraderLocation | Price |
      | UK             | 80    |
      | US             | 75    |

