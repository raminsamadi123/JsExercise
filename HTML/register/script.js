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
  const account = JSON.parse(localStorage.getItem("account_key"));

  const users = [{"username":"admin","password":"admin"}];
  users.push(account);

  for (let i = 0; i < users.length; i++) { // Loop through the array "users" until users.length
    if (username == users[i].username && password == users[i].password) { // If the user's username is in the array "users" and password is in the array "users"
      alert("Hello");
      console.log(users);
      //location.href = "https://chat.openai.com";
      return; // Stop the function
    };
  };
  alert("Wrong username or password. Try again."); // Once the for loop has been executed then alert
};

function signup() {
  location.href = "register.html"; // Redirect client to "/HTML/testIndex.html"
};
