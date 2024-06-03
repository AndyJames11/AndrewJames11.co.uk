function RandRole() {
    let myarray= ["Top","Jungle","Mid","ADC","Support"];
    let random = myarray[Math.floor(Math.random() * myarray.length)];
    document.getElementById("randRoleButton").innerHTML=random;
}

function ResetLoL() {
    let champs = document.getElementsByClassName('ChampText');
    for (let i = 0; i < champs.length; i++) {
        champs[i].innerHTML = "";
    }
    document.getElementById("randRoleButton").innerHTML = "Random role";
}

function RandTop() {
    let myarray= ["Aatrox","Akali","Akshan","Alistar","Amumu","Ashe","Blitzcrank","Caitlyn","Camille","Cassiopeia","Cho'Gath","Darius","Draven","Dr. Mundo","Ezreal","Fiora","Fizz","Gangplank","Garen","Gnar","Gragas","Gwen","Illaoi","Irelia","Jax","Jayce","Kayle","Kennen","Kled","K'Sante","Lee Sin","Lucian","Malphite","Maokai","Mordekaiser","Nasus","Nidalee","Olaf","Ornn","Pantheon","Poppy","Quinn","Renekton","Rengar","Riven","Rumble","Sett","Shen","Singed","Sion","Teemo","Trundle","Tryndamere","Urgot","Vayne","Volibear","Wukong","Yasuo","Yone","Yorick","Zac","Zed"];
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    // alert(random);
    document.getElementById('TopText').innerHTML=random;
}

function RandJung() {
    let myarray = ["Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Aurelion Sol","Azir","Bard","Bel'Veth","Blitzcrank","Brand","Braum","Briar","Camille","Cassiopeia","Cho'Gath","Corki","Darius","Diana","Draven","Dr. Mundo","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Hwei","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Kai'Sa","Kalista","Karma","Karthus","Katarina","Kayle","Kayn","Kennen","Kha'Zix","Kindred","Kled","K'Sante","LeBlanc","Lee Sin","Leona","Lillia","Lissandra","Lucian","Lux","Malphite","Malzahar","Maokai","Master Yi","Miss Fortune","Mordekaiser","Morgana","Naafiri","Nami","Nasus","Nautilus","Neeko","Nidalee","Nilah","Nocturne","Nunu & Willump","Olaf","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","Rek'Sai","Rell","Renata Glasc","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Skarner","Smoulder", "Sona","Swain","Sylas","Syndra","Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Vel'Koz","Vex","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","Xin Zhao","Yasuo","Yone","Yorick","Zac","Zed","Zeri","Ziggs","Zilean","Zoe","Zyra"];
var random = myarray[Math.floor(Math.random() * myarray.length)];
    // alert(random);
    document.getElementById("JungText").innerHTML=random;
}

function RandMid() {
    let myarray = ["Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Aurelion Sol","Azir","Bard","Bel'Veth","Blitzcrank","Brand","Braum","Briar","Caitlyn","Camille","Cassiopeia","Cho'Gath","Corki","Darius","Diana","Draven","Dr. Mundo","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Hwei","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx","Kai'Sa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Kha'Zix","Kindred","Kled","Kog'Maw","K'Sante","LeBlanc","Lee Sin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","Master Yi","Miss Fortune","Milio","Mordekaiser","Morgana","Naafiri","Nami","Nasus","Nautilus","Neeko","Nidalee","Nilah","Nocturne","Nunu & Willump","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","Rek'Sai","Rell","Renata Glasc","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Smoulder","Sona","Soraka","Swain","Sylas","Syndra","Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Vel'Koz","Vex","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","Xin Zhao","Yasuo","Yone","Yorick","Zac","Zed","Zeri","Ziggs","Zilean","Zoe","Zyra"];
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    // alert(random);
    document.getElementById("MidText").innerHTML=random;
}

