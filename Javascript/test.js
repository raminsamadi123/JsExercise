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

let term1 = parseInt(prompt("Give the first number! "));
let term2 = parseInt(prompt("Give the second number! "));
console.log("The sum is", term1 + term2);

________________________________________________________
//18. Input Three Integers\\

let ps = require("prompt-sync");
let prompt = ps();

let term1 = parseInt(prompt("Give the first number! "));
let term2 = parseInt(prompt("Give the second number! "));
let term3 = parseInt(prompt("Give the third number! "));

console.log("The sum is", term1 + term2 + term3);

________________________________________________________
//19. Sum of Two\\

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
=======
let term1 = parseInt(prompt("Give the first number! "));
let term2 = parseInt(prompt("Give the second number! "));
let term3 = parseInt(prompt("Give the third number! "));

console.log("The sum is", term1 + term2 + term3);

________________________________________________________
//27. Stay Positive\\

let ps = require("prompt-sync");
let prompt = ps();

let number = parseInt(prompt("Give a number "));

if (number >= 0) {
    console.log("It is positive");
}else if (number < 0) {
    console.log("It is not positive");
};

________________________________________________________
//28. Over Eighteen\\

let ps = require("prompt-sync");
let prompt = ps();

let age = parseInt(prompt("How old are you? "));

if (age >= 18) {
    console.log("You're an adult!");
}else if (age < 18) {
    console.log("You're underage!");
};

________________________________________________________
//29. Larger Number\\

let ps = require("prompt-sync");
let prompt = ps();

let number = [
    parseInt(prompt("Give the first number! ")),
    parseInt(prompt("Give the second number! "))
];

if (number[0] > number[1]) {
    console.log("The larger number is", number[0] + "!");
}else if (number[1] > number[0]) {
    console.log("The larger number is", number[1] + "!");
}else {
    console.log("They are equal!");
};

________________________________________________________
//30. Course Grading\\

let ps = require("prompt-sync");
let prompt = ps();

let percent = parseInt(prompt("Give your percent [0 - 100]: "));

if (percent < 0) {
    console.log("Impossible");
}else if (percent < 50) {
    console.log("Fail");
}else if (percent < 60) {
    console.log("Grade: 1");
}else if (percent < 70) {
    console.log("Grade: 2");
}else if (percent < 80) {
    console.log("Grade: 3");
}else if (percent < 90) {
    console.log("Grade: 4");
}else if (percent <= 100) {
    console.log("Grade: 5");
}else if (percent > 100) {
    console.log("Outstanding!");
};

________________________________________________________
//31. Even or Odd\\

let ps = require("prompt-sync");
let prompt = ps();

let number = parseInt(prompt("Give a number: "));

if (number % 2 === 0) {
    console.log("It is even.");
}else if (number % 2 === 1) {
    console.log("It is odd.");
};

________________________________________________________
//32. Enter Friend\\

let ps = require("prompt-sync");
let prompt = ps();

let question = prompt("Speak, friend, and enter! ");

if (question === "Mellon") {
    console.log("Welcome, friend");
}else {
    console.log("They've got a cave troll!");
};

________________________________________________________
//33. Echo\\
let ps = require("prompt-sync");
let prompt = ps();

let string = [
    prompt("Give the first string: "),
    prompt("Give the second string: ")
];

if (string[0] === string[1]) {
    console.log("Echo");
}else {
    console.log("Nej");
};

________________________________________________________
//34. Continue\\

let ps = require("prompt-sync");
let prompt = ps();

while (true) {
    let question = prompt("Do you want continue? ");
    if (question === "yes" || question === "Yes") {
        break
    }else if (question === "no" || question === "No") {
        break
    };
};

________________________________________________________
//35. Answer to Life\\

let ps = require("prompt-sync");
let prompt = ps();

while (true) {
    let number = parseInt(prompt("Give a number: "));
    if (number === 42) {
        break
    };
};

________________________________________________________
//36. Power of Positivity\\

let ps = require("prompt-sync");
let prompt = ps();

while (true) {
    let number = parseInt(prompt("Give a number: "));
    if (number > 0) {
        console.log(number ** 2);
    }else if (number < 0) {
        console.log("That is negative");
    }else if (number === 0) {
        break
    };
};

________________________________________________________
//37. Counting Numbers\\

let ps = require("prompt-sync");
let prompt = ps();

let numberCount = 0;

