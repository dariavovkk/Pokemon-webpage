function createPokemonCard(pokemon) {
    return `
        <div class="col-md-2">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="encPokemon">
            <p class="description">
                #${pokemon.number}<br />
                ${pokemon.name}
            </p>
            <button class="add-to-collection" onclick="addToCollection('${pokemon.name}')">Kolekcja</button>
        </div>
    `;
}

function createPokemonListComponent(title, description, pokemons) {
    const pokemonCards = pokemons.map(createPokemonCard).join('');
    return `
        <div class="list-container">
            <div class="listInfo">
                <h1 class="listHead">${title} <span class="pokemon-color">Pokémon</span></h1>
                <p class="listText">${description}</p>
            </div>
            <div class="row align-items-center encRow">
                ${pokemonCards}
            </div>
        </div>
    `;
}

function addToCollection(pokemonName) {
    const pokemon = {
        name: pokemonName,
        image: `../images/encyklopedia/${pokemonName.toLowerCase()}.png`,
    };
    privateCollection.push(pokemon);
    localStorage.setItem('privateCollection', JSON.stringify(privateCollection));
    alert(`${pokemonName} added to your collection!`);
}

let privateCollection = JSON.parse(localStorage.getItem('privateCollection')) || [];

//Generacja 1
const generation1Pokemons = [
    { number: '0001', name: 'Bulbasaur', image: '../images/encyklopedia/bulbasaur.png' },
    { number: '0002', name: 'Ivysaur', image: '../images/encyklopedia/ivysaur.png' },
    { number: '0003', name: 'Venusaur', image: '../images/encyklopedia/venusaur.png' },
    { number: '0004', name: 'Charmander', image: '../images/encyklopedia/charmander.png' },
    { number: '0005', name: 'Charmeleon', image: '../images/encyklopedia/charmeleon.png' },
    { number: '0006', name: 'Charizard', image: '../images/encyklopedia/charizard.png' },
    { number: '0007', name: 'Squirtle', image: '../images/encyklopedia/squirtle.png' },
    { number: '0008', name: 'Wartortle', image: '../images/encyklopedia/wartortle.png' },
    { number: '0009', name: 'Blastoise', image: '../images/encyklopedia/blastoise.png' },
    { number: '0010', name: 'Caterpie', image: '../images/encyklopedia/caterpie.png' },
    { number: '0111', name: 'Metapod', image: '../images/encyklopedia/metapod.png' },
    { number: '0012', name: 'Butterfree', image: '../images/encyklopedia/butterfree.png' },
];

//Generacja 2
const generation2Pokemons = [
    { number: '0152', name: 'Chikorita', image: '../images/encyklopedia/chikorita.png' },
    { number: '0153', name: 'Bayleef', image: '../images/encyklopedia/bayleef.png' },
    { number: '0154', name: 'Meganium', image: '../images/encyklopedia/meganium.png' },
    { number: '0155', name: 'Cyndaquil', image: '../images/encyklopedia/cyndaquil.png' },
    { number: '0156', name: 'Quilava', image: '../images/encyklopedia/quilava.png' },
    { number: '0157', name: 'Typhlosion', image: '../images/encyklopedia/typhlosion.png' },
    { number: '0158', name: 'Totodile', image: '../images/encyklopedia/totodile.png' },
    { number: '0159', name: 'Croconaw', image: '../images/encyklopedia/croconaw.png' },
    { number: '0160', name: 'Feraligatr', image: '../images/encyklopedia/feraligatr.png' },
    { number: '0161', name: 'Sentret', image: '../images/encyklopedia/sentret.png' },
    { number: '0162', name: 'Furret', image: '../images/encyklopedia/furret.png' },
    { number: '0163', name: 'Hoothoot', image: '../images/encyklopedia/hoothoot.png' },
];

