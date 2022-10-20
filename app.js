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

const fruits = ['apple', 'strawberry', 'banana', 'orange']

fruits.push('watermelon', 'mango')

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


const numbers = [1, 2, 3, 4, 5, 6]
let sum = 0
let doubles = []
for (num of numbers) {
//  sum = sum + num
  doubles.push(num * 2)

}
//  console.log(doubles)

const letterCounter = (word) => {
  let count = 0
  for (letter in word) {
    console.log(letter)
  }
}

let word = prompt('Write your phrase')
letterCounter(word)
