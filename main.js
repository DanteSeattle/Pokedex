let div = document.querySelector(`#likeContainer`)
class aPokemonCard {

    constructor( myId, myName, myImage, myType ){
        this.id = myId
        this.name = myName
        this.image = myImage
        this.type = myType.map(pokemonType => pokemonType.type.name)
    }
}

const ul = document.querySelector(`#pokemonList`)
const form = document.querySelector(`form`)
const dropdown = document.querySelector(`#dropdown`)

const getPokemon = async function (start, stop) {
    const tempArray = [];
    for (let i = start; i < stop; i++) {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const pokemon = await data.json()

        // new pokemonCard(pokemon.id,pokemon.name,pokemon.sprites.front_default)
        const pokemonCard = new aPokemonCard(pokemon.id, pokemon.name, pokemon.sprites.front_default, pokemon.types)
        renderPokemon(pokemonCard)
    }
}

getPokemon(1, 152)

form.addEventListener(`submit`, e => {
    e.preventDefault()
    let dropdownValue = parseInt(dropdown.value) + 1
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.childNodes[0])
    }
    getPokemon(1, dropdownValue)
    console.log(`Event is happening!`)
})

function renderPokemon(pokemonCard) {
    console.log(pokemonCard.type[0])
    const pokemonList = document.getElementById("pokemonList")
    const newListElement = document.createElement("li")
    const pokemonName = document.createElement('h3')
    const pokemonImage = document.createElement('img')
    const pokemonTypes = document.createElement('h3')
    const likeButton = document.createElement('button')
    const favoritesText = document.createElement(`p`)

    likeButton.classList.add(`button`)
    newListElement.dataset.pokemonNumber = pokemonCard.id
    pokemonName.innerText = pokemonCard.id + " " + pokemonCard.name
    pokemonImage.src = pokemonCard.image
    favoritesText.innerText = `Click the Pokemon Ball Above to Favorite`
    pokemonTypes.style.fontFamily = 'Sigmar One'
    favoritesText.style.fontFamily = 'Shadows Into Light'
    // likeButton.innerText = "Favorite"

    //since pokemon can have 1 or 2 types run a for loop to add to string that runs the length of the array
    for (let x = 0; x < pokemonCard.type.length; x++)
        pokemonTypes.innerText = pokemonTypes.innerText + pokemonCard.type[x] + ` `

    switch (pokemonCard.type[0]) {
        case 'bug':
            newListElement.style.backgroundColor = `#94bc4a`
            break;
        case 'electric':
            newListElement.style.backgroundColor = `#e5c531`
            break;
        case 'dark':
            newListElement.style.backgroundColor = `#736c75`
            break;
        case 'dragon':
            newListElement.style.backgroundColor = `#6a7baf`
            break;
        case 'fairy':
            newListElement.style.backgroundColor = `#e397d1`
            break;
        case 'fighting':
            newListElement.style.backgroundColor = `#cb5f48`
            break;
        case 'fire':
            newListElement.style.backgroundColor = `#ea7a3c`
            break;
        case 'flying':
            newListElement.style.backgroundColor = `#7da6de`
            break;
        case 'ghost':
            newListElement.style.backgroundColor = `#846ab6`
            break;
        case 'grass':
            newListElement.style.backgroundColor = `#71c558`
            break;
        case 'ground':
            newListElement.style.backgroundColor = `#cc9f4f`
            break;
        case 'ice':
            newListElement.style.backgroundColor = `#70cbd4`
            break;
        case 'normal':
            newListElement.style.backgroundColor = `#aab09f`
            break;
        case 'poison':
            newListElement.style.backgroundColor = `#b468b7`
            break;
        case 'psychic':
            newListElement.style.backgroundColor = `#e5709b`
            break;
        case 'rock':
            newListElement.style.backgroundColor = `#b2a061`
            break;
        case 'steel':
            newListElement.style.backgroundColor = `#89a1b0`
            break;
        case 'water':
            newListElement.style.backgroundColor = `#539ae2`
            break;
    }

    newListElement.appendChild(pokemonName)
    newListElement.appendChild(pokemonImage)
    newListElement.appendChild(pokemonTypes)
    newListElement.appendChild(likeButton)
    newListElement.appendChild(favoritesText)
    pokemonList.appendChild(newListElement)
    likeButton.addEventListener(`click`, e => favoritesRender(e, pokemonCard))
}

