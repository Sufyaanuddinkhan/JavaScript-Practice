// PROBLEM 1
// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// PROBLEM 2
// for (let i = 2; i <= 20; i += 2){
//     console.log(i)
// }

// PROBLEM 3
// for (let i = 10; i >= 1; i--){
//   console.log(i)
//   if (i == 1) {
//   console.log("Blast Off!!!");
//   }
// }

// PROBLEM 4
// const a = 7

// for (let i = 1; i <= 12; i++){
//   let prod = a * i
//   sevenTable = `${a} x ${i} = ${prod}`
//   console.log(sevenTable)
// }

// PROBLEM 5
// let sum = 0;
// for (let i = 1; i <= 20; i++){
//   sum += i;
// }
//   console.log(sum);

// PROBLEM 6
// for (let i = 1; i <= 4; i++){
//   let output =""
//   for (let j = 1; j <= 4; j++){
//     output += j + " "
//   }
//   console.log(output)
// }

// PROBLEM 7
// for (let i = 1; i <= 5; i++) {
//   let pattern = "";

//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }

//   console.log(pattern);
// }

// PROBLEM 8
// let num = 1
// while (num <= 5) {
//     console.log(num)
//     num++;
// }

// PROBLEM 9
// let sum = 0
// let num = 1
// let count = 0
// while (sum <= 50) {
//     sum += num
//     count++
//     num++
// }
// console.log(sum)
// console.log(count)

// PROBLEM 10
// let choice;

// do {
//     choice = prompt("Menu: Type 'hello' or 'exit' ")

//     if (choice==="hello") {
//         console.log("Hello to you too!")
//     } else if (choice === "exit") {
//         console.log("Goodbye")
//     } else {
//         console.log("Invalid Option, Try again")
//     }
// } while (choice !== "exit")

// PROBLEM 11
// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("First number divisible by both 3 and 5 is: " + i)
//         break;
//     }
// }

// PROBLEM 12
// for (let i = 1; i <= 10; i++){
//     if (i === 3 || i === 6 || i === 9) {
//         continue;
//     }
//     console.log(i);
// }

// PROBLEM 13
// let cities = ["Mumbai", "Delhi", "Banglore", "Chennai", "Kolkata"]

// cities.forEach((city, index) => {
//     console.log(`${index} : ${city}`)
// });

// PROBLEM 14
// let numbers = [10, 25, 30, 45, 20]
// let sum = 0

// for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// }
// console.log(sum);

// PROBLEM 15
// let scores = [78, 92, 85, 99, 88, 76]

// let maxScore = Math.max(...scores);

// console.log(maxScore)

// PROBLEM 16
// let teams = [
//     ["Alice", "Bob"],
//     ["Charlie", "David"],
//     ["Eve", "Frank"]
// ];

// for (let i = 0; i < teams.length; i++){
//     for (let j = 0; j < teams[i].length; j++){
//         console.log(teams[i][j])
//     }
// }

// PROBLEM 17
// let fruits = ["Apple", "Banna", "Orange", "Mango"]

// for (fruit of fruits) {
//     console.log(fruit)
// }

// PROBLEM 18
// let word = "LOOP"

// for (letter of word) {
//     console.log(letter)
// }

// PROBLEM 19
// let sentence = "JavaScript is Awesome"
// let vowels = "aeiou"
// let count = 0

// for (let char of sentence.toLowerCase()) {
//     if (vowels.includes(char)) {
//         count++;
//     }
// }

// console.log("Number of Vowels:", count)

// PROBLEM 20
// for (let i = 1; i <= 30; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// PROBLEM 21
// let original = [10, 20, 30, 40, 50]
// let reversed = [];

// let length = original.length

// for (let i = 0; i < length; i++){
//     nums = original.pop()
//     reversed.push(nums);
// }

// console.log(reversed);