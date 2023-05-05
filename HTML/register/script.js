/*
LINK: https://github.com/raminsamadi123/Programming/blob/main/HTML/register/script.js
NAME: script.js
*/

function submitOnEnter(event) {
  if (event.keyCode === 13) { // If the enter key (keyCode 13) is pressed then
    login(); // Call the function login
  };
};

function login() {
  const username = document.getElementById("username").value; // Gets the value from the input element with username as its ID
  const password = document.getElementById("password").value; // Gets the value from the input element with password as its ID

  const users = JSON.parse(localStorage.getItem("accounts")); // Get the item in "accounts" key and parse it using JSON

  if (users !== null) { // Check if the array is not empty
    for (let i = 0; i < users.length; i++) { // Loop through the array "users" until users.length
      if (username == users[i].username && password == users[i].password) { // If the user's username is in the array "users" and password is in the array "users"
        location.href = "https://chat.openai.com"; // Redirect client to https://chat.openai.com
        return; // Stop the function
      };
    };
  }
  alert("Wrong username or password. Try again."); // Once the for loop has been executed then alert
};

function signup() {
  location.href = "register.html"; // Redirect client to "/HTML/testIndex.html"
};
