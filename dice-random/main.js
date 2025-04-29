// let age = 20;

// let firstName = "Bro";
// let favoriteFood = "pizza";
// let email = "Khetso@gmail.com"
// console.log(typeof firstName);


// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favoriteFood}`);
// console.log(`Your email is ${email}`);
// console.log(firstName);

// let online =  false;
// let forSale =  true;
// let isStudent = true;

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// let fullName = "Khet";
// let age = 20;
// let student = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age}`;
// document.getElementById("p3").textContent = `Enrolled: ${student}`;

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// students = students % 3; mod
//let extraStudents = students % 3;

// students += 3;
// students -= 3;
// students *= 3;
// students /= 3;
// students **= 3;
// students %= 3;

// console.log(students);

// let result = 1 + 2 * 3 + 4 ** 2;
// let result = 12 % 5 + 8 / 2;
// let result = 6 / 2 ** (2 + 5);

// console.log(result);

// let username;

// username = window.prompt("What's your username?");

// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }   

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// let x = "0";
// let y = "0";
// let z = "0";

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// radius = window.prompt('Enter the radius of a circle');
// const PI = 3.14159;
// let radius;
// let circumference;

// PI = 420.69;

// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + "cm";
// }
// console.log(circumference);

//Counter program
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
//     console.log(countLabel)
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
//     console.log(countLabel)
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
//     console.log(countLabel)
// }


// console.log(Math.PI);
// console.log(Math.E);

// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(x); up
// z = Math.floor(x); down
// z = Math.ceil(x); up
// z = Math.trunc(x); down
// z = Math.pow(x, y); *
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x); only positive number
// z = Math.sign(x); positive is 1 negative is -1 0 is 0
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);

// Random Number Generator

// let randomNum = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum);

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 10;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

// let age = 13;

// if(age >= 18){
//     console.log("You are old enough to enter this site");
// }
// else{
//     console.log("You must be 18+ to enter this site");
// }

// let time = 14;

// if(time < 12){
//     console.log("Good morning!");
// }
// else{
//     console.log("Good afternoon!");
// }

// let isStudent = true;

// if(isStudent){
//     console.log("You are a student!")
// }
// else[
//     console.log("You are NOT a student!")
// ]

// let hasLicense = false;


// if(age >= 16){
//     console.log("You are old enough to drive");

//     if(hasLicense){
//         console.log("You have your license!")
//     }
//     else{
//         console.log("You do not have your license yet!")
//     }
// }
// else{
//     console.log("You must be 16+ to have a license!");
// }

// let age = 0;

// if(age >= 100){
//     console.log("Your are TOO OLD to enter this site")
// }
// else if(age == 0){
//     console.log("You can't enter. You were just born.")
// }
// else if(age >= 18){
//     console.log("You are old enough to enter this site")
// }
// else if(age < 0){
//     console.log("Your age can't be below 0")
// }
// else{
//     console.log("You must be 18+ to enter this site")
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){

//     age = Number(myText.value);

//     if(age >= 100){
//         resultElement.textContent = "Your are TOO OLD to enter this site";
//     }
//     else if(age == 0){
//         resultElement.textContent = "You can't enter. You were just born.";
//     }
//     else if(age >= 18){
//         resultElement.textContent = "You are old enough to enter this site";
//     }
//     else if(age < 0){
//         resultElement.textContent = "Your age can't be below 0";
//     }
//     else{
//         resultElement.textContent = "You must be 18+ to enter this site";
//     }
// }

// Checkbox
// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){

//     if(myCheckBox.checked){
//         subResult.textContent = "You are subscribed!";
//     }
//     else{
//         subResult.textContent = " You are NOT subscribed!"
//     }
    
//     if(visaBtn.checked){
//         paymentResult.textContent = "You are paying with Visa"
//     }
//     else if(masterCardBtn.checked){
//         paymentResult.textContent = "You are paying with MasterCard"
//     }
//     else if(payPalBtn.checked){
//         paymentResult.textContent = "You are paying with PayPal"
//     }
//     else{
//         paymentResult.textContent = "You must select a payment type "
//     }
// }

// let age = 19;
// let message = age >= 18 ? "You're an adult" : "You're a minor";
// console.log(message);

// let message;

// if(age >= 18){
//     message = "You're an adult";
// }
// else{
//     message = "You're a minor";
// }

// let time = 8;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

// let day = 1;

// if(day == 1){
//     console.log("It is Monday");
// }
// else if(day == 2){
//     console.log("It is Tuesday");
// }
// else if(day == 3){
//     console.log("It is Wednesday");
// }
// else if(day == 4){
//     console.log("It is Thursday");
// }
// else if(day == 5){
//     console.log("It is Friday");
// }
// else if(day == 6){
//     console.log("It is Saturday");
// }
// else if(day == 7){
//     console.log("It is Sunday");
// }
// else{
//     console.log(`${day} is not a day`);
// }

// let day = 9;

// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break
//     case 2:
//         console.log("It is Tuesday");
//         break
//     case 3:
//         console.log("It is Wednesday");
//         break
//     case 4:
//         console.log("It is Thursday");
//         break
//     case 5:
//         console.log("It is Friday");
//         break
//     case 6:
//         console.log("It is Saturday");
//         break
//     case 7:
//         console.log("It is Sunday");
//         break
//     default:
//         console.log(`${day} is not a day`);
// }

// let testScore = 90;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     default:
//         letterGrade = "F";
// }
// console.log(letterGrade);

// let userName = "BroCode";

// userName.charAt(0);
// userName.indexOf("B");
// userName.charAt("o");
// userName.length
// userName.trim()

// console.log(userName.charAt(1));
// console.log(userName.indexOf("B"));
// console.log(userName.lastIndexOf("o"));
// console.log(userName.length);
// console.log(userName.trim());
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.repeat(3));
// console.log(userName.startsWith(" "));

