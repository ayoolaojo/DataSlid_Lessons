// // print numbers from 1-10
// // print numbers from 10 down to 1 in reverse order 
// // print only even numbers from 1 to 20
// // print only odd numbers from 1 to 15


// for(let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for(let i =10 ; i >= 1; i--) {
//     console.log(i)
// }

 
// for(let i = 1; i <= 20; i++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
    
// }

// for (let i = 1; i <=15; i++) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
// }


//     // print 5 to 50 using while loop

// let i = 5;

// while (i <= 50) {
//   console.log(i);
//   i++;
// }

// let count = 1;

// while (count <= 10) {
//   console.log(count);
//   if (count === 5) {
//     break; // stop when count is 5
//   }
//   count++;
// }


// let j = 1;

// while (j < 10) {
//   j++;
//   if (j === 5) {
//     continue; // skip number 5
//   }
//   console.log(j);
// }

// // Check if a string contains a word (hint: use .includes()).


// const message = ' hello! Today is Friday'
// const word =  "hello"

// const checkHello = message.includes(word)

// console.log(checkHello)

// // check if a given character is a vowel or consonant

// // const vowels = 'aeiouAEIOU'
// // let char = 'A'
// // if(vowels.includes(char)){
// //   console.log(char + ' is a vowel')
// // } else{
// //    console.log(char + ' is a consonant')
// // }


// // let char =  prompt('enter your favorite alphabet').toLowerCase()
// // if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u') {
// //   alert(char +  ' is a vowel')
// // }else{
// //   alert(char +  ' is a consonant')
// // }


// // Functions

// function Multiply(a, b){
//   return a * b

// }

// // const Mulitply = (a,b) => a*b




// const myNum = Multiply(100, 200)

// console.log(myNum)


// function Greet(name) {
//   console.log( name + " You're welcome ")
// }

// Greet("Johnson")
// Greet('Francis')
// Greet('Timi')
// Greet('Temitope')
// Greet('Esther')
// Greet('Ismaeel')
// Greet('Tope')
// Greet('Feranmi')
// Greet('Joshua')



function Add(x,y,e){
  console.log (x + y + e)

}

Add (20,50,30)

Add (10, 0, 5)


Add ( 10,5,3)


function  Greetings (name, age, gender) {
  console.log (`Welcome ${name}!  You're ${gender},  ${age} years old. `)
}


Greetings('Yusuff', 10 , 'Male')
Greetings('Tope', 11 , 'Female')


// function CalculateArea(length, width) {
//     console.log(length * width)
// }



// CalculateArea(100,70)
// CalculateArea(50,20)



const CalculateArea = (length, width) => console.log(length * width)

CalculateArea(20, 15)
CalculateArea(70, 5)

// Create a function called isEven that takes a number and returns "Even" if divisible by 2, otherwise "Odd".

function isEven (num) {
   if(num%2===0) {
    console.log(num + ' is even')
   } else {
     console.log(num + ' is odd')
   }
}


isEven (10000099)
isEven (524828)
isEven (1)
isEven (30)


// Objects
// dot notation
// bracket notation

const person = {
    name: 'Yusuff',
    age: 10,
    gender: 'Male',
    isSingle: false
}

console.log(person.name)


console.log (person['age'])



const ourNames = ['Ayoola', 'Yusuff', 'Temitope', 'Adams', 'Francis','Timi' ]

console.log(ourNames)


const secondName = ourNames[1]
console.log(secondName)

const subjects = []

subjects[2] = 'English'
subjects[1] = 'Maths'
subjects[3] = 'Chemistry'
subjects[0] = 'Biology'

console.log(subjects)



const movies = [
  'spiderman',
  'Avengers',
  'Angry Birds',
  'Iron man',
  'Superman',
  'Batman'
]

movies[1] = 'Jennifer'

console.log(movies)


const ourProfiles = [
  {
    name: 'Yusuff',
    age: 10,
    gender: 'Male'
  
  },
  {
    name: 'Temitope',
    age: 11,
    gender: 'Female'
  },

]

console.log(ourProfiles[1])  
console.log(ourProfiles[0].gender)  


console.log(typeof(ourProfiles))



const alphabets = ['a', 'e','o', 'k']

console.log(typeof(alphabets))






const numm = 10
// if(numm > 15){
//   console.log(numm + ' is greater than 15')
// } else {
//   console.log(numm + ' is less than 15')
// }
// 

numm > 15? console.log('Hurray!'): console.log('Try again') 


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)
console.log(fruits)

fruits.pop()

console.log(fruits)

fruits.push('Pineapple')

console.log(fruits)

fruits.unshift('Watermelon')  
fruits.unshift(100) 

fruits.shift()


console.log(fruits)

fruits.pop()
console.log(fruits)

console.log(fruits.at(-1))
console.log(fruits.at(2))

const cars = ['Toyota', 'Lexus', 'BMW', 'hONDA']

const addedArray =  fruits.concat(cars)

console.log(addedArray)


// Array Methods Contd
//  join -  returns  a string
  //  flat - flatten nested arrays
  // flatMap
  // splice - remove or add elements from an array
  // toSpliced - creates new array while keeping the old array
  // slice - takes two argument, start and end index


  const fishes = ['fish1', 'fish2', 'fish3', 'fish4', 'fish5']

  const newFishes =  [...fishes, 'catfish', 'octopus' ]


  console.log (newFishes)







