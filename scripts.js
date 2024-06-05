function createPokemonCard(pokemon) {
    const numberText = pokemon.number ? `#${pokemon.number}<br />` : ''; 

    return `
        <div class="col-md-2">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="encPokemon">
            <p class="description">
                ${numberText}
                ${pokemon.name}
            </p>
        </div>
    `;
}

function addToCollection(pokemonName) {
    const pokemon = {
        name: pokemonName,
        image: `../images/encyklopedia/${pokemonName.toLowerCase()}.png`, 
    };
    let privateCollection = JSON.parse(localStorage.getItem('privateCollection')) || [];
    privateCollection.push(pokemon);
    localStorage.setItem('privateCollection', JSON.stringify(privateCollection));
    displayCollection(privateCollection);
    alert(`${pokemonName} added to your collection!`);
}


function displayCollection(collection) {
    const collectionContainer = document.getElementById('collection-container');
    collectionContainer.innerHTML = '';

    const collectionHTML = collection.map(pokemon => createPokemonCard(pokemon)).join('');

    collectionContainer.innerHTML = collectionHTML;
}

let privateCollection = JSON.parse(localStorage.getItem('privateCollection')) || [];

displayCollection(privateCollection);
