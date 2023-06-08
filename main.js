// connect/test js file to html

// .getElementsByTagName()
const h1s = document.getElementsByTagName('h1')
console.log(h1s[0])

// .getElementsByClassName()
const students = document.getElementsByClassName('student')
console.log(students[1])

// .getElementById()
const instructors = document.getElementById('instructors')
console.log(instructors)

// .querySelector() (ES6 Modern Approach)
// .querySelectorAll()
const h1sAgain = document.querySelector('#instructors')
console.log(h1sAgain)

// .innerText property: Changes the text
students[2].innerText = 'Sean'

// .innerHTML property: Allows you to write HTML code
const dylansDiv = document.querySelector('.dylans-div')
dylansDiv.innerHTML = `
    <p>My favorite color is GREEEEN</p>
`

// .createElement()
// Lets create a new button and append to a specfic div
const dylansBtn = document.createElement('button')
dylansBtn.innerText = 'YEEEEER'
dylansDiv.append(dylansBtn)

// NOTE: Rememeber when creating an element in JS, you need to append to your document with .append()

// Javascript is an event driven language
// We can take advantage of its events by using .addEventListener(event_type, callback function)
const bodyTag = document.querySelector('body')
console.log(bodyTag)
dylansBtn.addEventListener('click', () => {
    if(bodyTag.className === '') {
        bodyTag.className = 'caden-color'
    } else if (bodyTag.className === 'caden-color') {
        bodyTag.className = 'gabe-color'
    } else if (bodyTag.className === 'gabe-color') {
        bodyTag.className = 'kevin-color'
    } else {
        bodyTag.className = ''
    }
})

// Option 2: using onclick attribute in HTML
// onclick="function(event)"
const changeColor = () => {
    if(bodyTag.className === '') {
        bodyTag.className = 'caden-color'
    } else if (bodyTag.className === 'caden-color') {
        bodyTag.className = 'gabe-color'
    } else if (bodyTag.className === 'gabe-color') {
        bodyTag.className = 'kevin-color'
    } else {
        bodyTag.className = ''
    }
}


// adding addEventListener() to new button to add text every time its clicked
const btn = document.createElement('button')
dylansDiv.append(btn)
btn.innerText = 'Adding Text'

btn.addEventListener('click', () => {
    const pTag = document.createElement('p')
    pTag.innerText = 'YEEEEER'
    dylansDiv.append(pTag)
})


// grabbing form data with .addEventListener()
const formEl = document.getElementsByTagName('form')[0]
formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = formEl[0].value
    pokemonData(name)
})

const pokeDiv = document.querySelector('.poke-div')

const pokemonData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)
    pokeDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `
}
