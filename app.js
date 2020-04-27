// const { generateText, createElement, validateInput } = require('./util');
// Same as above but used for integration test, use top or bottom lines separately
const { checkAndGenerate, createElement } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  newUserButton.addEventListener('click', addUser);
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  // if (
  //   !validateInput(newUserNameInput.value, true, false) ||
  //   !validateInput(newUserAgeInput.value, false, true)
  // ) {
  //   return;
  // }

  // For integration tests
  const outputText = checkAndGenerate(
    newUserNameInput.value,
    newUserAgeInput.value
  );


  const userList = document.querySelector('.user-list');

  // For unit tests
  // const outputText = generateText(
  //   newUserNameInput.value,
  //   newUserAgeInput.value
  // );

  if(!outputText) { return;}

  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

// Start the app!
initApp();
