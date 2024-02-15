// https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion.json

async function getAPIChampion(){
    const url = "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion.json";
    const response = await fetch(url);
    const data = await response.json();

    const championsList = Object.keys(data.data);

    afficherChampion(data, championsList);
}

function afficherChampion(json, champions) {
    var container = document.createElement('div');
    container.classList.add('container', 'text-center');
    document.body.appendChild(container);

    var rowCount = Math.ceil(champions.length / 5); // Utilisez la longueur de champions
    for (var i = 0; i < rowCount; i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for (var j = 0; j < 5; j++) {
            var championIndex = i * 5 + j;
            if (championIndex >= champions.length) break;

            const url = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[championIndex]}_0.jpg`;
            const championHTML = `
                <div class="col">
                    <div class="championImageContainer">
                        <img src="${url}" class="img-fluid shadow-lg championImage">
                        <div class="championTextTitle">${json.data[champions[championIndex]].title}</div>
                        <div class="championTextTags">${json.data[champions[championIndex]].tags}</div>
                    </div>
                    <p class="text-bg-dark p-3 text-center">${champions[championIndex]}</p>
                </div>
            `;
            row.innerHTML += championHTML;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    getAPIChampion();
    singedDeplacement();

    function singedDeplacement(){
        const singed = document.getElementById('singed');
        let distance = 0;
        const gap = "50px";

        function moveRight() {
            const moveRightInterval = setInterval(() => {
                distance += 10;
                singed.style.left = distance + 'px';
        
                // S'arrête lorsque le bord à droite est atteint
                if (distance >= window.innerWidth - singed.clientWidth - gap ) {
                    clearInterval(moveRightInterval);
                    singed.style.transform = "scaleX(1)";
                    moveLeft(); // Appelle la fonction pour commencer le mouvement vers la gauche
                }
            }, 1000 / 2);
        }
        
        function moveLeft() {
            const moveLeftInterval = setInterval(() => {
                distance -= 10;
                singed.style.left = distance + 'px';
        
                // S'arrête lorsque le bord à gauche est atteint
                if (distance <= 0) {
                    clearInterval(moveLeftInterval);
                    singed.style.transform = "scaleX(-1)";
                    moveRight(); // Appelle la fonction pour commencer le mouvement vers la droite
                }
            }, 1000 / 2);
        }
        
        // Appelle la fonction pour commencer le mouvement vers la droite
        moveRight();
    }
});