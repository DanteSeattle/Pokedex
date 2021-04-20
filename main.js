var count = 0

function getPokemon(start, stop){
for (let i = start; i <stop; i++){
    count++
    console.log(count)
    fetch (`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then ( data => data.json())
    .then((pokemon) => {
    
    const pokemonCard = {}
    pokemonCard.id = pokemon.id
    pokemonCard.name = pokemon.name
    pokemonCard.image = pokemon.sprites.front_default
    pokemonCard.type = pokemon.types.map(pokemonType => pokemonType.type.name)

    renderPokemon(pokemonCard)
        })
    }
}

function renderPokemon(pokemonCard) {
    //console.log(pokemonCard)
    const pokemonList = document.getElementById("pokemonList")
    const newListElement = document.createElement("li")
    const pokemonName = document.createElement('h2')
    const pokemonImage = document.createElement('img')
    const pokemonTypes = document.createElement('p')
    const likeButton = document.createElement('button')


    pokemonName.innerText = pokemonCard.id + " " + pokemonCard.name
    pokemonImage.src = pokemonCard.image
    likeButton.innerText = "Favorite"

    //since pokemon can have 1 or 2 types run a for loop to add to string that runs the length of the array
    for(let x=0; x<pokemonCard.type.length; x++)
    pokemonTypes.innerText = pokemonTypes.innerText + pokemonCard.type[x] + ", "

    newListElement.appendChild(pokemonName)
    newListElement.appendChild(pokemonImage)
    newListElement.appendChild(pokemonTypes)
    newListElement.appendChild(likeButton)
    pokemonList.appendChild(newListElement)
    
}

getPokemon(1,152);