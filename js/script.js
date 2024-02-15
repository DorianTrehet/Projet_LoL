// https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion.json

async function getAPIChampion(){
    const url = "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion.json";
    const response = await fetch(url);
    const data = await response.json();

    const championsList = Object.keys(data.data);

    afficherChampion(championsList);
}

function afficherChampion(champions){
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
            if (j >= 3 && championIndex === champions.length - 2) { // Vérifiez si c'est l'avant-dernier champion sur la ligne
                col.classList.add('col-sm-6'); // Ajoutez une classe pour réduire la largeur de la colonne
            }
            row.appendChild(col);
            
            const url = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+champions[championIndex]+"_0.jpg";
            var image = document.createElement('img');
            image.src = url; 
            image.classList.add('img-fluid', 'shadow-lg', 'p-3', 'mb-5', 'bg-dark', 'rounded', 'fadeIn'); // Ajoutez la classe fadeIn pour l'animation de fondu
            col.appendChild(image);
    
            var title = document.createElement('p');
            title.textContent = champions[championIndex];
            title.classList.add('text-bg-dark', 'p-3', 'text-center');
            col.appendChild(title);
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
                distance += 50;
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
                distance -= 50;
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