// // let result = userName.startsWith(" "); ' 'brocode
// let result = userName.endsWith(" "); brocode' '
// let result = userName.includes(" "); bro code

// if(result){
//     console.log("Your username can't begin with ' '");
// }
// else{
//     console.log(userName);
// }

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", "");
// console.log(phoneNumber);

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.padStart(15, "0");
// console.log(phoneNumber);

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.padEnd(15, "0");
// console.log(phoneNumber);

// const fullName = "Broseph Code";

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(3, 8)

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-3);

// let firstName = fullName.slice(0, fullName.indexOf(" "))
// let lastName = fullName.slice(fullName.indexOf(" ") + 1)

// console.log(firstName);
// console.log(lastName);

// const email = "Bro1@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(username);
// console.log(extension);

// let username = window.prompt("Enter your username:");

// No method chaining

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

// Method chaining

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase(); 

// console.log(username);

// const temp = -1;

// if(temp > 0 && temp <= 30){
//     console.log("The weather is GOOD");
// }
// else{
//     console.log("The weather is BAD");
// }

// if(temp <= 0 || temp > 30){
//     console.log("The weather is GOOD");
// }
// else{
//     console.log("The weather is BAD");
// }

// const isSunny = false;

// if(isSunny){
//     console.log("It is SUNNY");
// }
// else{
//     console.log("It is CLOUDY")
// }

// const isSunny = true;

// if(!isSunny){
//     console.log("It is CLOUDY");
// }
// else{
//     console.log("It is SUNNY")
// }

// = assign operator 
// == compare operator if value are equal
// === strict equality operator if value and data type are equal
// != inequality operator
// !== strict inequality operator

// const PI = 3.14;

// if(PI == "3.14"){ 
//     console.log("That is Pi")
// }
// else{
//     console.log("That is NOT Pi")
// }

// const PI = 3.14;

// if(PI === "3.14"){ 
//     console.log("That is Pi")
// }
// else{
//     console.log("That is NOT Pi")
// }

// const PI = 3.14;

// if(PI != "3.14"){ 
//     console.log("That is NOT Pi")
// }
// else{
//     console.log("That is Pi")
// }

// // const PI = 3.14;

// if(PI !== "3.14"){ 
//     console.log("That is NOT Pi")
// }
// else{
//     console.log("That is Pi")
// }

// let username = "";

// while(username === "" || username === null){
//     username = window.prompt("Enter your name");
//     // console.log("You didn't enter your name");
// }

// console.log(`Hello ${username}`);

// let username;

// do{
//     username = window.prompt("Enter your name");
// }while(username === "" || username === null)
//     // console.log("You didn't enter your name");


// console.log(`Hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if(username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     }
//     else{
//         console.log("Invalid credentials! Please try again")
//     }
// }

// do{
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if(username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     }
//     else{
//         console.log("Invalid credentials! Please try again")
//     }
// }while(!loggedIn)

// for(let i = 0; i <= 2; i++){
//     console.log("Hello");
// }

// for(let i = 1; i <= 20; i++){

//     if(i == 13){
//         break;
//         // continue;
//     }
//     else{
//         console.log(i);
//     }
// 

// Guess number
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// console.log(answer);

// while(running){

//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Please enter a valid number");
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert("TOO LOW! TRY AGAIN!");
//         }
//         else if(guess > answer){
//             window.alert("TOO HIGH! TRY AGAIN!");
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}, It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// }

// function happyBirthday(username, age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday dear ${username}!`);
//     console.log("Happy birthday to you!");
//     console.log(`You are ${age} years old`);
// }

// happyBirthday("Brocode", 25);
// happyBirthday("Spongebob", 30);
// happyBirthday("Patrick", 37);

