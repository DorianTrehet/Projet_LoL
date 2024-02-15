// https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion.json
document.addEventListener('DOMContentLoaded', function() {
async function getAPIChampion(){
    const url = "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion.json";
    const response = await fetch(url);
    const champions = await response.json();

    var championsList = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "DrMundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kindred", "Kled", "KogMaw", "Leblanc", "LeeSin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "MissFortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Velkoz", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
    afficherChampion(champions, championsList);
    setInterval(function() {
        afficherChampion(champions, championsList);
    }, 5000);

    function afficherChampion(champions){
        var Champ = championAleatoire(championsList);
        console.log(Champ);
        const url = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+Champ+"_0.jpg";
        $("#title").html("<strong>"+Champ+"</strong>"+"<br>"+champions.data[Champ].title);
        $("#image").attr("src", url);
    }

    function championAleatoire(champions) {
        var randomIndex = Math.floor(Math.random() * champions.length);
        return champions[randomIndex];
    }
}

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