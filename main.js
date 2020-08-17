// console.log(2 + 2);
// console.log(10 - 5);
// console.log(2 * 4);
// console.log(121 / 11);

let currentYear = 2020;
const birthdayYear = 1988;
const age = currentYear - birthdayYear;
// console.log(age);

let a = 10;
let b = 7;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
//
// console.log(a % b);

let incrementA = 1;
let incrementB = 1;

let c = ++incrementA;
const d = incrementB++;

// console.log(incrementA); // 1 + 1
// console.log(incrementB); // 1 + 1
// console.log(c); // 1 + 1
// console.log(d); // 1

// c = c + a;
c += a;
console.log(c);
c -= a;
console.log(c);
c *= a;
console.log(c);
c /= a;
console.log(c);
c %= a;
console.log(c);