// function add(x, y){
//     let result = x + y;
//     return result;
// }
// function subtract(x, y){
//     return x - y;
// }
// function multiply(x, y){
//     return x * y;
// }
// function divide(x, y){
//     return x / y;
// }
// function isEven(number){

    // return number % 2 === 0 ? true : false;

    // if(number % 2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
// }

// function isValidEmail(email){

//     // if(email.includes("@")){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return email.includes("@") ? true : false;
// }




// console.log(isValidEmail("Bro@fake.com"));


// let answer = add(2, 3);
// console.log(divide(2, 3));

// function1();
// function2();

// function function1(){
//     let x = 1;
//     console.log(x);
// }

// function function2(){
//     let x = 1;
//     console.log(x);
// }

//temperature

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert(){

//     if(toFahrenheit.checked){
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if(toCelsius.checked){
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5 / 9);
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else{
//         result.textContent = "Select a unit";
//     }
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.shift(); remove beginning
// fruits.unshift("mango") add first
// fruits.push("coconut"); add end
// fruits.pop(); remove end
// fruits[0] = "coconut";
// let numOfFruits = fruits.length;
// let index = fruits.indexOf("orange");

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let i = fruits.length - 1; i >= 0 ; i--){
//     console.log(fruits[i]);
// } reverse

// for(let fruit of fruits){
//     console.log(fruit);
// } cheating like a fruit(subset) of fruits meat of meats too

// fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }


// console.log(numOfFruits);
// console.log(index);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(minimum);

// let username = "Bro Code";
// let letters = [...username].join("-");

// console.log(letters);

// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "celery", "potatoes"];

// let foods = [...fruits, ...vegetables, "egg", "milk"];


// console.log(foods);

// function openFridge(...foods){
//     console.log(...foods)
// }
// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// // openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods)

// function sum(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const total = sum(1, 2, 3, 4,5);

// console.log(`Your total is $${total}`);

// function getAverage(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAverage(75, 100, 85, 90 ,50);

// console.log(total);

// function combineStrings(...strings){
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

// console.log(fullName);


// rolldice
// function rollDice(){

//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images =[];

//     for(let i = 0; i < numOfDice; i++){
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="img/${value}.png" alt="Dice ${value}">`);
//     }
//     diceResult.textContent = `dice: ${values.join(', ')}`;
//     diceImages.innerHTML = images.join('');
// }

// generatePassword waitfor html and css
// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+-=";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     if(length <= 0){
//         return `(password length must be at least 1)`;
//     }
//     if(allowedChars.length === 0){
//         return `(At least 1 set of character needs to be selected)`;
//     }

//     for(let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }

//     return password;
// }

// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, 
//                                     includeLowercase,
//                                     includeUppercase,
//                                     includeNumbers,
//                                     includeSymbols);

// console.log(`Generated password: ${password}`);

// callback argument interacting with database network requests reading a file

// hello(wait);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function wait(){
//     console.log("Wait!");
// }

// function leave(){
//     console.log("Leave!");
// }

// function goodbye(){
//     console.log("Goodbye!");
// }

// sum(displayPage, 1, 2);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }
// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

//run through each element in array and do function
// let numbers = [1, 2, 3, 4, 5];

//run this function to update array
// numbers.forEach(cube);
//run this to show new update array
// numbers.forEach(display);

//update array by multiple 2 = [2, 4, 6, 8, 10]
// function double(element, index, array){
//     array[index] = element * 2;
// }
//update array by multiple 3 = [3, 6, 9, 12, 15]
// function triple(element, index, array){
//     array[index] = element * 3;
// }
//update array by math.pow() 2 = [1, 4, 9, 16, 25]
// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }
//update array by math.pow() 3 = [1, 8, 27, 64, 125]
// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }
//show new numbers run through [2, 4, 6, 8, 10] and show
// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// //make letter in array to upper case
// fruits.forEach(capitalize);
// //display new upper letter
// fruits.forEach(display);
// //upper letter
// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// //lower letter
// function lowercase(element, index, array){
//     array[index] = element.toLowerCase();
// }
// //big FIRST letter
// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// //display array
// function display(element){
//     console.log(element);
// }

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(numbers);
// console.log(cubes);


// function square(element){
//     return Math.pow(element, 2);
// }

// function cube(element){
//     return Math.pow(element, 3);
// }

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsUpper);

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}}`;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }

// const ages = [16, 17, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);

// console.log(adults);
// console.log(children);

// function isAdult(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }

// const words = ["apple", "orange", "banana", "kiwi",
//                 "pomegranate", "coconut"];
// const shortWords = words.filter(getShortWords);

// console.log(shortWords);

// function getShortWords(element){
//     return element.length <= 6;
// }

