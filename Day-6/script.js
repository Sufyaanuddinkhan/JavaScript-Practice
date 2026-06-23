// section 1
// Q1
// let car = {
//     brand: "Tesla",
//     model: "Model 3",
//     year: 2024,
//     color:"white"
// }
// console.log(car)

// Q2
// let movie = {
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010,
//     rating: 8.8
// }
// console.log(movie.director)
// console.log(movie.rating)

// section 2
// Q1
// let student = {
//     name: "John",
//     age: 20,
//     grade: "B"
// }

// student.grade = "A"
// student.city = "Mumbai"
// delete student.age

// console.log(student)

// Q2
// let product = {
//     name: "Laptop",
//     price: 50000
// }

// product.price = 45000
// product.brand = "Dell"
// product.inStock = true

// console.log(product)

// section 3
// Q1
// let classroom = {
//     teacher: {
//         name: "Ms.Smith",
//         subject: "Math"
//     },
//     student1: {
//         name: "Alice",
//         grade:"A"
//     },
//     student2: {
//         name: "Bob",
//         grade:"B+"
//     }
// }

// console.log(classroom.teacher.name)
// console.log(classroom.student1.grade)
// console.log(classroom.student2.grade)

// Q2
// let company = {
//     engineering: {
//         employees: 40,
//         manager:"John"
//     },
//     sales: {
//         employees: 25,
//         manager:"Sarah"
//     }
// }

// console.log(company.engineering.employees)
// console.log(company.sales.manager)

// company.engineering.employees = 45

// console.log(company)

// section 4
// Q1
// let students = [
//     {
//         studentId: 1,
//         name: "Emma",
//         age: 20,

//         grade: "A"
//     },
//     {
//         studentId: 2,
//         name: "Liam",
//         age: 21,
//         grade:"A+"
//     },
//     {
//         studentId: 3,
//         name: "Olivia",
//         age: 19,
//         grade:"A+"
//     }
// ]

// console.log(students[0].name)
// console.log(students[2].grade)
// console.log(students.length)

// Q2
// let products = [
//     {
//         id: 101,
//         name: "Phone",
//         price:30000
//     },
//     {
//         id: 102,
//         name: "Laptop",
//         price:55000
//     },
//     {
//         id: 103,
//         name: "Tablet",
//         price:20000
//     }
// ]

// console.log(products[1].name)
// console.log(products[0].price)

// products[3] = {
//     id: 104,
//     name: "Smartwatch",
//     price:15000
// }

// console.log(products)
// console.log(products.length)

// section 5
// Q1
// let posts = [
//     {
//         username: "tech_guru",
//         content: "Learning JavaScript!",
//         likes: 150
//     },
//     {
//         username: "code_ninja",
//         content: "Arrays are Awesome",
//         likes:200
//     }
// ]

// console.log(posts[0])
// console.log(posts[1].likes)

// posts[0].likes = 175

// console.log(posts)

// Q2
// let courses = [
//     {
//         name: "JavaScript",
//         duration: 40,
//         instructor:"John"
//     },
//     {
//         name: "Python",
//         duration: 35,
//         instructor:"Sarah"
//     },
//     {
//         name: "React",
//         duration: 30,
//         instructor:"Mike"
//     }
// ]

// console.log(courses[1].instructor)
// console.log(courses[0].duration)

// courses[2].duration = 32

// console.log(courses[0], courses[1], courses[2])
// console.log(courses)

// section 6
// Q1
// console.log("PI Value is = ",Math.PI)

// console.log("Answer of 2 to the power 5 is = ",Math.pow(2, 5))

// console.log("The Absolute value of -25 is = ", Math.abs(-25))

// Q2
// console.log(Math.floor(7.8))

// console.log(Math.ceil(7.2))

// console.log(Math.pow(3, 4))

// console.log(Math.abs(-100))

// section 7
// Q1
// console.log(Math.random())

// console.log(Math.random(0, 10))

// console.log(Math.random(0, 100))

// Q2
// let random = Math.random()

// let mulFive = random * 5

// let mulTwen = mulFive * 20

// console.log("Random decimal = ",random)
// console.log("That decimal Multiplied by 5 = ",mulFive)
// console.log("That decimal multiplied by 20 = ", mulTwen)

