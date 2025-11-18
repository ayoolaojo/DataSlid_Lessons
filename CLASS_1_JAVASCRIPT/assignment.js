// Assignment
// Calculate the sum of numbers from 1 to 10.

// Print the multiplication table of 5 (e.g., 5 × 1 = 5 … 5 × 10 = 50).

// Print all numbers between 1 and 30 that are divisible by 3.

// Print numbers from 1 to 20, but stop the loop when the number reaches 13.

// Skip number 7 in a loop from 1 to 10 using continue.

// Find the largest number between 3 given numbers.

// Check if a year is a leap year or not.

// Check if a given character is a vowel or consonant.

// Take a number and check if it’s between 10 and 50.

// Check if someone qualifies for a loan:

// Age ≥ 21

// Income ≥ 20000

// Count how many vowels are in a string.

// Reverse a string using a loop.

// Check if two strings are equal.

// Check if a string contains a word (hint: use .includes()).

// Replace all occurrences of a word in a string (hint: use .replaceAll()).


// Soln 1

let sum = 0

for (let i = 1; i <= 10; i++) {
    sum += i
    
}

console.log(sum)



// Soln 2
let num = 5

for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
    
}

// soln 3
let num1 = 30
for(let i =1; i<=num1;i++) {
    if(i % 3 == 0) {
        console.log(i)
    }
}

// soln 4
let num2 = 20
for(let i =1; i<=num2;i++) {
    if(i == 13) {
        break
    }
    console.log(i)
}

// soln5
let num3 = 10
for(i = 1; i <= 10; i++) {
    if(i == 7){
        continue
    }

    console.log(i)
}

// soln 6

let a = 1
let b = 20
let c = 50

let largest;

if(a >= b && a >= c){
    largest = a
}else if(b >= a  && b >= c) {
    largest = b
} else {
    largest = c
}

console.log(largest)


// soln 7 
let year = 2021;
if(year % 4 == 0){
    console.log(year + ' is a leap year')
} else {
    console.log(year + ' is not a  leap year')
}

// soln 8

let char;
char = 'a'
if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    console.log(char + ' is a vowel')
} else {
    console.log(char + ' is a consonant')
}

// soln 9

let num4 = 30
if(num4 >= 10 && num4 <= 50) {
    console.log(num4 + ' is between 10 and 50')
} else {
    console.log(num4 + ' is not between 10 and 50')
}

// soln 10

let age = 21
let income = 20000

if(age >= 21 && income >= 20000) {
    console.log('Eligible for loan')
} else {
    console.log('Not eligible for loan')
}

// soln 11
let text = 'Dataslid' 
let vowels = 'aeiouAEIOU'
let count = 0
for(let i = 0; i < text.length; i++) {
    if(vowels.includes(text[i])) {
        count++
    }
}

console.log (count)



const message =  'hello'
let reversed = ''
for(let i = message.length - 1; i >= 0 ; i--) {
    reversed += message[i]
}
    
console.log(reversed)


