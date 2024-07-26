// this is my age
const myAge = 40;

// this is the first 2 years of a dog that count as 10.5 dog years.
let earlyYears = 2;

// this is the first 2 years of a dog that count as 10.5 dog years.
earlyYears *= 10.5;

// the first 2 years have been accounted for and now im subracting 2 more years to equal 4 years off (each year following equates to 4 dog years)
let laterYears = myAge - 2;

// each year AFTER the first 2 years following equates to 4 dog years
laterYears *= 4;

// adding earlyYears and laterYears together to create a new variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;

// created a string with myName and used the toLowerCase() to return the string in lower case.
let myName = "Mario Perez".toLowerCase();

// this is a sentence using interpolation to display the values.
console.log(
  `My Name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
