// let js_1 = "55";

// console.log(40 + 24 - 21);
// console.log(js_1);
// console.log(344);
// console.log("js_1");

// console.log(typeof 44);
// let age = 21;
// console.log(age);
// age = 30;
// // console.log(age);
// age = "age_35";
// console.log(age);
// const DOB = 2006;
// console.log(DOB);
// const print = "helloo";
// console.log(print);

// console.log(age, DOB, print);
// console.log(2 ** 3); // ** = exponential = 2 ** 3 = (2)cube

// console.log(29 > 18); // this is boolean type so reasult
// //  will be true or false and in this case the result is true.

// //OPERATOR PRECEDENCE
// let x, y;
// x = y = 25 - 5 - 10;
// console.log(x, y);

// const firstName = "biraj";
// const job = "Web developer";
// const birthYear = 2006;
// const currentYear = 2025;

// const myInfo =
//   "I am " + firstName + ", a " + (currentYear - birthYear) + " year old " + job;
// console.log(myInfo);

// // TEMPLATE LITERAL

// const myInfonew = `${firstName}\
//  ${job} ${birthYear} ${currentYear}`;
// console.log(myInfonew);

// console.log(`${firstName}
// ${job} ${birthYear} ${currentYear}`);

// const age = 14;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(isOldEnough);
//   console.log("You can get a drivers license ");
// } else {
//   console.log(isOldEnough);
//   console.log("You cannot get a drivers license ");
// }

// // for (let i = 1; i <= 10; i++) {
// //   if (i === 5) {
// //     // console.log("Skipping 5");
// //     continue; // Skips 5 and moves to the next number
// //   }
// //   console.log(i); // Prints all numbers except 5
// // }

// const dob = "15";
// console.log(dob + 15);
// let num1 = 123;
// let num2 = 456;
// console.log(String(num1), num1); // "123" (number to string)
// console.log(num2.toString(), num2); // "123"
// console.log("1" + 3 + "4"); // "53" (number 3 becomes a string)

// const money = 0;

// if (money) {
//   console.log("He has Money");
// } else {
//   console.log("He has no Money");
// }

// const myAge = "18";
// if (myAge == 18) console.log("i am an adult now");
// else console.log("I am not an adult now");

// const Dscore1 = 96,
//   Dscore2 = 108,
//   Dscore3 = 89;
// const Kscore1 = 88,
//   Kscore2 = 91,
//   Kscore3 = 110;

// const dAvgScore = (Dscore1 + Dscore2 + Dscore3) / 3;

// const kAvgScore = (Kscore1 + Kscore2 + Kscore3) / 3;

// console.log("Average score of Dolphine is " + dAvgScore);
// console.log("Average score of Koalas is " + kAvgScore);

// if (dAvgScore > kAvgScore) {
//   console.log("Dolphine is winner");
// } else if (kAvgScore > dAvgScore) {
//   console.log("Koalas is winner");
// } else if (dAvgScore === kAvgScore) {
//   console.log("Draw ");
// }

const Dscore1 = 97,
  Dscore2 = 112,
  Dscore3 = 101;
const Kscore1 = 109,
  Kscore2 = 95,
  Kscore3 = 123;

const dAvgScore = (Dscore1 + Dscore2 + Dscore3) / 3;

const kAvgScore = (Kscore1 + Kscore2 + Kscore3) / 3;

console.log("Average score of Dolphine is " + dAvgScore);
console.log("Average score of Koalas is " + kAvgScore);

if (dAvgScore > kAvgScore && dAvgScore >= 100) {
  console.log("Dolphine is winner");
} else if (kAvgScore > dAvgScore && kAvgScore >= 100) {
  console.log("Koalas is winner");
} else if (dAvgScore === kAvgScore >= 100) {
  console.log("Draw ");
} else {
  console.log("No one wins");
}

// SWITCH STATEMENT

let oneValue = 1;
switch (oneValue) {
  case 1:
    console.log("oneValue = 1");

  case 3:
    console.log("oneValue = 3");
  case 6:
    console.log("oneValue = 3");

  case 7:
    console.log("oneValue = 3");
}

const age = 19;

age >= 18 ? console.log("Adult") : console.log("Child");

const person = age >= 18 ? "adult" : "child";
const info = "the person is " + person + " and " + age + " years old.";
const info1 = `The person is ${person} and ${age} years old.`;
console.log(info);
console.log(info1);

// CHALLENGE 4
const bill = 4545;

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
const totalValue = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
was ${totalValue}`);
