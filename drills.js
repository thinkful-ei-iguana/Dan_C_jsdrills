'use strict';
function createGreeting(name, age) {
  
  return `Hi, my name is ${name} and I am ${age}. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age) {
    return  2019 - age;
}

const greeting = createGreeting();
console.log(greeting);