//Generacja 3
const generation3Pokemons = [
    { number: '0252', name: 'Treecko', image: '../images/encyklopedia/treecko.png' },
    { number: '0253', name: 'Grovyle', image: '../images/encyklopedia/grovyle.png' },
    { number: '0254', name: 'Sceptile', image: '../images/encyklopedia/sceptile.png' },
    { number: '0255', name: 'Torchic', image: '../images/encyklopedia/torchic.png' },
    { number: '0256', name: 'Combusken', image: '../images/encyklopedia/combusken.png' },
    { number: '0257', name: 'Blaziken', image: '../images/encyklopedia/blaziken.png' },
    { number: '0258', name: 'Mudkip', image: '../images/encyklopedia/mudkip.png' },
    { number: '0259', name: 'Marshtomp', image: '../images/encyklopedia/marshtomp.png' },
    { number: '0260', name: 'Swampert', image: '../images/encyklopedia/swampert.png' },
    { number: '0261', name: 'Poochyena', image: '../images/encyklopedia/poochyena.png' },
    { number: '0262', name: 'Mightyena', image: '../images/encyklopedia/mightyena.png' },
    { number: '0263', name: 'Zigzagoon', image: '../images/encyklopedia/zigzagoon.png' },
];

//Generacja 4
const generation4Pokemons = [
    { number: '0387', name: 'Turtwig', image: '../images/encyklopedia/turtwig.png' },
    { number: '0388', name: 'Grotle', image: '../images/encyklopedia/grotle.png' },
    { number: '0389', name: 'Torterra', image: '../images/encyklopedia/torterra.png' },
    { number: '0390', name: 'Chimchar', image: '../images/encyklopedia/chimchar.png' },
    { number: '0391', name: 'Monferno', image: '../images/encyklopedia/monferno.png' },
    { number: '0392', name: 'Infernape', image: '../images/encyklopedia/infernape.png' },
    { number: '0393', name: 'Piplup', image: '../images/encyklopedia/piplup.png' },
    { number: '0394', name: 'Prinplup', image: '../images/encyklopedia/prinplup.png' },
    { number: '0395', name: 'Empoleon', image: '../images/encyklopedia/empoleon.png' },
    { number: '0396', name: 'Starly', image: '../images/encyklopedia/starly.png' },
    { number: '0397', name: 'Staravia', image: '../images/encyklopedia/staravia.png' },
    { number: '0398', name: 'Staraptor', image: '../images/encyklopedia/staraptor.png' },
];

//Generacja 5
const generation5Pokemons = [
    { number: '0494', name: 'Victini', image: '../images/encyklopedia/victini.png' },
    { number: '0495', name: 'Snivy', image: '../images/encyklopedia/snivy.png' },
    { number: '0496', name: 'Servine', image: '../images/encyklopedia/servine.png' },
    { number: '0497', name: 'Serperior', image: '../images/encyklopedia/serperior.png' },
    { number: '0498', name: 'Tepig', image: '../images/encyklopedia/tepig.png' },
    { number: '0499', name: 'Pignite', image: '../images/encyklopedia/pignite.png' },
    { number: '0500', name: 'Emboar', image: '../images/encyklopedia/emboar.png' },
    { number: '0501', name: 'Oshawott', image: '../images/encyklopedia/oshawott.png' },
    { number: '0502', name: 'Dewott', image: '../images/encyklopedia/dewott.png' },
    { number: '0503', name: 'Samurott', image: '../images/encyklopedia/samurott.png' },
    { number: '0504', name: 'Patrat', image: '../images/encyklopedia/patrat.png' },
    { number: '0505', name: 'Watchog', image: '../images/encyklopedia/watchog.png' },
];

