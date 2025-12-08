// const jsBox =   document.getElementById('jsBox')
// const colorInput = document.getElementById('colorInput')

// const btn = document.getElementById('colorButton')


// btn.addEventListener('click', ()=> {
//      let color = colorInput.value
//      if(color.trim()){
//         jsBox.style.backgroundColor = color;
       
        
//      }

//      colorInput.value =  ''

     
// })

// const todoInput = document.getElementById('todoInput')

// const addBtn = document.getElementById('addBtn')

// const ul = document.getElementById('ul')

// addBtn.addEventListener('click', ()=> {
//     let todo = todoInput.value;
//     if(todo != '') {
//      let li =  document.createElement('li')
//      li.innerText = todo

//      ul.appendChild(li)
//     }

//     todoInput.value = ''


// })

//  collect user input of f and x ,  then get stat of fx, fx squared and summation of fx


 const userInput = document.getElementById('userInput')

 const output = document.getElementById('output')

 const btn = document.getElementById('operaBtn')


 btn.addEventListener('click', ()=> {
    if(userInput.value.trim()){
     let nums = userInput.value.trim();
       nums = nums.split(',')
       let f = Number(nums[0]) 
       let x = Number(nums[1]) 
       

       let para1 =  document.createElement('p')
       para1.innerText =  f * x

       output.appendChild(para1)

       userInput.value = ''




       let para2 = document.createElement('p')
       para2.innerText = f*x*f*x

       output.appendChild(para2)


        let para3 = document.createElement('p')
       para3.innerText = f+x

       output.appendChild(para3)

       
 }})

//       <!-- FizzBuzz (Classic Interview Beginner Task)

// Print numbers from 1 to 20:

// If divisible by 3 → print "Fizz"

// If divisible by 5 → print "Buzz"

// If divisible by both 3 and 5 → "FizzBuzz" -->



 function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}


fizzBuzz(5)
fizzBuzz(15)

const names = ['Femi','Ola','Yemi' ]

 for (name of names) {
    console.log(name)
 }

 const numbers =  [1,2,3,4,5]

  for( a of numbers) {
    console.log(a)
  }



//   7. Reverse a string

// reverse("cat") → "tac"

// 15. Count vowels in a string

// countVowels("hello") → 2

// Return all even numbers from an array

// evenNumbers([1,2,3,4,5]) → [2,4]




















