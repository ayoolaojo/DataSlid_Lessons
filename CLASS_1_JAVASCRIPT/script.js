// print numbers from 1-10
// print numbers from 10 down to 1 in reverse order 
// print only even numbers from 1 to 20
// print only odd numbers from 1 to 15


for(let i = 1; i <= 10; i++) {
    console.log(i)
}

for(let i =10 ; i >= 1; i--) {
    console.log(i)
}

 
for(let i = 1; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
    
}

for (let i = 1; i <=15; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}


    // print 5 to 50 using while loop

let i = 5;

while (i <= 50) {
  console.log(i);
  i++;
}

let count = 1;

while (count <= 10) {
  console.log(count);
  if (count === 5) {
    break; // stop when count is 5
  }
  count++;
}


let j = 1;

while (j < 10) {
  j++;
  if (j === 5) {
    continue; // skip number 5
  }
  console.log(j);
}

// Check if a string contains a word (hint: use .includes()).


const message = ' hello! Today is Friday'
const word =  "hello"

const checkHello = message.includes(word)

console.log(checkHello)

// check if a given character is a vowel or consonant

// const vowels = 'aeiouAEIOU'
// let char = 'A'
// if(vowels.includes(char)){
//   console.log(char + ' is a vowel')
// } else{
//    console.log(char + ' is a consonant')
// }


// let char =  prompt('enter your favorite alphabet').toLowerCase()
// if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u') {
//   alert(char +  ' is a vowel')
// }else{
//   alert(char +  ' is a consonant')
// }


// Functions

function Multiply(a, b){
  return a * b

}


const myNum = Multiply(100, 200)

console.log(myNum)


function Greet(name) {
  console.log( name + " You're welcome ")
}

Greet("Johnson")
Greet('Francis')
Greet('Timi')
Greet('Temitope')
Greet('Esther')
Greet('Ismaeel')
Greet('Tope')
Greet('Feranmi')
Greet('Joshua')