// section 8
// Q1
// let step1 = Math.random()

// let step2 = step1 * 10

// let step3 = Math.floor(step2)

// let step4 = step3 + 1

// console.log(step1)
// console.log(step2)
// console.log(step3)
// console.log(step4)

// Q2
// console.log(Math.random(1, 10))
// console.log(Math.random(1, 10));
// console.log(Math.random(1, 10));

// section 9
// Q1
// let randNum1 = Math.floor(Math.random() * 100) + 1

// let randNum2 = Math.floor(Math.random() * 6) + 1;

// let randNum3 = Math.floor(Math.random() * 5) + 1;

// console.log(randNum1);
// console.log(randNum2);
// console.log(randNum3);

// Q2
// let randDiceRoll = Math.floor(Math.random() * 6) + 1

// let randDay = Math.floor(Math.random() * 7) + 1

// let randAge = Math.floor(Math.random() * (18 - 25 + 1)) + 18

// console.log(randDiceRoll);
// console.log(randDay);
// console.log(randAge)

// section 10
// Q1
// let randNum1 = Math.floor(Math.random() * (10 - 5 + 1)) + 5

// let randNum2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50

// let randNum3 = Math.floor(Math.random() * (1000 - 1 + 1)) + 1

// console.log(randNum1);
// console.log(randNum2);
// console.log(randNum3);

// Q2
// let randNum1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

// let randNum2 = Math.floor(Math.random() * (40 - 10 + 1)) - 10;

// let randNum3 = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

// console.log(randNum1);
// console.log(randNum2);
// console.log(randNum3);

// section 11
// Q1
// let colors = ["red", "green", "blue", "yellow", "purple"];

// let randColor = Math.floor(Math.random() * colors.length);

// console.log(colors[randColor])

// Q2
// let foods = ["Pizza", "Burger", "Pasta", "Sushi"];

// let randFood = Math.floor(Math.random() * foods.length);

// console.log(foods[randFood])

// section 12
// Q1
// let players = [
//     { name: "Alice", score: 0 },
//     { name: "Bob", score: 0 },
//     { name: "Charlie", score: 0 }
// ];

// players[0].score = Math.floor(Math.random() * 6) + 1;
// players[1].score = Math.floor(Math.random() * 6) + 1;
// players[2].score = Math.floor(Math.random() * 6) + 1;

// console.log(players)

// Q2
// let products = [
//     { name: "laptop", price: 20000, discount: 0 },
//     { name: "Phone", price: 50000, discount: 0 }
// ]

// products[0].discount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
// products[1].discount = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

// console.log(products)

// section 13
// Q1
// let game = {
//     player1: { name: "Alice", health: 100, damage: 0 },
//     player2: { name: "Bob", health: 100, damage: 0 }
// }

// game.player1.damage = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
// game.player2.damage = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

// console.log(game)

// Q2
// let weather = {
//     monday: { temp: 0, humidity: 0 },
//     tuesday: { temp: 0, humidity: 0 }
// }

// weather.monday.temp = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
// weather.monday.humidity = Math.floor(Math.random() * (80 - 40 + 1)) + 40;

// weather.tuesday.temp = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
// weather.tuesday.humidity = Math.floor(Math.random() * (80 - 40 + 1)) + 40;

// console.log(weather)

// section 14
// Q1
// let students = [
//     { name: "Emma", math: 0, science: 0 },
//     { name: "Liam", math: 0, science: 0 },
//     { name: "Olivia", math: 0, science: 0 }
// ];

// students[0].math = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
// students[0].science = Math.floor(Math.random() * (100 - 60 + 1)) + 60;

// students[1].math = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
// students[1].science = Math.floor(Math.random() * (100 - 60 + 1)) + 60;

// students[2].math = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
// students[2].science = Math.floor(Math.random() * (100 - 60 + 1)) + 60;

// console.log(students)

// Q2
// let tickets = [];

// for (let i = 0; i <= 5; i++) {
//     tickets.push(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);   
// }

// console.log("Tickets: ", tickets);

// let winNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000

// console.log("Winning Number: ", winNumber)

