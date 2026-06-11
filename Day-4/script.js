// Day - 4
// section 1
// Q1
// let userInput = "  HeLLo JaVaScRiPt  "
// console.log(userInput)

// let cleanInput = userInput.trim()
// console.log(cleanInput)
// let lowerCase = cleanInput.toLowerCase();
// console.log(lowerCase)

// Q2
// let email = " USER@EXAMPLE.COM "

// let clean = email.trim().toLowerCase()

// console.log(clean)

// section 2
// Q1
// let sentence = "JavaScript is awesome and JavaScript is fun"

// console.log("Position of the word awesome: ",sentence.indexOf("awesome"))
// console.log("First Occurence of the word JavaScript: ",sentence.indexOf("JavaScript"))
// console.log("Trying to Finf the word Python: ", sentence.indexOf("python"))

// Q2
// let message = "Welcomr to coding class"

// if (message.indexOf("coding")) {
//     console.log("Found coding")
// } else {
//     console.log("Coding not found")
// }

// section 3
// Q1
// let userData = "  MESSY iNpuT  "

// processedData = userData.trim().toLowerCase()

// console.log(userData)
// console.log(processedData)

// Q2
// let password = "  MyP@ssw0rd123  "

// securePassword = password.trim().toUpperCase().slice(0, 7)

// console.log(securePassword)

// section 4
// Q1
// let fullName = "Alexander Hamilton"

// firstName = fullName.slice(0, 10)
// lastName = fullName.slice(10)

// console.log(firstName)
// console.log(lastName)

// Q2
// let phone = "9876543210"

// areaCode = phone.slice(0, 4)
// lastFour = phone.slice(-4)

// console.log(areaCode)
// console.log(lastFour)

// section 5
// Q1
// let announcement = "The event will happen on Monday and Monday only"

// updatedAnnouncement = announcement.replace("Monday", "Friday")

// console.log(updatedAnnouncement)

// Q2
// let tempelate = "Hello NAME, welcome to our webstie"

// personalizedMessage = tempelate.replace("NAME", "Alice")

// console.log(personalizedMessage)

// section 6
// Q1
// let colors = ["red", "green", "blue", "yellow"]

// console.log(colors)

// console.log(colors[0])

// console.log(colors[colors.length - 1])

// console.log(colors.length)

// Q2
// let scores = [85, 92, 78, 90, 88]

// console.log(scores[2])

// scores.unshift(95)

// console.log(scores)

// sum = scores[0] + scores[1];
// console.log(sum)

// section 7
// Q1
// let playlistarr = []

// playlistarr.push("Song1")
// playlistarr.push("Song2")

// remLast = playlistarr.pop()

// playlistarr.unshift("Song0")

// console.log(playlistarr)
// console.log(remLast)

// Q2
// let queue = ["First", "Second", "Third"]

// served = queue.shift()

// queue.push("Fourth")

// queue.shift()

// console.log(queue)
// console.log(served)

// section 8
// Q1
// let fruits = ["apple", "banana", "mango", "orange", "banana"]

// console.log(fruits.indexOf("mango"))
// console.log(fruits.indexOf("banana"))
// console.log(fruits.indexOf("grape"))

// Q2
// let inventory = ["laptop", "mouse", "keyboard", "monitor", "printer"]

// if (inventory.includes("mouse") || inventory.includes("printer") ) {
//     console.log("Mouse is available")
//     console.log("Printer is not available")
// } else {
//     console.log("WRONG")
// }

// section 9
// Q1
// let morningClasses = ["Math", "English", "Science"]
// let afternoonClasses = ["History", "Art", "PE"]

// let fullSchedule = morningClasses.concat(afternoonClasses)

// console.log(fullSchedule)
// console.log(fullSchedule.length)

// Q2
// let numbers = [1, 2, 3, 4, 5]

// console.log(numbers.reverse())
// console.log(numbers)

// section 10
// Q1
// let months = ["Jan", "Feb", "Mar", "May", "Jun"]

// months.splice(3, 0, "Apr")

// console.log(months)

// Q2
// let students = ["Alice", "Bob", "Charlie", "David", "Eve"]

// students.splice(2, 1)

