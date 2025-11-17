const heading = document.getElementById('heading');

heading.innerText = 'DataSlid Javascript Class'


const para1 = document.querySelector('.para1')

para1.innerHTML = 'This is a paragraph'

const button1 = document.querySelector('.btn1')

const button2 = document.querySelector('#btn2')

button1.innerText = 'Click me'

button2.innerHTML = 'Value'


button1.style.color = 'green'
button2.


style.backgroundColor = 'yellow'


button1.addEventListener('click', ()=> {
    para1.innerText = 'Welcome to DataSlid'
})


button2.addEventListener('mouseover', ()=> {
     heading.style.color = 'red'
} ) 







