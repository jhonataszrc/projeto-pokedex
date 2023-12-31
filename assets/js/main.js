
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `
            <li class="pokemon">
                 <span class="number">#001</span>
                <span class="nome">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://seeklogo.com/images/B/bulbasaur-logo-8A27924C02-seeklogo.com.png" 
                alt="${pokemon.name}">
            </div>
    
    `
    }

    const pokemonList = document.getElementById('pokemonList')
fetch(url)
    .then((response)=> response.json())
    .then((jsonBody)=> jsonBody.results)
    .then((pokemons)=> {

    for (let i=0; i < pokemons.length; i++){
        const pokemon = pokemons[i];
        console.log(convertPokemonToLi(pokemon));
        pokemonList.innerHTML += convertPokemonToLi(pokemon);
    }

})

.catch((error) => console.error(error));


