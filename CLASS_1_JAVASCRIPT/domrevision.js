const heading1 = document.getElementById('heading1')


const paragraph1 = document.querySelector('.para1')



heading1.innerText = "I'm the first paragraph"


paragraph1.innerHTML = "I'm the second paragraph"


heading1.style.color = 'green'
heading1.style.backgroundColor = 'yellow'
heading1.style.textAlign = 'center'

const newElement =document.createElement('span')

newElement. innerText =  ' This is a new Span element'

document.body.appendChild(newElement)

const newDiv = document.createElement('div')

const anotherParagraph = document.createElement('p')

anotherParagraph.innerText = 'This is another paragraph'

newDiv.appendChild(anotherParagraph)

document.body.appendChild(newDiv)

const changedParagraph =  document.querySelector('.para2')

const button1 =  document.querySelector('#btn1')

button1.addEventListener('click', ()=> {
    changedParagraph.innerText = 'Welcome to DataSlid'
})

const backgroundButton =  document.querySelector('#btn2')

backgroundButton.addEventListener('click', ()=> {
    document.body.style.backgroundColor = 'yellow'
})

const counter =  document.getElementById('counter')

const increaseBtn =  document.getElementById('incrementBtn')

const decreaseBtn =  document.getElementById('decrementBtn')


increaseBtn.addEventListener('click', ()=> {
   counter.innerText =  Number(counter.innerText)  + 5

})

decreaseBtn.addEventListener('click', ()=> {
   counter.innerText =  Number(counter.innerText)  - 1

})



 
const userInput = document.getElementById('userInput')

const addButton = document.getElementById('addBtn')

const deleteButton = document.getElementById('deleteBtn')

const output = document.getElementById('output')

 addBtn.addEventListener('click', ()=> {
     if(userInput.value.trim()){
         let li = document.createElement('li')
        li.innerText = userInput.value
        output.appendChild(li)
        userInput.value = ''
     }

   

 }) 
 
 deleteButton.addEventListener ('click', ()=> {
      let li = document.querySelectorAll('li')
       output.removeChild(li[li.length -1])
 })

 const box = document.querySelector('.box');
 const colorInput =  document.getElementById('colorInput');

 const colorBtn =  document.getElementById('handleColor')

 colorBtn.addEventListener('click', ()=> {
    if(colorInput.value.trim()){
        box.style.backgroundColor = colorInput.value

        colorInput.value = ''
    } 
 })