let div = document.querySelector(`#likeContainer`)

function getPokemon(start, stop){
    for (let i = start; i <stop; i++){
        fetch (`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then (data => data.json())
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

    // likeButton.setAttribute(`id`, `button`)
    pokemonName.innerText = pokemonCard.id + " " + pokemonCard.name
    pokemonImage.src = pokemonCard.image
    likeButton.innerText = "Favorite"

    //since pokemon can have 1 or 2 types run a for loop to add to string that runs the length of the array
    for(let x=0; x<pokemonCard.type.length; x++)
    pokemonTypes.innerText = pokemonTypes.innerText + pokemonCard.type[x]

    newListElement.appendChild(pokemonName)
    newListElement.appendChild(pokemonImage)
    newListElement.appendChild(pokemonTypes)
    newListElement.appendChild(likeButton)
    pokemonList.appendChild(newListElement)
    
    likeButton.addEventListener(`click`,  e => favoritesRender(e, pokemonCard))
}

favoritesRender = (e, pokemonCard) => {
    e.target.parentNode.remove()
    const newListElement = document.createElement("li")
    const pokemonName = document.createElement('h2')
    const pokemonImage = document.createElement('img')
    const pokemonTypes = document.createElement('p')
    const favoritesButton = document.createElement('button')

    favoritesButton.setAttribute(`id`, `button`)
    pokemonName.innerText = pokemonCard.id + " " + pokemonCard.name
    pokemonImage.src = pokemonCard.image
    favoritesButton.innerText = `Remove from Favorites`

    //since pokemon can have 1 or 2 types run a for loop to add to string that runs the length of the array
    for(let x=0; x<pokemonCard.type.length; x++)
    pokemonTypes.innerText = pokemonTypes.innerText + pokemonCard.type[x] + ", "

    newListElement.appendChild(pokemonName)
    newListElement.appendChild(pokemonImage)
    newListElement.appendChild(pokemonTypes)
    newListElement.appendChild(favoritesButton)
    likeContainer.appendChild(newListElement)

    favoritesButton.addEventListener(`click`, e => removeFavoritesRender(e, pokemonCard))
}

removeFavoritesRender = (e, pokemonCard) => {
    e.target.parentNode.remove()
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonCard.id}`)
    .then (data => data.json())
    renderPokemon(pokemonCard)
}

getPokemon(1,152)