const favoritesRender = (e, pokemonCard) => {
    e.target.parentNode.classList.add(`hidden`)
    const newListElement = document.createElement("li")
    const pokemonName = document.createElement('h3')
    const pokemonImage = document.createElement('img')
    const pokemonTypes = document.createElement('h3')
    const favoritesButton = document.createElement('button')
    const favoritesText = document.createElement(`p`)

    favoritesButton.classList.add(`remove-button`)
    favoritesButton.setAttribute(`id`, `button`)
    newListElement.dataset.pokeNumber = pokemonCard.id
    pokemonName.innerText = pokemonCard.id + " " + pokemonCard.name
    pokemonImage.src = pokemonCard.image
    pokemonTypes.style.fontFamily = 'Sigmar One'
    favoritesText.style.fontFamily = 'Shadows Into Light'
    // favoritesText.style.fontSize = '1em'
    // favoritesButton.innerText = `Remove from Favorites`
    favoritesText.innerText = `Click the Pokemon Ball Above to Remove from Favorites`

    //since pokemon can have 1 or 2 types run a for loop to add to string that runs the length of the array
    for (let x = 0; x < pokemonCard.type.length; x++)
        pokemonTypes.innerText = pokemonTypes.innerText + pokemonCard.type[x] + " "

    switch (pokemonCard.type[0]) {
        case 'bug':
            newListElement.style.backgroundColor = `#94bc4a`
            break;
        case 'electric':
            newListElement.style.backgroundColor = `#e5c531`
            break;
        case 'dark':
            newListElement.style.backgroundColor = `#736c75`
            break;
        case 'dragon':
            newListElement.style.backgroundColor = `#6a7baf`
            break;
        case 'fairy':
            newListElement.style.backgroundColor = `#e397d1`
            break;
        case 'fighting':
            newListElement.style.backgroundColor = `#cb5f48`
            break;
        case 'fire':
            newListElement.style.backgroundColor = `#ea7a3c`
            break;
        case 'flying':
            newListElement.style.backgroundColor = `#7da6de`
            break;
        case 'ghost':
            newListElement.style.backgroundColor = `#846ab6`
            break;
        case 'grass':
            newListElement.style.backgroundColor = `#71c558`
            break;
        case 'ground':
            newListElement.style.backgroundColor = `#cc9f4f`
            break;
        case 'ice':
            newListElement.style.backgroundColor = `#70cbd4`
            break;
        case 'normal':
            newListElement.style.backgroundColor = `#aab09f`
            break;
        case 'poison':
            newListElement.style.backgroundColor = `#b468b7`
            break;
        case 'psychic':
            newListElement.style.backgroundColor = `#e5709b`
            break;
        case 'rock':
            newListElement.style.backgroundColor = `#b2a061`
            break;
        case 'steel':
            newListElement.style.backgroundColor = `#89a1b0`
            break;
        case 'water':
            newListElement.style.backgroundColor = `#539ae2`
            break;
    }

    newListElement.appendChild(pokemonName)
    newListElement.appendChild(pokemonImage)
    newListElement.appendChild(pokemonTypes)
    newListElement.appendChild(favoritesButton)
    newListElement.appendChild(favoritesText)
    likeContainer.appendChild(newListElement)

    favoritesButton.addEventListener(`click`, e => removeFavoritesRender(e, pokemonCard))
}

const removeFavoritesRender = (e, pokemonCard) => {
    e.target.parentNode.remove()
    let unfavoriteItem = e.target.parentNode.dataset.pokeNumber
    let matchingItem = document.querySelector(`[data-pokemon-number~="${unfavoriteItem}"]`)
    matchingItem.className = ''
}