function RandADC() {
    let myarray = ["Aatrox","Ahri","Akali","Akshan","Amumu","Anivia","Aphelios","Ashe","Azir","Bard","Briar","Caitlyn","Camille","Cassiopeia","Corki","Darius","Diana","Draven","Ekko","Ezreal","Fiora","Fizz","Gangplank","Garen","Gnar","Gragas","Gwen","Heimerdinger","Hwei","Illaoi","Irelia","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx","Kai'Sa","Kalista","Katarina","Kayn","Kennen","Kindred","Kled","Kog'Maw","K'Sante","LeBlanc","Lee Sin","Lillia","Lissandra","Lucian","Malzahar","Master Yi","Miss Fortune","Mordekaiser","Naafiri","Nasus","Nidalee","Nilah","Nocturne","Olaf","Orianna","Ornn","Pantheon","Poppy","Qiyana","Quinn","Rek'Sai","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Senna","Sett","Shyvana","Sivir","Smoulder","Sylas","Syndra","Taliyah","Talon","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Urgot","Varus","Vayne","Veigar","Vex","Vi","Viego","Viktor","Volibear","Warwick","Wukong","Xayah","Xerath","Xin Zhao","Yasuo","Yone","Yorick","Zac","Zed","Zeri","Ziggs","Zilean"];
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    // alert(random);
    document.getElementById("ADCText").innerHTML=random;
}

function RandSupp() {
    let myarray = ["Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Aurelion Sol","Azir","Bard","Blitzcrank","Brand","Braum","Briar","Caitlyn","Camille","Cassiopeia","Cho'Gath","Darius","Diana","Draven","Dr. Mundo","Ekko","Elise","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim","Heimerdinger","Hwei","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Kha'Zix","Kindred","Kled","Kog'Maw","K'Sante","LeBlanc","Lee Sin","Leona","Lillia","Lissandra","Lulu","Lux","Malphite","Malzahar","Maokai","Miss Fortune","Milio","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nunu & Willump","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","Rell","Renata Glasc","Renekton","Rengar","Ryze","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Skarner", "Sona","Soraka","Swain","Sylas","Syndra","Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh","Trundle","Tryndamere","Twisted Fate","Twitch","Varus","Veigar","Vel'Koz","Vex","Vi","Viego","Viktor","Volibear","Warwick","Wukong","Xerath","Xin Zhao","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"];
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    // alert(random);
    document.getElementById("SuppText").innerHTML=random;
}

// Football position section

let originalContent = [];
let originalColor = [];
let originalBorder = [];

// Stores the styling and text of the elements at the point the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    const positionElements = document.getElementsByClassName('position');
    for (let i = 0; i < positionElements.length; i++) {
        originalContent.push(positionElements[i].innerHTML);
        originalColor.push(positionElements[i].style.backgroundColor);
        originalBorder.push(positionElements[i].style.border);
    }
});

let counter = 0;

function RandPos() {
    let myarray = getVisiblePositions();
    const filledPositions = Array.from(document.getElementsByClassName('position')).filter(pos => pos.style.backgroundColor === 'yellow');

    if (filledPositions.length === myarray.length) {
        alert("All positions are filled!");
        return;
    }

    let random;
    do {
        random = myarray[Math.floor(Math.random() * myarray.length)];
    } while (document.getElementById(random).style.backgroundColor === 'yellow');

    const position = document.getElementById(random);

    let personName = '';
    while (!personName) {
        personName = prompt("Enter the person's name:").trim();
        if (!personName) {
            alert("Name cannot be blank. Please enter a valid name.");
        }
    }

    position.innerHTML = personName;
    position.style.backgroundColor = "yellow";
    position.style.border = "1px solid black";
    counter++;
}

function ClearPos() {
    const positionElements = document.getElementsByClassName('position');
    for (let i = 0; i < positionElements.length; i++) {
        positionElements[i].innerHTML = originalContent[i];
        positionElements[i].style.backgroundColor = originalColor[i];
        positionElements[i].style.border = originalBorder[i]; // Restoring the original border
    }
}