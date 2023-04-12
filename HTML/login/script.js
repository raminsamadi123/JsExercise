/*
LINK: https://github.com/raminsamadi123/Programming/blob/main/HTML/login/script.js
NAME: script.js
*/

function submitOnEnter(event) {
  if (event.keyCode === 13) {
    login();
  };
};

function login() {
  const username = document.getElementById("username").value; // Gets the value from the input element with username as its ID
  const password = document.getElementById("password").value; // Gets the value from the input element with password as its ID

  const users = { // An arrary containing all registered usernames and passwords
    "Mohammad": "L8xisa-a#4", // Format: Username: Password;
    "Ramin": "kjyVv&d2R#2u%D"
  };

  if (users.hasOwnProperty(username) && users[username] === password) { // Does users contain username and is username's property equal to password?
    alert("Login Succeeded");
  } else { // Both of the conditions above were false
    alert("Wrong username or password. Try again.");
  };
};

function signup() {
  alert("Coming soon");
};
