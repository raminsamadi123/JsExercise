/*
LINK: https://github.com/raminsamadi123/Programming/blob/main/HTML/register/script_register.js
NAME: script_register.js
*/

function submitOnEnter(event) {
  if (event.keyCode === 13) { // If the enter key (keyCode 13) is pressed then
    signup(); // Call the function signup
  };
};

function signup() {
  const username = document.getElementById("username").value; // Gets the value from the input element with username as its ID
  const password = document.getElementById("password").value; // Gets the value from the input element with password as its ID

  let accounts = JSON.parse(localStorage.getItem("accounts")); // Access the key "accounts" and parse it using JSON
  if (accounts === null) { // If accounts is empty
    accounts = []; // Create an empty array if accounts is empty
  }

  accounts.push({ "username": username, "password": password }); // Push the username and password to accounts array
  localStorage.setItem("accounts", JSON.stringify(accounts)); // Create a key in local storage called accounts and stringify it using JSON

  location.href = "index.html"; // Redirect client to "index.html"
}

function login() {
  location.href = "index.html"; // Redirect client to "index.html"
};
