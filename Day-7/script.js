// section 1
// Q1
// function printedPattern() {
//     console.log("*")
//     console.log("*")
//     console.log("*")
//     console.log("****")
//     console.log("****")
// }
// printedPattern()

// Q2
// function studentInfo() {
//     let info = {
//         name: "John Doe",
//         Age: 23,
//         Course:"JavaScript"
//     }
//     console.log(info)
// }

// studentInfo()
// studentInfo();
// studentInfo();

// section 2
// Q1
// function multiplyThree(a, b, c) {
//     let product = a * b * c;
//     console.log(product);
// }

// multiplyThree(2, 3, 4)
// multiplyThree(5, 5, 2);

// Q2
// function isEligibleToVote(name, age) {
//     if (age >= 18) {
//         console.log(`${name} is eligible to vote`)
//     } else {
//         console.log(`${name} is not eligible to vote`)
//     }
// }

// isEligibleToVote("Alice", 21)
// isEligibleToVote("Bob", 12)

// section 3
// Q1
// function findLargest(a, b) {
//     let max = Math.max(a, b)
//     console.log(max)
// }

// findLargest(40, 25);

// Q2
// function calculatedDiscount(originalPrice, discountPercentage) {
//     let discountAmt = (originalPrice * discountPercentage) / 100;
//     let finalPrice = originalPrice - discountAmt;
//     console.log(finalPrice)
// }

// calculatedDiscount(500, 10)
// calculatedDiscount(100, 20);

// section 4
// Q1
// let x = 10;

// function test() {
//     let x = 20;
//     console.log(x)
// }

// test();
// console.log(x)

// Q2
// function calculate() {
//     let result = 100;
//     return result
// }

// let answer = calculate
// console.log(answer)

// section 5
// Q1
// function outer() {
//     let message = "Hello"
//     function inner() {
//         console.log(message)
//     }
//     inner();
// }
// outer();

// Q2
// function parent() {
//     let a = 10;
//     function child() {
//         let b = 20;
//         console.log(a + b)
//         console.log(b)
//     }
//     child();
// }
// parent();

// section 6
// Q1
// function divide(a, b) {
//     return a / b;
// }

// answer = divide(10, 10);
// console.log(answer)

// Q2
// function celsiusToFarenheit(celsius) {
//     let conversion = (celsius * 9 / 5) + 32;
//     return conversion;
// }

// answer = celsiusToFarenheit(25);
// console.log(answer)

// section 7
// Q1
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;

// function executeOperation(a, b, operation) {
//     return operation(a, b);
// }

// console.log(executeOperation(5, 3, add));
// console.log(executeOperation(5, 3, multiply));

// Q2
// const sayHello = () => console.log("Hello!");

// function repeat(greet, n) {
//     for (let i = 0; i < n; i++){
//         greet();
//     }
// }

// repeat(sayHello, 4);

// section 8
// Q1
// const student = {
//     name: "Alice",
//     marks: [85, 90, 78, 92],
//     getAverage() {
//         let sum = 0;
//         this.marks.forEach(mark => {
//             sum += mark;
//         });
//         return sum / this.marks.length;
//     }
// };

// console.log(student.getAverage());

// Q2
// let rectangle = {
//     length: 10,
//     width: 5,
//     getArea() {
//         return area = this.length * this.width;
//     },
//     getPerimeter() {
//         return perimeter = 2 * (this.length + this.width);
//     }
// }

// console.log(rectangle.getArea());
// console.log(rectangle.getPerimeter());

