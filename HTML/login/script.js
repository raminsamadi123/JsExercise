/*
██╗░░░░░░█████╗░░██████╗░██╗███╗░░██╗
██║░░░░░██╔══██╗██╔════╝░██║████╗░██║
██║░░░░░██║░░██║██║░░██╗░██║██╔██╗██║
██║░░░░░██║░░██║██║░░╚██╗██║██║╚████║
███████╗╚█████╔╝╚██████╔╝██║██║░╚███║
╚══════╝░╚════╝░░╚═════╝░╚═╝╚═╝░░╚══╝
AUTHOR: Ramin Samadi
LINK: https://github.com/raminsamadi123/Programming/blob/main/HTML/login/script.js
NAME: script.js
DESC: School project creating a login website.
LICENSE: MIT

MIT License

Copyright (c) 2023 raminsamadi123

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
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
    alert("Login Failed");
  };
};

function signup() {
  alert("Coming soon");
};
