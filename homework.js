const form1 = document.getElementsByTagName('form')[0]
form1.addEventListener('submit', () => {
    event.preventDefault()
    const poke_name = form1[0].value
    pokeData(poke_name)
})

const pokemon = document.querySelector('.poke')

const pokeData = async (poke_name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke_name}`)
    const data = await response.json()
    console.log(data)
    pokemon.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
        <img src="${data.sprites.front_shiny}" class="card-img-top" alt="...">
    <div class="card-body mx-auto">
        <h5 class="card-title mx-auto">${data.name}</h5>
    </div>
    <ul class="list-group list-group-flush mx-auto">
        <li class="list-group-item">Ability 1: ${data.abilities[0].ability.name}</li>
    </ul>
</div>
  `
}