// students.splice(2, 0, "Frank", "Grace")

// console.log(students)

// section 11
// Q1
// let original = [1, 2, 3]

// let reference = original

// reference[0] = 99

// console.log(original)
// console.log(reference)

// Q2
// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]

// console.log(arr1 == arr2)
// console.log(arr1 === arr2)

// section 12
// Q1
// let board = [
//     ["X", "O", "X"],
//     ["O", "X", "O"],
//     ["X", "O", "X"]
// ]

// console.log(board[0][1])
// console.log(board[2][2])
// console.log(board[1][1] = "O")

// console.log(board)

// Q2
// let scores = [
//     ["Alice", 85, 90, 92],
//     ["Bob", 78, 85, 88],
//     ["Charlie", 92, 88, 95]
// ]

// console.log(scores[0][2])
// console.log(scores[2][0])

// sum = (scores[1][1] + scores[1][2] + scores[1][3]) / 3

// console.log(Math.floor(sum))

// scores[1][1] = 82

// console.log(scores)

// Day - 4.1
// section 1
// Q1
// let numbers = [10, 20, 30, 40, 50, 60, 70]

// getElements = numbers.slice(2, 5);
// lastThree = numbers.slice(-3)

// console.log(getElements)
// console.log(lastThree)
// console.log(numbers)

// Q2
// let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"]

// morningPlaylist = songs.slice(0, 3)
// eveningPlaylist = songs.slice(-2)
// notFirst = songs.slice(1 - songs.length)

// console.log(morningPlaylist)
// console.log(eveningPlaylist)
// console.log(notFirst)

// section 2
// Q1
// let colors = ["red", "green", "blue", "yellow", "purple", "orange"]

// removedElements = colors.splice(2, 2)

// console.log(colors)
// console.log(removedElements)

// Q2
// let numbers = [1, 2, 3, 7, 8, 9]

// numbers.splice(3, 0, 4, 5, 6)

// console.log(numbers)

// section 3
// Q1
// let fruits = ["banana", "apple", "mango", "cherry", "orange"]

// fruits.sort()

// console.log(fruits)

// let nums = [5, 10, 1, 100, 25]

// nums.sort()

// console.log(nums)

// Q2
// let scores = [78, 92, 85, 88, 73]

// let asscendingOrder = scores.sort((a, b) => a - b)

// console.log(asscendingOrder)
// console.log(asscendingOrder[asscendingOrder.length - 1])

// let descendingOrder = scores.sort((a, b) => b - a)

// console.log(descendingOrder)
// console.log(descendingOrder[descendingOrder.length - 1])

// section 4
// Q1
// let words = ["JavaScript", "is", "awesome"]

// sentence = words.join(" ")
// hyphen = words.join("-")
// wospaces = words.join("")

// console.log(sentence)
// console.log(hyphen)
// console.log(wospaces)

// Q2
// let dateArray = ["2024", "12", "25"]

// date1 = dateArray.join("/")
// date2 = dateArray.join("-")

// console.log(date1)
// console.log(date2)

// let timeArray = ["14", "30", "00"]

// time = timeArray.join(":")

// console.log(time)

// section 5
// Q1
// let numbers = [1, 2, 3, 4, 5]

// let numStr = numbers.toString()

// console.log(numStr)
// console.log(typeof numStr)

// let join = numbers.join()

// console.log(join)

// Q2
// let grid = [[1, 2], [3, 4], [5, 6]]

// nestStr = grid.toString()

// console.log(nestStr)

// nstStr = grid.join()

// console.log(nstStr)

// section 6
// Q1
// let arr1 = new Array();

// let arr2 = new Array(5);

// let arr3 = new Array(10, 20, 30);

// console.log(arr1);
// console.log(arr1.length);

// console.log(arr2);
// console.log(arr2.length);

// console.log(arr3);
// console.log(arr3.length);

// Q2
// let arr = new Array(4)

// arr[0] = "a"
// arr[1] = "b"
// arr[2] = "c"
// arr[3] = "d"

// console.log(arr)

// let arr2 = new Array(4)

// arr2 = ["a", "b", "c", "d"]

// console.log(arr2)

// section 3
// Q1