while (true) {
    let number = parseInt(prompt("Give a number: "));
    if (number === 0) {
        break
    }else {
        numberCount += 1;
    };
};

console.log("Total amount of numbers: ", numberCount);

________________________________________________________
//38. Counting Negatives\\

let ps = require("prompt-sync");
let prompt = ps();

let negativeValues = 0;

while (true) {
    let number = parseFloat(prompt("Give a number: "));
    
    if (number === 0) {
        break
    }else if (number < 0) {
        negativeValues += 1;
    };
};

console.log("Total amount of negative numbers:", negativeValues);

________________________________________________________
//39. Sum of Numbers\\

let ps = require("prompt-sync");
let prompt = ps();

let sum = 0;

while (true) {
    let number = parseFloat(prompt("Give a number: "));
    
    if (number === 0) {
        break
    }else {
        sum += number;
    };
};

console.log("Total sum of numbers:", sum);

________________________________________________________
//40. Amount and Sum\\

let ps = require("prompt-sync");
let prompt = ps();

let totalValues = 0;
let sum = 0;

while (true) {
    let number = parseFloat(prompt("Give a number: "));
    
    if (number === 0) {
        break
    }else {
        sum += number;
        totalValues += 1;
    };
};

console.log("Total sum of numbers:", sum);
console.log("Total amount of numbers:", totalValues);

________________________________________________________
//Ramin's calculator code\\

let ps = require("prompt-sync");
let prompt = ps();

console.log("\nHello and welcome to my first self-coded calculator.\nIn order for this calculator to work you have to input 2 values and choose your operator. \nIf you want to exit this program input 0 in the console and confirm with your enter key.\n")

while (true) { 
    let number1 = parseFloat(prompt("Input your 1st value: ")); if (number1 === 0) {break};
    let operator = prompt("Choose between these operators: (+-/^*) "); if (operator == "0") {break};
    let number2 = parseFloat(prompt("Input your 2nd value: ")); if (number2 === 0) {break};
    
    if (operator === "+") { //kan förbättras genom att göra en array som heter operators
        console.log(number1 + number2 + "\n");
    }else if (operator === "-") {
        console.log(number1 - number2 + "\n");
    }else if (operator === "*") {
        console.log(number1 * number2 + "\n");
    }else if (operator === "/") {
        console.log(number1 / number2 + "\n");
    }else if (operator === "^") {
        console.log(number1 ** number2 + "\n");
    };
};

________________________________________________________
//Sortera en array med siffror\\

function bubbleSort(array) {
    const arr = array.slice();
    for (i = 0; i < arr.length -1; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            };
        };
    };
    return arr;

________________________________________________________
//For Of Loops\\

const names = ["John", "Bob", "Mary", "Joe"];

for (name of names) {
    console.log(name);
};

//For in Loops\\
const user = {"firstName:": "John", "lastName": "Doe"};

for (key in user) {
    console.log(user[key]);
};
};

const arr = [4, 2, 1, 6];
console.log("Old array:", arr);
console.log("New array:", bubbleSort(arr));

//For Each Loops\\
const animals = ["cat", "dog", "horse", "sheep", "bird"];

animals.forEach(animal => {
    console.log(animal);
});

break //breaks out of a loop
continue // skips the current loop and moves to the next loop
console.log(`The number is ${i}`); // write text without , or +
________________________________________________________
//Filter Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const itemNames = items.filter((item) => {
    return item.price <= 100;
});

console.log(items)
console.log(filteredItems);

________________________________________________________
//Map Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const itemNames = items.map((item) => {
    return item.name;
});

console.log(itemNames);

________________________________________________________
//Find Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const foundItem = items.find((item) => {
    return item.name === "Album";
});

console.log(foundItem);

________________________________________________________
//For Each\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

items.forEach((item) => {
    console.log(item.price);
});

________________________________________________________
//Some Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});

console.log(hasInexpensiveItems);

________________________________________________________
//Every Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const hasInexpensiveItems = items.every((item) => {
    return item.price <= 1000;
});

console.log(hasInexpensiveItems);

________________________________________________________
//Reduce Method\\

const items = [
    { name: "Bike",     price: 100  },
    { name: "TV",     price: 200  },
    { name: "Album",     price: 10   },
    { name: "Book",     price: 5    },
    { name: "Phone",     price: 500  },
    { name: "Computer",     price: 1000 },
    { name: "Keyboard",     price: 25   }
];

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

