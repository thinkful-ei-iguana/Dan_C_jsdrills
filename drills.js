'use strict';
function createGreeting(name, age) {
  const yearOfBirth = 2019 - age;
  return `Hi, my name is ${name} and I am ${age}. I was born in ${yearOfBirth}`;
}

const greeting = createGreeting();
console.log(greeting);





