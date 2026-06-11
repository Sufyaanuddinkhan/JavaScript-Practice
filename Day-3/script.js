// PROBLEM 1
// let num = -5

// if (num < 0) {
//     console.log("This is a negative number")
// } else {
//     console.log("It is a postive number or ZERO")
// }

// PROBLEM 2
// let age = 17

// if (age >= 18) {
//     console.log("This person is eligible for Driver's License")
// } else {
//     console.log("This person is not eleigble for Driver's License")
// }

// PROBLEM 3
// let marks = 55

// if (marks >= 90) {
//     console.log("A Grade")
// } else if (marks >= 80 && marks <= 89) {
//     console.log("B Grade")
// } else if (marks >= 70 && marks <= 79){
//     console.log("C Grade")
// } else if (marks >= 60 && marks <= 69) {
//     console.log("D Grade")
// } else {
//     console.log("F Grade")
// }

// PROBLEM 4
// let userName = "admin"
// let userPassword = "12345"

// if (userName === "admin" && userPassword === "12345") {
//     console.log("Login Successfull")
// } else {
//     console.log("Login Failed")
// }

// PROBLEM 5
// let day = "Monday"

// if (day === "Saturday" || day === "Sunday") {
//     console.log("Weekend")
// } else {
//     console.log("Weekday")
// }

// PROBLEM 6
// let age = 25

// if (age < 12) {
//     console.log("Ticket Costs $5")
// } else if (age >= 12 && age < 60) {
//     console.log("Ticekt Costs $8")
// } else if (age >= 60) {
//     console.log("Ticket Costs $6")
// } else {
//     console.log("Wrong Age")
// }

// PROBLEM 7
// let orderTotal = 40
// let isPremium = true

// if (orderTotal > 50 || isPremium === true) {
//     console.log("Free Shipping")
// } else {
//     console.log("No Free Shipping")
// }

// PROBLEM 8
// let marks = 90

// if (marks >= 35) {
//     if (marks >= 80) {
//         console.log("Pass with distinction")
//     } else {
//         console.log("Pass")
//     }
// } if (marks < 33) {
//     console.log("Fail")
// }

// PROBLEM 9
// let temperature = 25
// let isRaining = false

// if (temperature > 30) {
//     console.log("Hot Day")
// } if (temperature >= 20 && temperature <= 30) {
//     if (isRaining === true) {
//         console.log("Pleasant but rainy")
//     } else {
//         console.log("Perfect weather")
//     }
// } if (temperature < 20) {
//     console.log("Cold Day")
// }

// PROBLEM 10
// let dayNum = 7

// switch (dayNum) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("Wrong Number Entered")
// }

// PROBLEM 11
// let signal = "yellow"

// switch (signal) {
//     case "red":
//         console.log("Stop")
//         break
//     case "yellow":
//         console.log("Caution")
//         break
//     case "green":
//         console.log("Go")
//         break
//     default:
//         console.log("Invalid Signal")
// }

// PROBLEM 12
// let month = 11

// switch (month) {
//     case 1:
//         console.log("Winter")
//         break
//     case 2:
//         console.log("Winter")
//         break
//     case 3:
//         console.log("Spring")
//         break
//     case 4:
//         console.log("Spring")
//         break
//     case 5:
//         console.log("Spring")
//         break
//     case 6:
//         console.log("Summer")
//         break
//     case 7:
//         console.log("Summer")
//         break
//     case 8:
//         console.log("Summer")
//         break
//     case 9:
//         console.log("Fall")
//         break
//     case 10:
//         console.log("Fall")
//         break
//     case 11:
//         console.log("Fall")
//         break
//     case 12:
//         console.log("Winter")
//         break
//     default:
//         console.log("Wrong Number Entered")
// }

// PROBLEM 13
// let userName = ""

// if (userName) {
//     console.log(userName)
// } else {
//     console.log("Please enter a usernam")
// }