//Generacja 6
const generation6Pokemons = [
    { number: '0652', name: 'Chespin', image: '../images/encyklopedia/chespin.png' },
    { number: '0653', name: 'Quilladin', image: '../images/encyklopedia/quilladin.png' },
    { number: '0654', name: 'Chesnaught', image: '../images/encyklopedia/chesnaught.png' },
    { number: '0655', name: 'Fennekin', image: '../images/encyklopedia/fennekin.png' },
    { number: '0656', name: 'Braixen', image: '../images/encyklopedia/braixen.png' },
    { number: '0657', name: 'Delphox', image: '../images/encyklopedia/delphox.png' },
    { number: '0658', name: 'Froakie', image: '../images/encyklopedia/froakie.png' },
    { number: '0659', name: 'Frogadier', image: '../images/encyklopedia/frogadier.png' },
    { number: '0660', name: 'Greninja', image: '../images/encyklopedia/greninja.png' },
    { number: '0661', name: 'Bunnelby', image: '../images/encyklopedia/bunnelby.png' },
    { number: '0662', name: 'Diggersby', image: '../images/encyklopedia/diggersby.png' },
    { number: '0663', name: 'Fletchling', image: '../images/encyklopedia/fletchling.png' },
];

//Generacja 7
const generation7Pokemons = [
    { number: '0722', name: 'Rowlet', image: '../images/encyklopedia/rowlet.png' },
    { number: '0723', name: 'Dartrix', image: '../images/encyklopedia/dartrix.png' },
    { number: '0724', name: 'Decidueye', image: '../images/encyklopedia/decidueye.png' },
    { number: '0725', name: 'Litten', image: '../images/encyklopedia/litten.png' },
    { number: '0726', name: 'Torracat', image: '../images/encyklopedia/torracat.png' },
    { number: '0727', name: 'Incineroar', image: '../images/encyklopedia/incineroar.png' },
    { number: '0728', name: 'Popplio', image: '../images/encyklopedia/popplio.png' },
    { number: '0729', name: 'Brionne', image: '../images/encyklopedia/brionne.png' },
    { number: '0730', name: 'Primarina', image: '../images/encyklopedia/primarina.png' },
    { number: '0731', name: 'Pikipek', image: '../images/encyklopedia/pikipek.png' },
    { number: '0732', name: 'Trumbeak', image: '../images/encyklopedia/trumbeak.png' },
    { number: '0733', name: 'Toucannon', image: '../images/encyklopedia/toucannon.png' },
];

//Generacja 8
const generation8Pokemons = [
    { number: '0810', name: 'Grookey', image: '../images/encyklopedia/grookey.png' },
    { number: '0811', name: 'Thwackey', image: '../images/encyklopedia/thwackey.png' },
    { number: '0812', name: 'Rillaboom', image: '../images/encyklopedia/rillaboom.png' },
    { number: '0813', name: 'Scorbunny', image: '../images/encyklopedia/scorbunny.png' },
    { number: '0814', name: 'Raboot', image: '../images/encyklopedia/raboot.png' },
    { number: '0815', name: 'Cinderace', image: '../images/encyklopedia/cinderace.png' },
    { number: '0816', name: 'Sobble', image: '../images/encyklopedia/sobble.png' },
    { number: '0817', name: 'Drizzile', image: '../images/encyklopedia/drizzile.png' },
    { number: '0818', name: 'Inteleon', image: '../images/encyklopedia/inteleon.png' },
    { number: '0819', name: 'Skwovet', image: '../images/encyklopedia/skwovet.png' },
    { number: '0820', name: 'Greedent', image: '../images/encyklopedia/greedent.png' },
    { number: '0821', name: 'Rookidee', image: '../images/encyklopedia/rookidee.png' },
];

//Generacja 9
const generation9Pokemons = [
    { number: '0906', name: 'Sprigatito', image: '../images/encyklopedia/sprigatito.png' },
    { number: '0907', name: 'Floragato', image: '../images/encyklopedia/floragato.png' },
    { number: '0908', name: 'Meowscarada', image: '../images/encyklopedia/meowscarada.png' },
    { number: '0909', name: 'Fuecoco', image: '../images/encyklopedia/fuecoco.png' },
    { number: '0910', name: 'Crocalor', image: '../images/encyklopedia/crocalor.png' },
    { number: '0911', name: 'Skeledirge', image: '../images/encyklopedia/skeledirge.png' },
    { number: '0912', name: 'Quaxly', image: '../images/encyklopedia/quaxly.png' },
    { number: '0913', name: 'Quaxwell', image: '../images/encyklopedia/quaxwell.png' },
    { number: '0914', name: 'Quaquaval', image: '../images/encyklopedia/quaquaval.png' },
    { number: '0915', name: 'Lechonk', image: '../images/encyklopedia/lechonk.png' },
    { number: '0916', name: 'Oinkologne', image: '../images/encyklopedia/oinkologne.png' },
    { number: '0917', name: 'Tarountula', image: '../images/encyklopedia/tarountula.png' },
];