console.log(total);

________________________________________________________
//Includes Method\\

const items = [1, 2, 3, 4, 5];

const includesTwo = items.includes(3);

console.log(includesTwo);

________________________________________________________
//Index Of\\

const schedules = ["Wake up", "Eat", "Film a video", "Watch things on netflix"];

console.log(schedules.indexOf("Film a video"));

________________________________________________________
//Objects\\

const person = new Object();

person.name = "Daniel";
person.eyeColor = "Blue";
person.age = 27;
person.updateAge = function() {
    return ++person.age;
}

console.log(person.age);
person.updateAge();
console.log(person.age);

const person = {
    name: "Daniel", 
    eyeColor: "Blue",
    age: 27,
    updateAge: function() {return ++person.age;}
};

console.log(person);

// object literals

let user = {
    name: "Crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "Berlin",
    blogs: ["Why mac & cheese rules", "10 things to make with marmite"]
};

// user.age = 35;

console.log(user.age);

console.log(user["location"]);
user["name"] = "chun-li";
console.log(user["name"]);

console.log(typeof user);

// object literals

const blogs = [
    { title: "Why mac & cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 },
];

console.log(blogs);

let user = {
    name: "Crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "Berlin",
    blogs: [
        { title: "Why mac & cheese rules", likes: 30 },
        { title: "10 things to make with marmite", likes: 50 },
    ],
    login() {console.log("the user logged in");},
    logout() {console.log("the user logged out");},
    logBlogs() {
        console.log("This user has written the following blogs:");

        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
user.login();
user.logout();


const name = "mario";
console.log(name.toUpperCase());

// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.2;

console.log(Math.round(area)); // Rounds the value to the closest interger
console.log(Math.floor(area)); // Rounds the value to the lowest number
console.log(Math.ceil(area)); // Rounds the value to the highest number
console.log(Math.trunc(area)); // Removes what's after the decimal point

// random numbers

const randomNumber = Math.random(); //Random number between 0-1
console.log(Math.round(randomNumber * 100)); // Random number between 1-100

// primitive values

let scoreOne = 50;
const scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne} scoreTwo: ${scoreTwo}`);

scoreOne = 100
console.log(`scoreOne: ${scoreOne} scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = "chun-li";

console.log(userOne, userTwo);

________________________________________________________
//1. Finns talet i givna intervallet\\

const prompt = require("prompt-sync") ();

const inputNumber = parseInt(prompt("Input your number: "));
const intervalStart = parseInt(prompt("Input the start of the interval: "));
const intervalEnd = parseInt(prompt("Input the end of the interval: "));

if (inputNumber >= intervalStart && inputNumber <= intervalEnd) {
    console.log("Within the interval");
} else {
    console.log("Outside the interval");
};

________________________________________________________
//2. Kontrollera om året är skottår eller inte\\

const prompt = require("prompt-sync") ();

const year = parseInt(prompt("What year is it? "));

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year, "is a leap year");
} else {
    console.log(year, "is not a leap year");
};

________________________________________________________
//3. Skriv antalet dagar i en månad\\

const prompt = require("prompt-sync") ();
 
const yearInput = parseInt(prompt("Input year: "));
const monthInput = parseInt(prompt("Input month: "));
 
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
 
const daysInMonth = getDaysInMonth(yearInput, monthInput);
console.log(daysInMonth);

________________________________________________________
//4. Största siffran\\

const prompt = require("prompt-sync") ();
 
const userNumberInputs = [
    parseFloat(prompt("Input your first number: ")),
    parseFloat(prompt("Input your second number: ")),
    parseFloat(prompt("Input your third number: "))
];
 
const largestNumber = Math.max(userNumberInputs[0], userNumberInputs[1], userNumberInputs[2]);
 
console.log("The largest number is " + largestNumber);

________________________________________________________
//5. Sortering\\

const prompt = require("prompt-sync") ();
 
const userNumberInputs  = [
    parseFloat(prompt("Input your first number: ")),
    parseFloat(prompt("Input your second number: ")),
    parseFloat(prompt("Input your third number: "))
];
 
console.log(userNumberInputs.sort().reverse());

________________________________________________________
//6. Växande eller avtagande\\

const prompt = require("prompt-sync") ();
 
