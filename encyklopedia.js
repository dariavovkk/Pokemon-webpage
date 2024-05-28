function createPokemonCard(pokemon) {
    return `
        <div class="col-md-2">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="encPokemon">
            <p class="description">
                #${pokemon.number}<br />
                ${pokemon.name}
            </p>
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


//Generacja 1
const generation1Pokemons = [
    { number: '0001', name: 'Bulbasaur', image: '../images/home/pokemon/bulbasaur.png' },
    { number: '0002', name: 'Ivysaur', image: '../images/home/pokemon/ivysaur.png' },
    { number: '0003', name: 'Venusaur', image: '../images/home/pokemon/venusaur.png' },
    { number: '0004', name: 'Charmander', image: '../images/home/pokemon/charmander.png' },
    { number: '0005', name: 'Charmeleon', image: '../images/home/pokemon/charmeleon.png' },
    { number: '0006', name: 'Charizard', image: '../images/home/pokemon/charizard.png' },
    { number: '0007', name: 'Squirtle', image: '../images/home/pokemon/squirtle.png' },
    { number: '0008', name: 'Wartortle', image: '../images/home/pokemon/wartortle.png' },
    { number: '0009', name: 'Blastoise', image: '../images/home/pokemon/blastoise.png' },
    { number: '0010', name: 'Caterpie', image: '../images/home/pokemon/caterpie.png' },
    { number: '0111', name: 'Metapod', image: '../images/home/pokemon/metapod.png' },
    { number: '0012', name: 'Butterfree', image: '../images/home/pokemon/butterfree.png' },
];

//Generacja 2
const generation2Pokemons = [
    { number: '0152', name: 'Chikorita', image: '../images/encyklopedia/generation2/chikorita.png' },
    { number: '0153', name: 'Bayleef', image: '../images/encyklopedia/generation2/bayleef.png' },
    { number: '0154', name: 'Meganium', image: '../images/encyklopedia/generation2/meganium.png' },
    { number: '0155', name: 'Cyndaquil', image: '../images/encyklopedia/generation2/cyndaquil.png' },
    { number: '0156', name: 'Quilava', image: '../images/encyklopedia/generation2/quilava.png' },
    { number: '0157', name: 'Typhlosion', image: '../images/encyklopedia/generation2/typhlosion.png' },
    { number: '0158', name: 'Totodile', image: '../images/encyklopedia/generation2/totodile.png' },
    { number: '0159', name: 'Croconaw', image: '../images/encyklopedia/generation2/croconaw.png' },
    { number: '0160', name: 'Feraligatr', image: '../images/encyklopedia/generation2/feraligatr.png' },
    { number: '0161', name: 'Sentret', image: '../images/encyklopedia/generation2/sentret.png' },
    { number: '0162', name: 'Furret', image: '../images/encyklopedia/generation2/furret.png' },
    { number: '0163', name: 'Hoothoot', image: '../images/encyklopedia/generation2/hoothoot.png' },
];

//Generacja 3
const generation3Pokemons = [
    { number: '0252', name: 'Treecko', image: '../images/encyklopedia/generation3/treecko.png' },
    { number: '0253', name: 'Grovyle', image: '../images/encyklopedia/generation3/grovyle.png' },
    { number: '0254', name: 'Sceptile', image: '../images/encyklopedia/generation3/sceptile.png' },
    { number: '0255', name: 'Torchic', image: '../images/encyklopedia/generation3/torchic.png' },
    { number: '0256', name: 'Combusken', image: '../images/encyklopedia/generation3/combusken.png' },
    { number: '0257', name: 'Blaziken', image: '../images/encyklopedia/generation3/blaziken.png' },
    { number: '0258', name: 'Mudkip', image: '../images/encyklopedia/generation3/mudkip.png' },
    { number: '0259', name: 'Marshtomp', image: '../images/encyklopedia/generation3/marshtomp.png' },
    { number: '0260', name: 'Swampert', image: '../images/encyklopedia/generation3/swampert.png' },
    { number: '0261', name: 'Poochyena', image: '../images/encyklopedia/generation3/poochyena.png' },
    { number: '0262', name: 'Mightyena', image: '../images/encyklopedia/generation3/mightyena.png' },
    { number: '0263', name: 'Zigzagoon', image: '../images/encyklopedia/generation3/zigzagoon.png' },
];

//Generacja 4
const generation4Pokemons = [
    { number: '0387', name: 'Turtwig', image: '../images/encyklopedia/generation4/turtwig.png' },
    { number: '0388', name: 'Grotle', image: '../images/encyklopedia/generation4/grotle.png' },
    { number: '0389', name: 'Torterra', image: '../images/encyklopedia/generation4/torterra.png' },
    { number: '0390', name: 'Chimchar', image: '../images/encyklopedia/generation4/chimchar.png' },
    { number: '0391', name: 'Monferno', image: '../images/encyklopedia/generation4/monferno.png' },
    { number: '0392', name: 'Infernape', image: '../images/encyklopedia/generation4/infernape.png' },
    { number: '0393', name: 'Piplup', image: '../images/encyklopedia/generation4/piplup.png' },
    { number: '0394', name: 'Prinplup', image: '../images/encyklopedia/generation4/prinplup.png' },
    { number: '0395', name: 'Empoleon', image: '../images/encyklopedia/generation4/empoleon.png' },
    { number: '0396', name: 'Starly', image: '../images/encyklopedia/generation4/starly.png' },
    { number: '0397', name: 'Staravia', image: '../images/encyklopedia/generation4/staravia.png' },
    { number: '0398', name: 'Staraptor', image: '../images/encyklopedia/generation4/staraptor.png' },
];

//Generacja 5
const generation5Pokemons = [
    { number: '0494', name: 'Victini', image: '../images/encyklopedia/generation5/victini.png' },
    { number: '0495', name: 'Snivy', image: '../images/encyklopedia/generation5/snivy.png' },
    { number: '0496', name: 'Servine', image: '../images/encyklopedia/generation5/servine.png' },
    { number: '0497', name: 'Serperior', image: '../images/encyklopedia/generation5/serperior.png' },
    { number: '0498', name: 'Tepig', image: '../images/encyklopedia/generation5/tepig.png' },
    { number: '0499', name: 'Pignite', image: '../images/encyklopedia/generation5/pignite.png' },
    { number: '0500', name: 'Emboar', image: '../images/encyklopedia/generation5/emboar.png' },
    { number: '0501', name: 'Oshawott', image: '../images/encyklopedia/generation5/oshawott.png' },
    { number: '0502', name: 'Dewott', image: '../images/encyklopedia/generation5/dewott.png' },
    { number: '0503', name: 'Samurott', image: '../images/encyklopedia/generation5/samurott.png' },
    { number: '0504', name: 'Patrat', image: '../images/encyklopedia/generation5/patrat.png' },
    { number: '0505', name: 'Watchog', image: '../images/encyklopedia/generation5/watchog.png' },
];

//Generacja 6
const generation6Pokemons = [
    { number: '0652', name: 'Chespin', image: '../images/encyklopedia/generation6/chespin.png' },
    { number: '0653', name: 'Quilladin', image: '../images/encyklopedia/generation6/quilladin.png' },
    { number: '0654', name: 'Chesnaught', image: '../images/encyklopedia/generation6/chesnaught.png' },
    { number: '0655', name: 'Fennekin', image: '../images/encyklopedia/generation6/fennekin.png' },
    { number: '0656', name: 'Braixen', image: '../images/encyklopedia/generation6/braixen.png' },
    { number: '0657', name: 'Delphox', image: '../images/encyklopedia/generation6/delphox.png' },
    { number: '0658', name: 'Froakie', image: '../images/encyklopedia/generation6/froakie.png' },
    { number: '0659', name: 'Frogadier', image: '../images/encyklopedia/generation6/frogadier.png' },
    { number: '0660', name: 'Greninja', image: '../images/encyklopedia/generation6/greninja.png' },
    { number: '0661', name: 'Bunnelby', image: '../images/encyklopedia/generation6/bunnelby.png' },
    { number: '0662', name: 'Diggersby', image: '../images/encyklopedia/generation6/diggersby.png' },
    { number: '0663', name: 'Fletchling', image: '../images/encyklopedia/generation6/fletchling.png' },
];

//Generacja 7
const generation7Pokemons = [
    { number: '0722', name: 'Rowlet', image: '../images/encyklopedia/generation7/rowlet.png' },
    { number: '0723', name: 'Dartrix', image: '../images/encyklopedia/generation7/dartrix.png' },
    { number: '0724', name: 'Decidueye', image: '../images/encyklopedia/generation7/decidueye.png' },
    { number: '0725', name: 'Litten', image: '../images/encyklopedia/generation7/litten.png' },
    { number: '0726', name: 'Torracat', image: '../images/encyklopedia/generation7/torracat.png' },
    { number: '0727', name: 'Incineroar', image: '../images/encyklopedia/generation7/incineroar.png' },
    { number: '0728', name: 'Popplio', image: '../images/encyklopedia/generation7/popplio.png' },
    { number: '0729', name: 'Brionne', image: '../images/encyklopedia/generation7/brionne.png' },
    { number: '0730', name: 'Primarina', image: '../images/encyklopedia/generation7/primarina.png' },
    { number: '0731', name: 'Pikipek', image: '../images/encyklopedia/generation7/pikipek.png' },
    { number: '0732', name: 'Trumbeak', image: '../images/encyklopedia/generation7/trumbeak.png' },
    { number: '0733', name: 'Toucannon', image: '../images/encyklopedia/generation7/toucannon.png' },
];

//Generacja 8
const generation8Pokemons = [
    { number: '0810', name: 'Grookey', image: '../images/encyklopedia/generation8/grookey.png' },
    { number: '0811', name: 'Thwackey', image: '../images/encyklopedia/generation8/thwackey.png' },
    { number: '0812', name: 'Rillaboom', image: '../images/encyklopedia/generation8/rillaboom.png' },
    { number: '0813', name: 'Scorbunny', image: '../images/encyklopedia/generation8/scorbunny.png' },
    { number: '0814', name: 'Raboot', image: '../images/encyklopedia/generation8/raboot.png' },
    { number: '0815', name: 'Cinderace', image: '../images/encyklopedia/generation8/cinderace.png' },
    { number: '0816', name: 'Sobble', image: '../images/encyklopedia/generation8/sobble.png' },
    { number: '0817', name: 'Drizzile', image: '../images/encyklopedia/generation8/drizzile.png' },
    { number: '0818', name: 'Inteleon', image: '../images/encyklopedia/generation8/inteleon.png' },
    { number: '0819', name: 'Skwovet', image: '../images/encyklopedia/generation8/skwovet.png' },
    { number: '0820', name: 'Greedent', image: '../images/encyklopedia/generation8/greedent.png' },
    { number: '0821', name: 'Rookidee', image: '../images/encyklopedia/generation8/rookidee.png' },
];

//Generacja 9
const generation9Pokemons = [
    { number: '0906', name: 'Sprigatito', image: '../images/encyklopedia/generation9/sprigatito.png' },
    { number: '0907', name: 'Floragato', image: '../images/encyklopedia/generation9/floragato.png' },
    { number: '0908', name: 'Meowscarada', image: '../images/encyklopedia/generation9/meowscarada.png' },
    { number: '0909', name: 'Fuecoco', image: '../images/encyklopedia/generation9/fuecoco.png' },
    { number: '0910', name: 'Crocalor', image: '../images/encyklopedia/generation9/crocalor.png' },
    { number: '0911', name: 'Skeledirge', image: '../images/encyklopedia/generation9/skeledirge.png' },
    { number: '0912', name: 'Quaxly', image: '../images/encyklopedia/generation9/quaxly.png' },
    { number: '0913', name: 'Quaxwell', image: '../images/encyklopedia/generation9/quaxwell.png' },
    { number: '0914', name: 'Quaquaval', image: '../images/encyklopedia/generation9/quaquaval.png' },
    { number: '0915', name: 'Lechonk', image: '../images/encyklopedia/generation9/lechonk.png' },
    { number: '0916', name: 'Oinkologne', image: '../images/encyklopedia/generation9/oinkologne.png' },
    { number: '0917', name: 'Tarountula', image: '../images/encyklopedia/generation9/tarountula.png' },
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