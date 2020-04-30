# js-testing-intro

<br>

**What Is This Project? :**

- The actual project is a just a simple form with a couple inputs and a button but the purpose is to experiment with various testing methods (unit, integration, end to end) using Jest.
- Source Tutorial: https://www.youtube.com/watch?v=r9HdJ8P6GQI&t=697s

<br>

**What Is Jest? :**

- Jest is a javascript testing framework that can be used to test and run various types of tests.
- Source: https://jestjs.io/

<br>

**Types Of Tests :**

- Unit Tests: Are the most basic of tests since it only tests one piece of a program, such as individual functions. An example of a unit test would checking to see if a form returns a user's input from it's input fields.

- Integration Tests: Are tests that check the compatability of multiple unit tests with eachother. For example, if you have a function that outputs a message that displays information from another function that returns a user's input you can check to see if that data (from the input and output) matches.

- End To End Tests: Also known as User Interface Tests, these tests are basically if you were to go in and manually test your application but are automated for you. In this project we have an example where we have a test that opens our project in another window and types into all of the inputs for us then clicks the submit button so that we can see the result. These types of tests can also run in the background so that you do not have to actually watch the process but see the end results through your terminal.

<br>

**Notes:**

- In VS Code use "live server" option located in the status bar to run application
- For recompiling run "npm start"
- To run test use "npm test" or "npm test watch"
