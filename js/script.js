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

            var col = document.createElement('div');
            col.classList.add('col');
            if (j >= 3 && championIndex === champions.length - 2) {
                col.classList.add('col-sm-6', 'w-75');
            }
            row.appendChild(col);

            var imageContainer = document.createElement('div');
            imageContainer.classList.add('championImageContainer'); // Ajouter la classe championImageContainer
            col.appendChild(imageContainer);

            const url = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champions[championIndex] + "_0.jpg";
            var image = document.createElement('img');
            image.src = url;
            image.classList.add('img-fluid', 'shadow-lg', 'championImage'); // Ajouter la classe championImage
            imageContainer.appendChild(image);

            var name = document.createElement('p');
            name.textContent = champions[championIndex];
            name.classList.add('text-bg-dark', 'p-3', 'shadow-lg', 'text-center');
            col.appendChild(name);

            var title = document.createElement('div');
            title.textContent = json.data[champions[championIndex]].title; 
            title.classList.add('championTextTitle');
            imageContainer.appendChild(title);

            var blurb = document.createElement('div');
            blurb.textContent = json.data[champions[championIndex]].tags; 
            blurb.classList.add('championTextTags');
            imageContainer.appendChild(blurb);

        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    getAPIChampion();
    singedDeplacement();

    function singedDeplacement(){
        const singed = document.getElementById('singed');
        console.log(singed);
        let distance = 0;

        function moveRight() {
            const moveRightInterval = setInterval(() => {
                distance += 10;
                singed.style.left = distance + 'px';
        
                // S'arrête lorsque le bord à droite est atteint
                if (distance >= window.innerWidth - singed.clientWidth) {
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