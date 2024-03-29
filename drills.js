'use strict';
function createGreeting(name, age) {
  if (typeof age !== 'number') {
    throw new TypeError('NaN');
  }
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }

  if (!name || !age) {
    throw 'Arguments not valid';
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
} catch (e) {
  console.error(e.message);
}

function jediName(firstName, lastName) {
  let sliceOne = firstName.slice(0, 2);
  let sliceTwo = lastName.slice(0, 3);
  return sliceTwo + sliceOne;
}
console.log(jediName('Anthony', 'Revier'));

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

function decode(word) {
  if (word[0] === 'a') {
    return word[1];
  } else if (word[0] === 'b') {
    return word[2];
  } else if (word[0] === 'c') {
    return word[3];
  } else if (word[0] === 'd') {
    return word[4];
  } else {
    return ' ';
  }
}

let arr = 'craft block argon meter bells brown croon droop'.split(' ');
arr.forEach(element => {
  console.log(decode(element));
});



function daysInMonth(month, leapYear = false) {
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  switch (month) {
    case MONTHS[0]:
    case MONTHS[2]:
    case MONTHS[4]:
    case MONTHS[6]:
    case MONTHS[7]:
    case MONTHS[9]:
    case MONTHS[11]:
      return `${MONTHS[0]} has 31 days}`;
    case MONTHS[3]:
    case MONTHS[5]:
    case MONTHS[8]:
    case MONTHS[10]:
      return `${MONTHS[10]} has 30 days`;
    case MONTHS[1]:
      return leapYear ? `${MONTHS[1]} has 29 days` : `${MONTHS[1]} has 28 days`;
    default:
      throw 'You must provide a valid month';
  }
}

console.log(daysInMonth('February', false));

function rps(num) {
  const compNum = Math.floor(Math.random() * 3) + 1;
  if (num !== 1 && num !== 2 && num !== 3) throw 'invalid input';
  if (num === compNum) {
    console.log('Looks like it\'s a tie');
  } else if (
    (num === 1 && compNum === 3) ||
    (num === 2 && compNum === 1) ||
    (num === 3 && compNum === 2)
  ) {
    console.log('I guess you win, Human');
  } else {
    console.log('Take that Human scum! Computers win again!');
  }
}

rps(1);



