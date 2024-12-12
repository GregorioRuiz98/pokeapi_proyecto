const fetchPokemon = async () => {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const pokemonDataDiv = document.getElementById('pokemonData');
    pokemonDataDiv.innerHTML = 'Loading...';

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) throw new Error('Pokémon not found');

        const data = await response.json();
        pokemonDataDiv.innerHTML = `
            <h2>${data.name.toUpperCase()}</h2>
            <p>ID: ${data.id}</p>
            <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
    } catch (error) {
        pokemonDataDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
};

document.getElementById('fetchPokemon').addEventListener('click', fetchPokemon);