document.getElementById('pokemon-container1').innerHTML = createPokemonListComponent(
    'Generacja 1',
    'Generacja 1 Pokemon to pierwsza grupa Pokemonów wprowadzona w serii gier Pokemon. Składa się z wielu klasycznych i ikonicznych Pokemonów, które stały się znane na całym świecie.',
    generation1Pokemons
);

document.getElementById('pokemon-container2').innerHTML = createPokemonListComponent(
    'Generacja 2',
    'Generacja 2 Pokemon to druga grupa Pokemonów wprowadzona w serii gier Pokemon. Składa się z wielu interesujących Pokemonów wprowadzonych w regionie Johto, który był głównym regionem gry w grach Pokemon Gold, Silver i Crystal.',
    generation2Pokemons
);

document.getElementById('pokemon-container3').innerHTML = createPokemonListComponent(
    'Generacja 3',
    'Generacja 3 Pokemon, znana również jako Pokemony z regionu Hoenn, została wprowadzona w grach Pokemon Ruby, Sapphire i Emerald. Ta generacja przyniosła wiele nowych gatunków Pokemonów oraz nowe mechaniki gry, takie jak umiejętności Pokemonów i podwójne walki.',
    generation3Pokemons
);

document.getElementById('pokemon-container4').innerHTML = createPokemonListComponent(
    'Generacja 4',
    'Generacja 4 Pokemon to czwarta grupa Pokemonów wprowadzona w serii gier Pokemon. Została wprowadzona w grach Pokemon Diamond, Pearl i Platinum, które odbywają się w regionie Sinnoh.',
    generation4Pokemons
);

document.getElementById('pokemon-container5').innerHTML = createPokemonListComponent(
    'Generacja 5',
    'Generacja 5 Pokemon to piąta grupa Pokemonów wprowadzona w serii gier Pokemon. Została wprowadzona w grach Pokemon Black i White, które odbywają się w regionie Unova.',
    generation5Pokemons
);

document.getElementById('pokemon-container6').innerHTML = createPokemonListComponent(
    'Generacja 6',
    'Generacja 6 Pokemon to szósta grupa Pokemonów wprowadzona w serii gier Pokemon. Została wprowadzona w grach Pokemon X i Y, które odbywają się w regionie Kalos.',
    generation6Pokemons
);

document.getElementById('pokemon-container7').innerHTML = createPokemonListComponent(
    'Generacja 7',
    'Generacja 7 Pokemon to siódma grupa Pokemonów wprowadzona w serii gier Pokemon. Została wprowadzona w grach Pokemon Sun i Moon, które odbywają się w regionie Alola.',
    generation7Pokemons
);

document.getElementById('pokemon-container8').innerHTML = createPokemonListComponent(
    'Generacja 8',
    'Generacja 8 Pokemon to ósma grupa Pokemonów wprowadzona w serii gier Pokemon. Została wprowadzona w grach Pokemon Sword i Shield, które odbywają się w regionie Galar.',
    generation8Pokemons
);

document.getElementById('pokemon-container9').innerHTML = createPokemonListComponent(
    'Generacja 9',
    'Generacja 9 Pokemon to dziewiąta grupa Pokemonów wprowadzona w serii gier Pokemon. Została wprowadzona w grach Pokemon Scarlet i Violet.',
    generation9Pokemons
);