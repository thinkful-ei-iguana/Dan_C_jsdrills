'use strict';
function createGreeting(name, age) {
  if (typeof age !== "number"){
    throw new TypeError("NaN");
  }
  if (age < 0) {
    throw new Error('Age cannot be negative')
  }
  
  if (!name || !age) {
    throw 'Arguments not valid'
  } else {
    const dob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age}. I was born in ${dob}`;
  }
  
  
}

function getYearOfBirth(age) {
  return 2019 - age;
}

try {
  const greeting = createGreeting('daniel');
  console.log(greeting);
}
catch(e) {
  console.error(e.message);
}



function jediName(firstName, lastName){
    let sliceOne = firstName.slice(0,2);
    let sliceTwo = lastName.slice(0,3)
    return sliceTwo + sliceOne;

}
console.log(jediName("Anthony", "Revier"));

function beyond(num) {
  if (!Number.isFinite(num)) {
    console.log('And beyond');
  } else if (Number.isFinite(num)) {
    if (num > 0) {
      console.log('To infinity');
    } else if (num < 0) {
      console.log('To negative infinity');
    } else {
      console.log('Staying home');
    }
  } 
}







