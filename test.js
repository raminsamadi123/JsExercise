/*
console.log("Hej"); //sträng
console.log(2); //nummer
console.log(true); //boolean
console.log(false); //boolean

console.log(1+2); //addition
console.log(1-2); //subtraktion
console.log(1*2); //multiplikation
console.log(1/2); //division

var namn = "Ramin";
console.log(namn);

namn = "Samadi";
console.log(namn);

________________________________________________________
//1. Hello World\\

console.log("Hello World");

________________________________________________________
//2. Bonnie Tyler\\

console.log("Once upon a time");
console.log("I was falling in love");
console.log("Now I'm only falling apart");

________________________________________________________
//3. Bonnie Tyler part 2\\

console.log("Once upon a time \nI was falling in love \nNow I'm only falling apart");

________________________________________________________
//4. Första variabeln\\

var message = "Live and Sleep!";
console.log(message);

________________________________________________________
//5. Ada Lovelace\\

var username = "Ada Lovelace";
console.log("Hej", username + "!");

________________________________________________________
//6. Print Input\\

var ps = require("prompt-sync");
var prompt = ps();

let name1 = prompt("Enter your name: ");
console.log(name1);

________________________________________________________
//7. Triple Hello\\

var ps = require("prompt-sync");
var prompt = ps();

let input1 = prompt("Give input! ");

for (i = 0; i <= 2; i++) {
    console.log(input1);
}

________________________________________________________
//8. Hälsning\\

var ps = require("prompt-sync");
var prompt  = ps();

let name2 = prompt("What is your name? ");
console.log("Hello", name2 + "!");

________________________________________________________
//9. Samtal\\

var ps = require("prompt-sync");
var prompt = ps();

let conversation;

conversation = prompt("Hello, how are you? ");
conversation = prompt("Wonderful! What are you doing right now? ");
console.log("Thank you for sharing!");

________________________________________________________
//10. Namn Yrke\\

var ps = require("prompt-sync");
var prompt = ps();

console.log("I will tell a story, but I need some information.");

character = [
    username = prompt("Give a name for the main character: "),
    profession = prompt("Give the character a profession: ").toLowerCase()
];

console.log(
    "\nHere is the story:\nOnce upon a time there was a", character[1], "called", 
    character[0] + "\nOn his/her way to work,", character[0], "often pondered what being", 
    character[1], "meant to them.\nWhen you work as a", character[1],
    "you meet interesting people.\n" + character[0], "enjoys their work as a", character[1] + ", The end.\n"
);

________________________________________________________
//11. Print Variables\\

let days = 200;
let hours= 3.5;

console.log(
    "Days to summer:\n" + days + "\nHours to lunch:\n" + hours +
    "\nCoding is fun:" + "\nIt sure is!"
);

________________________________________________________
//12. Print Integer\\

var ps = require("prompt-sync");
var prompt = ps();

let integer = parseInt(prompt("Give a number! "));
console.log("You gave", integer);

________________________________________________________
//13. Print Double\\

var ps = require("prompt-sync");
var prompt = ps();

let float = parseFloat(prompt("Give a number! "));

if (typeof float === 'number' && !Number.isNaN(float) && !Number.isInteger(float)) {
    console.log("You gave", float);
}

________________________________________________________

//14. Print Truth\\

var ps = require("prompt-sync");
var prompt = ps();

let boolean = prompt("Give me the truth! ");

if (boolean == "true" || boolean == "false") {
    console.log(boolean.charAt(0).toUpperCase() + boolean.slice(1));
}

________________________________________________________


*/

//15. Asking Multiple Inputs\\