const userNumberInputs  = [
    parseFloat(prompt("Input your first number: ")),
    parseFloat(prompt("Input your second number: ")),
    parseFloat(prompt("Input your third number: "))
];
 
if ((userNumberInputs[0] < userNumberInputs[1] && userNumberInputs[1] < userNumberInputs[2]) || userNumberInputs[1] < userNumberInputs[2]) {
    console.log("Increasing");
}else if ((userNumberInputs[0] > userNumberInputs[1] && userNumberInputs[1] > userNumberInputs[2]) || userNumberInputs[1] > userNumberInputs[2]) {
    console.log("Decreasing")
} else {
    console.log("Neither increasing nor decreasing");
};

________________________________________________________
//7. Bokstav, tal eller specialtecken\\

const prompt = require("prompt-sync") ();
 
let invalidInput = true;
const input = prompt("Input your letter, number or special character here: ");
const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const lowerCase = /abcdefghijklmnopqrstuvwxyzåäö/;
 
 
function isLowerCaseOrUpperCase() {
    if (input == input.toLowerCase() && isNaN(parseInt(input)) && !specialCharacters.test(input) && lowerCase.test(input)) {
        console.log("Lowercase");
        invalidInput = false
    }else if (input == input.toUpperCase()  && isNaN(parseInt(input)) && !specialCharacters.test(input) && lowerCase.test(input)) {
        console.log("Uppercase");
        invalidInput = false
    };
};
 
function isConsonantOrVowel() {
    if (input.toUpperCase() === "A" || input.toUpperCase() === "E" || input.toUpperCase() === "I" || input.toUpperCase() === "O" || input.toUpperCase() === "U" || input.toUpperCase() === "Y" || input.toUpperCase() === "Å" || input.toUpperCase() === "Ä" || input.toUpperCase() === "Ö") {
        console.log("It is a vowel");
        invalidInput = false
    }else if (input.toUpperCase() === "B" || input.toUpperCase() === "C" || input.toUpperCase() === "D" || input.toUpperCase() === "F" || input.toUpperCase() === "G" || input.toUpperCase() === "H" || input.toUpperCase() === "J" || input.toUpperCase() === "K" || input.toUpperCase() === "L" || input.toUpperCase() === "M" || input.toUpperCase() === "N" || input.toUpperCase() === "P" || input.toUpperCase() === "Q" || input.toUpperCase() === "R" || input.toUpperCase() === "S" || input.toUpperCase() === "T" || input.toUpperCase() === "V" || input.toUpperCase() === "W" || input.toUpperCase() === "X" || input.toUpperCase() === "Z" && isNaN(parseInt(input))) {
        console.log("It is a consonant");
        invalidInput = false
    };
};
 
function isPositivOrNegative() {
    if (parseFloat(input) >= 0  && !isNaN(parseInt(input))) {
        console.log("Positive");
        invalidInput = false
    }else if (parseFloat(input) < 0  && !isNaN(parseInt(input))) {
        console.log("Negative");
        invalidInput = false
    };
};
 
function isEvenOrOdd() {
    if (parseFloat(input) % 2 === 0 && !isNaN(parseInt(input))) {
        console.log("Even");
        invalidInput = false
    }else if (!isNaN(parseInt(input))) {
        console.log("Odd");
        invalidInput = false
    };
};
 
 
function containSpecialCharacter() {
    if (specialCharacters.test(input)) {
        console.log("Special character");
        invalidInput = false
    }
}
 
 
isLowerCaseOrUpperCase()
isConsonantOrVowel();
isPositivOrNegative();
isEvenOrOdd();
containSpecialCharacter();
 
if (invalidInput) {console.log("Invalid Input!");};

________________________________________________________
//8. Veckonummer\\

const prompt = require("prompt-sync") ();
console.log("Input a date to know which week it was, structure it like this: \nSep 25\n")
const dateInput = prompt("> ");
 
const currentDate = new Date(dateInput);
const startDate = new Date(currentDate.getFullYear(), 0, 1);
const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
 
const weekNumber = Math.ceil(days / 7);
 
console.log(`Week number of ${dateInput} is: ${weekNumber}`);

________________________________________________________
//9. Giltig triangel\\

const prompt = require("prompt-sync") ();
 
const triangle = {
    A: prompt("Input A for your triangle: "),
    B: prompt("Input B for your triangle: "),
    C: prompt("Input C for your triangle: ")
};
 
