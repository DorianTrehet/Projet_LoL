// https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion.json

async function getAPIChampion(){
    const url = "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion.json";
    const response = await fetch(url);
    const champions = await response.json();
    console.log(champions);
}