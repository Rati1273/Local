// for i in range(1, 6):
//     print("*" * i)

// for (let i = 6; i >= 1; i--) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += "*";
//     }
//     console.log(str);
// }

// for (let i = 1; i <= 6; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += "*";
//     }
//     console.log(str);
// }
// var name = "raju";

// function printUsername() {
//   console.log(name); // undefined, due to hoisting of inner var name
//   var name = "amit";
//   console.log(name); // "amit"
// }

// printUsername();

// var name = "satyajit";

// let sum = 2;
// let sum2 = sum;
// sum2 = 3;
// console.log(sum + sum2); // 2 + 3 = 5

// let user = {
//   name: "sonu",
//   age: 18,
// };
// let user2 = user;
// user2.name = "amit";
// console.log(user2); // { name: 'amit', age: 18 }
// ADD.js
// ADD.js


const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
function autoGuessOnce() {
  const userNumber = Number(guessInput.value);
  if (!userNumber || userNumber < 1 || userNumber > 100) {
    message.innerHTML = "⚠️ Please enter a number between 1 and 100.";
    message.style.color = "red";
    return;
  }
  const programGuess = Math.floor(Math.random() * 100) + 1;
  if (programGuess === userNumber) {
    message.innerHTML = ` Program guessed: <b>${programGuess}</b><br> Match! You and the program guessed the same number.`;
    message.style.color = "green";
  } else {
    message.innerHTML = `Program guessed: <b>${programGuess}</b><br> Not a match. Your number: <b>${userNumber}</b>`;
    message.style.color = "orange";
  }
}
submitBtn.addEventListener("click", autoGuessOnce);