if (triangle.A < triangle.B && triangle.B < triangle.A + triangle.C && triangle.C < triangle.A + triangle.B) {
    console.log("This is a valid triangle!");
}else {
    console.log("This is not a valid triangle!");
};

________________________________________________________
//10. Beräkna elkostnad\\

const prompt = require("prompt-sync") ();
 
const kiloWatt = prompt("how many kilowatts has your house consumed? ");
let totalCost = 0;
 
if (kiloWatt <= 50) {
    totalCost += kiloWatt * 0.5;
}else if (kiloWatt <= 100) {
    totalCost += kiloWatt * 0.77;
}else if (kiloWatt >= 250) {
    totalCost += kiloWatt * 1.7 + (totalCost * 0.8);
};
 
console.log(`Your total cost will be ${totalCost} SEK`);

________________________________________________________
//1. Första 10 naturliga tal\\

for (i = 1; i <= 10; i++) {
    console.log(i);
};

________________________________________________________
//2. Första n naturliga tal\\

const prompt = require("prompt-sync")();
const n = parseInt(prompt("Input a number: "));

for (i = 1; i <= n; i++) {
    console.log(i);
};

________________________________________________________
//3. Summa\\

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Input a number: "));

console.log(number * (number + 1) / 2)

________________________________________________________
//4. Multiplikationstabellen\\

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Input a number: "));

for (i = 1; i <= 10; i++) {
    console.log(number, "*", i, "=", number * i);
};

________________________________________________________
//5. Pattern 1\\

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Input a number: "));
let i = 0;

while (i < number) {
    i++;
    console.log("#".repeat(number));
};

________________________________________________________
//6. Pattern 2\\

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Input a number: "));
let string = "";
let i = 1

while(i <= number) {
    let j = 1;
    while (j <= number - i + 1) {
        string += number - j - i + 2;
        j++;
    };
    string += "\n";

    i++;
}

console.log(string);

________________________________________________________
//7. Palindrome\\

const prompt = require("prompt-sync")();
let userInput = prompt("Input a palindrome example (lol, 121): ");

const revVlaue = () => {
    const myStrVal = userInput.toString();
    const myRevVal = userInput.toString().split("").reverse().join("");

        if (myStrVal == myRevVal) {
            console.log(userInput, "is a palindrome");
        } else {
            console.log(userInput, "is not a palindrome");
        };
};

revVlaue();

________________________________________________________
//8. Permutation\\

const getPermutations = array => {

    const output = [];

    const swapInPlace = (arrayToSwap, indexA, indexB) => {
        const temp = arrayToSwap[indexA];
        arrayToSwap[indexA] = arrayToSwap[indexB];
        arrayToSwap[indexB] = temp;
    };

    const generate = (number, heapArray) => {
        if (number === 1) {
            output.push(heapArray.slice());
            return;
        };

        generate(number - 1, heapArray);

        for (let i = 0; i < number - 1; i++) {
            if (number % 2 === 0) {
                swapInPlace(heapArray, i, number - 1);
            } else {
                swapInPlace(heapArray, 0, number - 1);
            };

            generate(number - 1, heapArray);
        };
    };

    generate(array.length, array.slice());

    return output;
};


const myArray = [1, 2];
console.log(getPermutations(myArray));

________________________________________________________
//9. Pattern 3\\

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Give number: "));
let i = 1;

while (i <= number) {
    console.log("*".repeat(i++));
};
while (number >= 1) {
    console.log("*".repeat(--number));
};

________________________________________________________
//10. Fibonacci sequence\\

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Give a number: "));

function fibonacci(n) {
    const fib = [0, 1];
    let i = 2;
    while (i < n) {
        fib[i] = fib[i - 1] + fib[i - 2];
        i++;
    };
    return fib;
};

console.log(fibonacci(number));

________________________________________________________
//Array\\

const schoolSubjects = [
    "Computer technology and network technology",
    "Mathematic",
    "Network technology",
    "Swedish",
    "English",
    "Network communication",
    "Programming",
];

console.log("\nSchool subjects:")

for (let subject of schoolSubjects) {
    console.log(subject);
};

________________________________________________________
//Array.prototype.length()\\

const companies = ['Apple', 'Google', 'Microsoft', 'Meta'];

console.log(companies.length);

//Returnerar mängden element i en array eller en string

________________________________________________________
//Array.prototype.at()\\

