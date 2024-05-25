function createStatsTable(containerId, pokemonData) {
    var columnNames = ["PŻ", "Atak", "Obrona", "Specjalna Ataka", "Specjalna Obrona", "Szybkość"];

    var tableContainer = document.getElementById(containerId);

    var statContainer = document.createElement("div");
    statContainer.classList.add("stat-container");

    for (var j = 0; j < 9; j++) {
        var row = document.createElement("div");
        row.classList.add("row", "align-items-center");

        if (j === 8) {
            row.classList.add("column-names");
        }

        for (var k = 0; k < 6; k++) {
            var column = document.createElement("div");
            column.classList.add("col-md-2");

            if (j === 8) {
                column.textContent = columnNames[k];
            } else {
                var statName = columnNames[k].toLowerCase().replace(" ", "_");
                var statValue = pokemonData[statName];

                var point = document.createElement("div");
                point.classList.add("point");

                if (j < statValue) {
                    point.style.backgroundColor = "#D5356F";
                    point.style.opacity = "0.4";
                } else {
                    point.style.backgroundColor = "#2E2594";
                    point.style.opacity = "0.7";
                }

                column.appendChild(point);
            }

            row.appendChild(column);
        }

        statContainer.appendChild(row);
    }

    tableContainer.appendChild(statContainer);
}

var bulbasaurData = {
    "pż": 5,
    "atak": 5,
    "obrona": 5,
    "specjalna_ataka": 4,
    "specjalna_obrona": 4,
    "szybkość": 5
};
createStatsTable('bulbasaurStats', bulbasaurData);

var charmanderData = {
    "pż": 5,
    "atak": 4,
    "obrona": 5,
    "specjalna_ataka": 4,
    "specjalna_obrona": 5,
    "szybkość": 4
};
createStatsTable('charmanderStats', charmanderData);

var squirtleData = {
    "pż": 5,
    "atak": 5,
    "obrona": 4,
    "specjalna_ataka": 5,
    "specjalna_obrona": 4,
    "szybkość": 5
};
createStatsTable('squirtleStats', squirtleData);

var caterpieData = {
    "pż": 5,
    "atak": 5,
    "obrona": 4,
    "specjalna_ataka": 5,
    "specjalna_obrona": 4,
    "szybkość": 5
};
createStatsTable('caterpieStats', caterpieData);

var pokemonImages = document.querySelectorAll('.evolution-container .evolution-item img');
pokemonImages.forEach(function(img) {
    img.addEventListener('click', function() {
        var containerId = this.parentElement.dataset.target;
        var pokemonName = this.alt.toLowerCase();
        var pokemonData = getPokemonData(pokemonName);
        updateStatsTable(containerId, pokemonData); 
    });
});

function getPokemonData(pokemonName) {
    var statsData = {
        "bulbasaur": { "pż": 5, "atak": 5, "obrona": 5, "specjalna_ataka": 4, "specjalna_obrona": 4, "szybkość": 5 },
        "ivysaur": { "pż": 4, "atak": 4, "obrona": 4, "specjalna_ataka": 3, "specjalna_obrona": 3, "szybkość": 4 },
        "venusaur": { "pż": 3, "atak": 3, "obrona": 3, "specjalna_ataka": 2, "specjalna_obrona": 2, "szybkość": 3 },
        "charmander": { "pż": 5, "atak": 4, "obrona": 5, "specjalna_ataka": 4, "specjalna_obrona": 5, "szybkość": 4 },
        "charmeleon": { "pż": 4, "atak": 4, "obrona": 4, "specjalna_ataka": 3, "specjalna_obrona": 4, "szybkość": 3 },
        "charizard": { "pż": 3, "atak": 3, "obrona": 3, "specjalna_ataka": 1, "specjalna_obrona": 3, "szybkość": 2 },
        "squirtle": { "pż": 5, "atak": 5, "obrona": 4, "specjalna_ataka": 5, "specjalna_obrona": 4, "szybkość": 5 },
        "wartortle": { "pż": 4, "atak": 4, "obrona": 3, "specjalna_ataka": 4, "specjalna_obrona": 3, "szybkość": 4 },
        "blastoise": { "pż": 3, "atak": 3, "obrona": 2, "specjalna_ataka": 3, "specjalna_obrona": 1, "szybkość": 3 },
        "caterpie": { "pż": 5, "atak": 6, "obrona": 5, "specjalna_ataka": 6, "specjalna_obrona": 6, "szybkość": 5 },
        "metapod": { "pż": 5, "atak": 6, "obrona": 4, "specjalna_ataka": 6, "specjalna_obrona": 6, "szybkość": 6 },
        "butterfree": { "pż": 4, "atak": 5, "obrona": 5, "specjalna_ataka": 2, "specjalna_obrona": 3, "szybkość": 3 }
    };

    return statsData[pokemonName];
}

function updateStatsTable(containerId, pokemonData) {
    var statTable = document.getElementById(containerId);

    if (statTable) {
        statTable.innerHTML = '';
        createStatsTable(containerId, pokemonData);
    } else {
        console.error("Container element with ID '" + containerId + "' not found.");
    }
}


