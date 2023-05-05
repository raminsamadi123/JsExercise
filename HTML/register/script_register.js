/*
LINK: https://github.com/raminsamadi123/Programming/blob/main/HTML/login/script.js
NAME: script.js
*/

function submitOnEnter(event) {
  if (event.keyCode === 13) {
    signup();
  };
};

function signup() {
  const username = document.getElementById("username").value; // Gets the value from the input element with username as its ID
  const password = document.getElementById("password").value; // Gets the value from the input element with password as its ID
  const account = localStorage.setItem("account_key", JSON.stringify({ "username": username, "password": password }));

  location.href = "index.html";
};

function login() {
  location.href = "index.html"; // Redirect client to "/HTML/testIndex.html"
};