const games = [
    "Minecraft",
    "Fall Guys",
    "Dota 2",
    "League of Legends",
    "Rocket League"
];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${games.at(index)}`);

index = -2;

console.log(`Using an index of ${index} item returned is ${games.at(index)}`);

//Array.prototype.at() metoden används för att returna värdet på en viss index i en array. Kan användas med negativa tal

________________________________________________________
//Array.prototype.concat(concatArray)\\

const countries = ['Sweden', 'Iran', 'United States of America'];
const countryCodes = ['+46', '+98', '+1'];
const mergedArray = countries.concat(countryCodes);

console.log(mergedArray);

//Sammanfogar 2 eller fler arrays med varandra 

________________________________________________________
//Array.prototype.copyWithin(target, start, end)\\

const bestCompanies = ['Tesla', 'Google', 'Microsoft', 'AMD', 'Apple'];
console.log(bestCompanies)

console.log(bestCompanies.copyWithin(0, 2));
console.log(bestCompanies.copyWithin(0, 2, 3));

// copyWithin(target, start, end) target är den index man ville klistra in det man kopierat, start är den index då man vill kopiera, end är den index få man vill avsluta kopieringen kan likna att man markerar texten sedan (ctrl + C och ctrl + V) 

________________________________________________________
//Array.prototype.fill(value, start, end)\\

const ages = [18, 6, 16, 80, 68];

console.log(ages.fill(18, 1));

//Fyller array med 18 från index 1 i en array

________________________________________________________
//Array.prototype.flat(repeat)\\

const array = ["Food", "Cars", "Trees", [[["Cabbage", "Meat"]]]];

console.log(array.flat(2));

//Tar ut subarrays från deras nuvarande array x antal gånger

________________________________________________________
//Array.prototype.includes(searchIndex, start)\\

const numbers = [1, 2, 3];

console.log(numbers.includes(2)); // True
console.log(numbers.includes(17)); // False

const exoticAnimals = ['ape', 'racoon', 'bat'];

console.log(exoticAnimals.includes('ape')); // True

// Söker arrayen för att se ifall ett specifikt element existerar inuti den

________________________________________________________
//Array.prototype.indexOf(searchElement, fromIndex)\\

const movies = ['Athena', 'Prey', 'Jurassic World', 'Pinocchio', 'Spencer'];

console.log(movies.indexOf('Prey'));
console.log(movies.indexOf('Sune i Grekland'));

// Söker arrayen för att se ifall ett specifikt element existerar inuti den och sedan returnerar dess index värde
________________________________________________________
//Array.prototype.join(separator)\\

const devices = ['Computer', 'Smartphone', 'Laptop'];

console.log(devices.join());
console.log(devices.join(''));
console.log(devices.join('-'));

//Sammanfogar alla index till ett ord där man kan välja vad som ska vara mellan varje index

________________________________________________________
//Array.prototype.push(elementX)\\

const linuxDistributions = ['Zorin OS', 'Ubuntu', 'CuteFish OS'];

linuxDistributions.push('Manjaro', 'Kali', 'Deepin');
console.log(linuxDistributions);

// push() lägger till en eller flera element i en array och returnerar den nya array:en

________________________________________________________
//Array.prototype.pop()\\

const personalComputerBrands = ['Dell', 'HP', 'Lenovo', 'Asus', 'Vaio'];

console.log(personalComputerBrands.pop());
console.log(personalComputerBrands);

//pop() tar bort det sistsa elementet i en array och returnerar värdet på det sistsa elementet

________________________________________________________
//Array.prototype.slice(start, end)\\

const phones = ['iPhone 14', 'Google Pixel 7', 'Samsung S22', 'ASUS ROG', 'Xiaomi'];

console.log(phones.slice(0, 2));

//Med slice() kan man välja vad för något i en array man vill ha genom att ange ett startvärde eller startvärde & slutvärde

________________________________________________________
//Array.prototype.sort(compareFn)\\

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers);

//sort() har möjligheten att sortera månader, bokstäver och nummer i kronologisk ordning.

________________________________________________________
//Array.prototype.splice(start, deleteCount, item1, item2, itemN)\\

const dishes = ['Djoje kabab', 'Kabab koobideh', 'Gheimeh', 'Baghali Polo'];
dishes.splice(2, 2, 'Havij polo', 'Ghorme sabzi');
console.log(dishes);

// splice(start, deleteCount) använder man om man vill byta elemement med något annat. Den lägger först till ditt element sedan kan man välja hur många element efter start-indexen som skall raderas

________________________________________________________
//Skapa en funktion som lägger till ett element i en array och returnerar arrayen\\
 
const prompt = require("prompt-sync")();
 
function returnNewArray(array, userInput) {
    return array.push(userInput);
};
 
console.log(returnNewArray([], prompt("Input something in your new string: ")));

________________________________________________________
//Skapa en funktion som tar ut det sista elementet i en array\\
 
function removeLastElement(array) {
    return array.pop();
};
 
const array = [5, 4, 2, 1]
 
console.log(removeLastElement(array))

________________________________________________________
//Skapa en funktion som tar in en array av bokstäver och lägger ihop dem till en sträng\\
 
function joinCharactersInArray(array) {
    return array.join('');
};
 
const array = ["G", "O", "O", "G", "L", "E"];
 
console.log(joinCharactersInArray(array))

________________________________________________________
//Skapa en funktion som konverterar en array med siffror i meter till kilometer\\
 
function convertMeterToKilometer(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`${array[i] / 1000} km`);
    };
    return newArray;
};
 
const meterArray = [100, 1000];
 
console.log(convertMeterToKilometer(meterArray));

________________________________________________________
//Skapa en funktion som tar summan av siffror i en array.\\
 
let sum = 0;
 
function sumArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    };
    return sum;
};
 
const numbers = [100, 20, 3];
 
console.log(sumArray(numbers));

________________________________________________________
//Objects\\

function personFunction(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
};

const person1Function = new personFunction("Ramin Samadi", 17, `${170} cm`);
console.log(person1Function);

class person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    };
};

const person1 = new person("Ramin Samadi", 17, `${170} cm`);
console.log(person1);

________________________________________________________
//1. Skapa objekt för bilar med dessa attribut. De skapas på olika sätt\\

const cars = {
    car1: {brand: "Volvo", model: "s60", year: 2019, owner: "Dag John"},
    car2: {brand: "Mercedes", model: "s60", year: 2021, owner: "Halv Frej"},
    car3: {brand: "BMW", model: "i8", year: 2022, owner: "Evert Orvar"},
};

________________________________________________________
//2. Använd en for loop för att skriva ut attributen av bilarna\\

const cars = {
    car1: {brand: "Volvo", model: "s60", year: 2019, owner: "Dag John"},
    car2: {brand: "Mercedes", model: "s60", year: 2021, owner: "Halv Frej"},
    car3: {brand: "BMW", model: "i8", year: 2022, owner: "Evert Orvar"},
};
 
for (let car in cars) {
    console.log(`Det här är en ${cars[car].brand} ${cars[car].model} tillverkat år ${cars[car].year} och föraren är ${cars[car].owner}`);
};

________________________________________________________
//3. Skapa nu objekten med hjälp av en constructor function\\

function Car(brand, model, year, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.owner = owner;
};
 
const cars = {
    1: new Car("Volvo", "s60", 2019, "Dag John"),
    2: new Car("Mercedes", "s60", 2021, "Halv Frej"),
    3: new Car("BMW", "i8", 2022, "Evert Orvar")
};

________________________________________________________
//4. Skapa en klass som representerar en cirkel och kan beräkna area och omkretsen av en cirkel\\

class Circle {
    constructor(radius) {
        this.radius = radius;
    };
 
    getArea() {
        return (3.14 * Math.pow(this.radius, 2)).toFixed(2);
    };
 
    getCircumference() {
        return (2 * 3.14 * this.radius).toFixed(2);
    }
};

________________________________________________________
//5. Skapa en funktion som tar en array med cirkel objekt och returnerar cirklar med area större än 350\\

class Circle {
    constructor(radius) {
        this.radius = radius;
    };
 
    getArea() {
        return (3.14 * Math.pow(this.radius, 2)).toFixed(2);
    };
 
    getCircumference() {
        return (2 * 3.14 * this.radius).toFixed(2);
    }
};
 
const circles = [
    new Circle(500), new Circle(1), new Circle(103)
];
 
function areaLargerThan350() {
    for (let i = 0; i < circles.length; i++) {
        if (circles[i].getArea() > 350) {
            console.log(`index ${i} of the circle's area which is equal to ${circles[i].getArea()} is larger than 350`);
        };
    };
} ;
 
areaLargerThan350();
*/

console.log("Hello World!");