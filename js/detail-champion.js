// Récupérer le paramètre d'URL 'champion'
const urlParams = new URLSearchParams(window.location.search);
const championName = urlParams.get('champion');

// Afficher le nom du champion dans la console pour vérification
console.log('Nom du champion:', championName);
getAPIChampionDetails(championName);

// Supposez que vous avez une fonction pour récupérer les détails du champion à partir de votre source de données
async function getAPIChampionDetails(championName) {
    const url = `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion/${championName}.json`;
    const response = await fetch(url);
    const data = await response.json();

    const championsList = Object.keys(data.data);
    console.log(data);
    // afficherChampion(data, championsList);
}
document.addEventListener('DOMContentLoaded', function() {

    let background = document.getElementById("background");
    background.style.backgroundImage = "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg')";
});