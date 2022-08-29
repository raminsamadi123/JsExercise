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
//15. Asking Multiple Inputs\\

var ps = require("prompt-sync");
var prompt = ps();

let string = prompt("Give a string: ");
let integer = parseInt(prompt("Give a integer: "));
let double = parseFloat(prompt("Give a double: "));
let boolean = prompt("Give a boolean: ");

console.log(
    "Your string:", string + "\nYour integer:", integer + 
    "\nYour double:", double + "\nYour boolean:", boolean
);

________________________________________________________
//16. Seconds In Days\\

var ps = require("prompt-sync");
var prompt = ps();

let days = parseInt(prompt("How many days? "));
console.log(days * 86400); //converts days to seconds

________________________________________________________
//17. Input Two Integers\\

let ps = require("prompt-sync");
let prompt = ps();

let term = [
    parseInt(prompt("Give the first number! ")),
    parseInt(prompt("Give the second number! "))
];

console.log("The sum is", term[0] + term[1]);

________________________________________________________
//18. Input Three Integers\\

let ps = require("prompt-sync");
let prompt = ps();

let term = [
    parseInt(prompt("Give the first number! ")),
    parseInt(prompt("Give the second number! ")),
    parseInt(prompt("Give the third number! "))
];

console.log("The sum is", term[0] + term[1] + term[2]);

________________________________________________________
//19. Sum of Two\\

let ps = require("prompt-sync");
let prompt = ps();

let term = [
    parseInt(prompt("Give the first number! ")),    
    parseInt(prompt("Give the second number! "))
];

console.log(term[0], "+", term[1], "=", term[0] + term[1])
________________________________________________________
//20. Multiply Two\\

let ps = require("prompt-sync");
let prompt = ps();

let factor = [
    parseInt(prompt("Give the first number! ")),    
    parseInt(prompt("Give the second number! "))
];

console.log(factor[0], "*", factor[1], "=", factor[0] * factor[1]);

________________________________________________________
//21. Average of Two\\

let ps = require("prompt-sync");
let prompt = ps();

let term = [
    parseInt(prompt("Give the first number! ")),    
    parseInt(prompt("Give the second number! "))
];

console.log("The average is", (term[0] + term[1]) / 2);

________________________________________________________
//22. Average of Three\\

let ps = require("prompt-sync");
let prompt = ps();

let term = [
    parseFloat(prompt("Give the first number! ")),    
    parseFloat(prompt("Give the second number! ")),
    parseFloat(prompt("Give the third number! "))
];

console.log("The average is", (term[0] + term[1] + term[2]) / 3);

________________________________________________________
//23. Tiny Calculator\\

let ps = require("prompt-sync");
let prompt = ps();

let number = [
    parseInt(prompt("Give the first number! ")),    
    parseInt(prompt("Give the second number! "))
];

console.log(
    number[0], "+", number[1], "=", number[0] + number[1] + "\n" +
    number[0], "-", number[1], "=", number[0] - number[1] + "\n" +
    number[0], "*", number[1], "=", number[0] * number[1] + "\n" +
    number[0], "/", number[1], "=", number[0] / number[1]
)

________________________________________________________
//24. Speeding\\

let ps = require("prompt-sync");
let prompt = ps();

let speedMeter = parseFloat(prompt("Your speed: "));

if (speedMeter > 120) {
    console.log("Speeding!")
};

________________________________________________________
//25. Orwell\\

let ps = require("prompt-sync");
let prompt = ps();

let birthDate = parseInt(prompt("Give your age: "));

if (birthDate == 1899) {
    console.log("You're old")
};

________________________________________________________
//26. Too Old\\

let ps = require("prompt-sync");
let prompt = ps();

let birthDate = parseInt(prompt("Give your age: "));

if (birthDate < 1900) {
    console.log("You're old")
};

________________________________________________________


*/

//27. Stay Positive\\

let ps = require("prompt-sync");
let prompt = ps();

let number = prompt("Give a number");

if (number >= 0) {
    console.log("It is positive");
}else {
    console.log("It is not positive");
}