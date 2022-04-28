Feature: You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
  - The rover receives a character array of commands.
  - Implement commands that move the rover forward/backward (f,b).
  - Implement commands that turn the rover left/right (l,r).
  - Implement wrapping at edges. But be careful, planets are spheres.
  Connect the x edge to the other x edge, so (1,1) for x-1 to (5,1),
  but connect vertical edges towards themselves in inverted coordinates, so (1,1) for y-1 connects to (5,1).
  - Implement obstacle detection before each move to a new square.
  If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

  Scenario: Rover starts at "x" and "y" in Mars
    Given there is a rover
    And there is Mars
    When I land the rover at "0", "1"
    Then Rover should be in "0", "1"

  Scenario: Rover is directed to "N"
    Given there is a rover
    When Rover is directed to "N"
    Then Rover should be directed towards "N"

  Scenario: Rover receive commands
    Given there is a rover
    When Rover receive "f,f,f"
    Then Rover have "3" commands to do

  Scenario: Rover moves 3 times forward
    Given there is a rover
    And there is Mars
    And Rover is directed to "N"
    And I land the rover at "0", "1"
    And Rover receive "f,f,f"
    When Rover moves
    Then Rover should be in "0", "4"

  Scenario: Rover moves 1 times backward
    Given there is a rover
    And there is Mars
    And Rover is directed to "N"
    And I land the rover at "0", "4"
    And Rover receive "b"
    When Rover moves
    Then Rover should be in "0", "3"

  Scenario: Rover rotate left
    Given there is a rover
    And Rover is directed to "N"
    When Rover rotate "l"
    Then Rover is directed to "W"

  Scenario: Rover rotate right
    Given there is a rover
    And Rover is directed to "W"
    When Rover rotate "r"
    Then Rover is directed to "S"


  Scenario: Rover go back to vertical edge of the planet
    Given there is a rover
    And there is Mars
    And Rover is directed to "N"
    And I land the rover at "0", "4"
    And Rover receive "f"
    When Rover moves
    Then Rover should be in "0", "0"

  Scenario: Rover go back to horizontal edge of the planet
    Given there is a rover
    And there is Mars
    And Rover is directed to "E"
    And I land the rover at "0", "1"
    And Rover receive "b"
    When Rover moves
    Then Rover should be in "4", "1"