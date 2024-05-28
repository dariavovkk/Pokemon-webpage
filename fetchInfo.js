function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getPokemonInfo() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.trim().toLowerCase();
        if (!pokemonName) {
            alert('Please enter a Pokémon name.');
            return;
        }

        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${pokemonName}. Status code: ${response.status}`);
        }

        const pokemonData = await response.json();

        // Fetch species data for description and evolution chain
        const speciesUrl = pokemonData.species.url;
        const speciesResponse = await fetch(speciesUrl);

        if (!speciesResponse.ok) {
            throw new Error(`Failed to fetch species data for ${pokemonName}. Status code: ${speciesResponse.status}`);
        }

        const speciesData = await speciesResponse.json();

        // Find the English description and sanitize it
        const descriptionEntry = speciesData.flavor_text_entries.find(
            entry => entry.language.name === 'en'
        );

        let description = descriptionEntry ? descriptionEntry.flavor_text : 'No description available.';
        description = description.replace(/[\n\f]/g, ' '); // Replace newlines and form feeds with a space

        // Fetch evolution chain data
        const evolutionChainUrl = speciesData.evolution_chain.url;
        const evolutionResponse = await fetch(evolutionChainUrl);

        if (!evolutionResponse.ok) {
            throw new Error(`Failed to fetch evolution chain data. Status code: ${evolutionResponse.status}`);
        }

        const evolutionData = await evolutionResponse.json();
        const evolutions = await getEvolutionChainWithImages(evolutionData.chain);

        const pokemonInfoDiv = document.getElementById('pokemonInfo');
        pokemonInfoDiv.innerHTML = `
            <h2><span class="pokemon-color">${capitalizeFirstLetter(pokemonData.name)}</span></h2>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" class="fetchImage">
            <p><span class="infoFetch">ID:</span> ${pokemonData.id}</p>
            <p><span class="infoFetch">Zdolności:</span> ${pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <p><span class="infoFetch">Rodzaje:</span> ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
            <p><span class="infoFetch">Opis:</span> ${description}</p>
            <div class="evolution-container">
                ${evolutions.join('')}
            </div>
        `;
    } catch (error) {
        console.error(error);
        alert(`An error occurred: ${error.message}`);
    }
}

async function getEvolutionChainWithImages(chain) {
    let evolutions = [];
    let currentChain = chain;

    while (currentChain) {
        const speciesName = capitalizeFirstLetter(currentChain.species.name);
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${currentChain.species.name}`;
        const response = await fetch(pokemonUrl);

        if (response.ok) {
            const data = await response.json();
            const imageUrl = data.sprites.front_default;
            evolutions.push(`
                <div class="evolution-stage">
                    <img src="${imageUrl}" alt="${speciesName}">
                    <span>${speciesName}</span>
                </div>
            `);
        }

        currentChain = currentChain.evolves_to[0];
    }

    return evolutions;
}