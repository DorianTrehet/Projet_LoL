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

    var rowCount = Math.ceil(champions.length / 5); 
    for (var i = 0; i < rowCount; i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for (var j = 0; j < 5; j++) {
            var championIndex = i * 5 + j;
            if (championIndex >= champions.length) break;

            const url = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[championIndex]}_0.jpg`;
            const championTag = json.data[champions[championIndex]].tags;
            let championHTML = `
                <div class="col">
                    <a href="detail-champion.html?champion=${champions[championIndex]}">
                        <div class="championImageContainer">
                            <img src="${url}" class="img-fluid shadow-lg championImage">
                            <div class ="championTextTitle">${json.data[champions[championIndex]].title}</div>
                            <div class = "d-flex justify-content-around">
                            `;
            
            if (championTag[0] === 'Assassin' || championTag[1] === 'Assassin') {
                championHTML += `<img src="medias/assassin-removebg.png" alt="" class="championImgTags">`;
            } if (championTag[0] === 'Fighter' || championTag[1] === 'Fighter') {
                championHTML += `<img src="medias/fighter-removebg.png" alt="" class="championImgTags">`;
            } if (championTag[0] === 'Mage' || championTag[1] === 'Mage') {
                championHTML += `<img src="medias/mage-removebg.png" alt="" class="championImgTags">`;
            } if (championTag[0] === 'Marksman' || championTag[1] === 'Marksman') {
                championHTML += `<img src="medias/marksman-removebg.png" alt="" class="championImgTags">`;
            } if (championTag[0] === 'Support' || championTag[1] === 'Support') {
                championHTML += `<img src="medias/support-removebg.png" alt="" class="championImgTags">`;
            } if (championTag[0] === 'Tank' || championTag[1] === 'Tank') {
                championHTML += `<img src="medias/tank-removebg.png" alt="" class="championImgTags">`;
            }
            
            championHTML += `
                    </div>
                    </a>
                    <h5 id="champName" class=" bg-dark p-3 text-center">${champions[championIndex]}</h5>
                </div>
            `;
            
            row.innerHTML += championHTML;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    getAPIChampion();
    singedDeplacement();

    const categories = document.getElementById('categories');

    categories.addEventListener('click', function(event) {
        event.preventDefault();
        const category = event.target.dataset.category;
        if (category) {
            filterChampionsByCategory(category);
        }
    });

    function filterChampionsByCategory(category) {
        // Logique pour filtrer les champions par catégorie et afficher uniquement ceux correspondant à la catégorie sélectionnée
        console.log('Catégorie sélectionnée :', category);
        // Vous devez remplacer cette console.log par votre propre logique pour filtrer et afficher les champions selon la catégorie sélectionnée.
    }

    function singedDeplacement(){
        const singed = document.getElementById('singed');
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