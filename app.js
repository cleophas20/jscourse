// let message = 'fuck you';
//
// console.log(message);
//
// function sum(a, b) {
//   const sum = a + b
//   return sum
// }
//
// //operators
// function calculateFoodTotal(food, tip) {
//   const tipDecimal = tip * 0.01;
//   const tipAmount = food * tipDecimal;
//   const total = sum(food, tipAmount);
//   return total
// }
//
// console.log(calculateFoodTotal(100, 20));
//
// const add = (a, b) => a + b
// const sub = (a, b) => a - b
// const mult = (a, b) => a * b
// const div = (a, b) => {
//   if (b!== 0) {
//     return a / b
//   } console.log('Cannot divide by 0')
// }
//
// console.log(mult(33, 10))

// Arrays

// const fruits = ['apple', 'strawberry', 'banana', 'orange']
//
// fruits.push('watermelon', 'mango')

//console.log(fruits.slice(3, 5))

//array methods (slice, push, indexOf, length)
//console.log(fruits.length)


// const person = {
//   name: 'Leonardo',
//   shirt: 'white',
//   incoming: 24,
//   outgoing: 12,
//   chocolateBars: function () {
//     return this.incoming - this.outgoing
//   }
// }
//
// const person2 = {
//   name: 'Jerry',
//   shirt: 'blue'
// }
//
// const intro = (guy) => {
//   const introSentence = `Hi my name is ${guy.name}, and my shirt is ${guy.shirt}, and I have ${guy.chocolateBars()}.`;
//   return introSentence
// }
//
// console.log(intro(person))
// for (let i = 0; i < numbers.length, i++) {
//   sum = numbers[i] + numbers[i+1]
//   sum = numbers[0]
// }
//
//
// let numbers = []
// //
// // let sum = 0
// // let doubles = []
// // for (num of numbers) {
// // //  sum = sum + num
// //   doubles.push(num * 2)
// //
// // }
// let greaterThanArray = []
//
// const filter = (testArray, greaterThan) => {
//   for (const num of testArray) {
//     if (num > greaterThan) {
//       greaterThanArray.push(num)
//     }
//   }
//   return greaterThanArray
// }
//
//
// const doubles = (numbers) => {
//   return numbers.map(number => number * 2)
// }
//
// function arrayInput() {
//   let newVar = prompt('Give me a number')
//   let newNum = parseInt(newVar)
//   if (Number.isInteger(newNum)) {
//     numbers.push(newNum)
//     arrayInput()
//   } else  {
//     result = numbers.filter(num => num > 6 || num < 2)
//
//   }
//}

//arrayInput();
//console.log(result)

// const actors = [
//   {name: 'johnny', netWorth: 200},
//   {name: 'amber', netWorth: 10},
//   {name: 'leo', netWorth: 1000}
// ]
//
// actors.reduce(netWorth)

// let actorName = (actors.filter(actor => actor.netWorth > 100))
//
// const sumArray = (numbers) => {
//   let result = 0
//   for (const num of numbers) {
//     result += num
//   }
//   return result
// }
// const bob = [2, 3, 4, 5, 6]
// const sumArrayWithReduce = bob.reduce((prev, curr) => prev + curr)



//  console.log(doubles)
//
// const letterCounter = (word) => {
//   let count = 0
//   for (letter in word) {
//     console.log(letter)
//   }
// }
//
// const sumArray = (numbers) => {
//   let result = 0;
//   for (num of numbers) {
//     result = result + num
//   }
//   return result
// }
//
// const max = (numbers) => {
//   let biggest = numbers[0];
//   for (num of numbers) {
//     if (biggest < num) {
//       biggest = num;
//     }
//   }
//   return biggest
// }
//
// const min = (numbers) => {
//   let smallest = numbers[0];
//   for (num of numbers) {
//     if (num < smallest) {
//       smallest = num;
//     }
//   }
//   return smallest;
// }
//
// const letterFrequency = (phrase) => {
//   let result = {}
//   for (const letter of phrase) {
//     if (letter in result) {
//       result[letter]++
//     } else {
//       result[letter] = 1
//     }
//   }
//   return result
// }
//
// const wordFrequency = (phrase) => {
//   let words = phrase.split(' ')
//   return letterFrequency(words)
// }
//
// //console.log(wordFrequency('your momma your is a'))
//
//

// function mult(a, b) {
//   return a * b;
// }
//
// const nums = [1, 2, 3, 4]
// // const result = nums.reduce(mult)
//
// const result = nums.reduce((a, b) => a + b, 0)
//
//
// const actors = [
//   {name: 'johnny', netWorth: 200},
//   {name: 'amber', netWorth: 10},
//   {name: 'leo', netWorth: 1000}
// ]
//
// const total = actors.reduce((a, b) => a + b.netWorth, 0)
//
// //console.log(total)
//
// let titleDiv = document.getElementById('title')
// let message = 'goodbye'
//
// titleDiv.innerText = message;
//
// titleDiv.innerHTML = `<p>${message}</p>`
//
// titleDiv.style.color = 'green'
//
// let redSquare = document.getElementById('red')
// let yellowSquare = document.getElementById('yellow')
// let greenSquare = document.getElementById('green')
//
//
// const squares = document.querySelectorAll('.colorSquare')
// const startStop = document.getElementById('startStop')
//
// function clicked() {
//   let count = 0;
//   count++;
//   return count;
// }
//
// const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
//
// squares.forEach(square => {
//   square.onclick = () => {
//     timesClicked[square.value] += 1
//     square.innerText = timesClicked[square.value]
// //    console.log(square.value)
//   }
// })
//
// startStop.onclick = () => clearScores()
//
// function clearScores() {
//   timesClicked.red = 0
//   timesClicked.yellow = 0
//   timesClicked.green = 0
//   squares.forEach(square => square.innerText = '')
// }

const randomSelect = (myArray) => {
  let randomChoice = Math.floor(Math.random() * (myArray.length))

  console.log(myArray[randomChoice])
}

fruits = ['banana', 'appple', 'orange', 'pear']

//rainy (1), sunny (-1) overcast (0)

const weatherScore = () => {
  let count = 0;
  let forecast = prompt('What is your forecast?')
  if (forecast == 'rainy') {
    count++
    weatherScore()
  } else if (forecast == 'sunny') {
    count--
    weatherScore()
  } else if (forecast == 'overcast') {
    weatherScore()
  } else if (forecast == 'exit') {
    return count
  } else if (forecast !== 'exit' && forecast !== 'sunny' && forecast !== 'rainy' && forecast !== 'overcast') {
    alert('Not a valid forecast')
    weatherScore()
  }
  console.log(count)
}

weatherScore()