// PROBLEM 14
// let score = 0

// if (score) {
//     console.log(score)
// } else {
//     console.log("No Score Yet")
// }

// PROBLEM 15
// let age = 20
// let isCitizen = true
// let hasVoted = false

// if (age >= 18 && isCitizen && hasVoted) {
//     console.log("You can Vote")
// } else {
//     console.log("You cannot vote")
// }

// PROBLEM 16
// let total = 120
// let isPremium = false

// if (isPremium) {
//     premiumDiscount = total * 0.2
//     finalPrice3 = total - premiumDiscount
//     console.log("After Discount Total is: ",finalPrice3 )
// } else if (total > 100) {
//     discount1 = total * 0.15
//     finalPrice1 = total - discount1
//     console.log("After 15% Discount Total is: ", finalPrice1)
// } else if (total > 50) {
//     discount2 = total * 0.1
//     finalPrice2 = total - discount2
//     console.log("After 10% Discount Total is: ", finalPrice2)
// } else {
//     console.log("No Discount")
// }

// PROBLEM 17
// let num = 15

// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz")
// } else if (num % 3 == 0) {
//     console.log("Fizz")
// } else if (num % 5 == 0) {
//     console.log("Buzz")
// } else {
//     console.log(num)
// }

// PROBLEM 18
// let age = prompt("Enter your Age: ")

// if (age >= 18) {
//     alert("You are eligible to vote")
// } else {
//     alert("You can't vote")
// }

// PROBLEM 19
// let num1 = prompt("Enter the first number: ")
// let num2 = prompt("Enter the second number: ")

// alert("1 - Additon \n 2 - Subtraction \n 3 - Multiplication \n 4 - Quotient \n")
// let selecOption = prompt("Select the Operation you want to perform: ")

// switch (selecOption) {
//     case "1":
//         add = num1 + num2
//         alert(add)
//         break
//     case "2":
//         sub = num2 - num1
//         alert(sub)
//         break
//     case "3":
//         prod = num1 * num2
//         alert(prod)
//         break
//     case "4":
//         div = num2 / num1
//         alert(div)
//         break
//     default:
//         alert("Wrong option selected")
// }

// PROBLEM 20
// let secretUserNumber = prompt("Guess the Number")
// let secretNumber = 10

// if (secretUserNumber == secretNumber) {
//     alert("CONGRATULATIONS!!!")
// } else if (secretNumber < secretUserNumber) {
//     alert("TOO HIGH!!")
// } else if (secretNumber > secretUserNumber) {
//     alert("TOO LOW!!")
// }

// PROBLEM 21
// let str = "Amazing"

// if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
//     console.log("Golden String")
// } else {
//     console.log("Not Golden")
// }

// PROBLEM 22
// let num1 = 45;
// let num2 = 67;
// let num3 = 52;

// if (num1 > num2 && num2 > num3) {
//     console.log("num1 is greatest");
// } else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is greatest");
// } else {
//     console.log("num3 is greatest");
// }

// PROBLEM 23
// let quarter = 12

// switch (quarter) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Quarter 1")
//         break
//     case 4:
//     case 5:
//     case 6:
//         console.log("Quarter 2")
//         break
//     case 7:
//     case 8:
//     case 9:
//         console.log("Quarter 3")
//         break
//     case 10:
//     case 11:
//     case 12:
//         console.log("Quarter 4")
//         break
//     default:
//         console.log("Wrong Number")
// }

// PROBLEM 24
// let userNumber = prompt("Enter a number: ")

// if (userNumber % 10 == 0) {
//     alert("GOOD!!")
// } else {
//     alert("BAD!!")
// }

// PROBLEM 25
// let num = 35

// if (num % 7 == 0 && num % 2 == 0) {
//     console.log("Specail Number")
// } else if (num % 7 == 0 && num % 2 == 1) {
//     console.log("Lucky Number")
// } else {
//     console.log("Regular Number")
// }

