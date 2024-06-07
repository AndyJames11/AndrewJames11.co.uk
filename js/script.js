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

function changeFormation() {

    resetStyles();

    const formation = document.getElementById("formationSelect").value;
    switch (formation) {
        case "4-3-3":
            setPositions({
                GK: { top: "12%", left: "50%", text: "GK", visible: true },
                RB: { top: "30%", left: "20%", text: "RB", visible: true },
                LCB: { top: "30%", left: "40%", text: "LCB", visible: true },
                RCB: { top: "30%", left: "60%", text: "RCB", visible: true },
                LB: { top: "30%", left: "80%", text: "LB", visible: true },
                RCM: { top: "55%", left: "30%", text: "RCM", visible: true },
                CAM: { top: "65%", left: "50%", text: "CAM", visible: true },
                LCM: { top: "55%", left: "70%", text: "LCM", visible: true },
                RW: { top: "80%", left: "20%", text: "RW", visible: true },
                ST: { top: "90%", left: "50%", text: "ST", visible: true },
                LW: { top: "80%", left: "80%", text: "LW", visible: true },
                RM: { visible: false },
                LM: { visible: false },
                RDM: { visible: false },
                LDM: { visible: false },
                RAM: { visible: false },
                LAM: { visible: false },
                RS: { visible: false },
                LS: { visible: false }
            });
            break;
        case "4-2-3-1":
            setPositions({
                GK: { top: "12%", left: "50%", text: "GK", visible: true },
                RB: { top: "30%", left: "20%", text: "RB", visible: true },
                LCB: { top: "30%", left: "40%", text: "LCB", visible: true },
                RCB: { top: "30%", left: "60%", text: "RCB", visible: true },
                LB: { top: "30%", left: "80%", text: "LB", visible: true },
                RDM: { top: "50%", left: "35%", text: "RDM", visible: true },
                LDM: { top: "50%", left: "65%", text: "LDM", visible: true },
                RAM: { top: "70%", left: "20%", text: "RAM", visible: true },
                CAM: { top: "70%", left: "50%", text: "CAM", visible: true },
                LAM: { top: "70%", left: "80%", text: "LAM", visible: true },
                ST: { top: "90%", left: "50%", text: "ST", visible: true },
                RCM: { visible: false },
                LCM: { visible: false },
                RM: { visible: false },
                LM: { visible: false },
                RW: { visible: false },
                LW: { visible: false },
                RS: { visible: false },
                LS: { visible: false }
            });
            break;
        case "4-4-2":
            setPositions({
                GK: { top: "12%", left: "50%", text: "GK", visible: true },
                RB: { top: "30%", left: "20%", text: "RB", visible: true },
                LCB: { top: "30%", left: "40%", text: "LCB", visible: true },
                RCB: { top: "30%", left: "60%", text: "RCB", visible: true },
                LB: { top: "30%", left: "80%", text: "LB", visible: true },
                RM: { top: "55%", left: "20%", text: "RM", visible: true },
                RCM: { top: "55%", left: "40%", text: "RCM", visible: true },
                LCM: { top: "55%", left: "60%", text: "LCM", visible: true },
                LM: { top: "55%", left: "80%", text: "LM", visible: true },
                RS: { top: "80%", left: "35%", text: "ST", visible: true },
                LS: { top: "80%", left: "65%", text: "ST", visible: true },
                CAM: { visible: false },
                RDM: { visible: false },
                LDM: { visible: false },
                RAM: { visible: false },
                LAM: { visible: false },
                RW: { visible: false },
                LW: { visible: false },
                ST: { visible: false }
            });
            break;
    }
}

function setPositions(positions) {
    for (const [position, { top, left, text, visible }] of Object.entries(positions)) {
        const element = document.getElementById(position);
        if (visible === false) {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
            element.style.position = 'absolute';
            element.style.top = top;
            element.style.left = left;
            element.innerText = text;
        }
    }
}

function resetStyles() {
    const positionElements = document.getElementsByClassName('position');
    for (let i = 0; i < positionElements.length; i++) {
        positionElements[i].innerHTML = originalContent[i];
        positionElements[i].style.backgroundColor = originalColor[i];
        positionElements[i].style.border = originalBorder[i];
    }
}

function getVisiblePositions() {
    const visiblePositions = [];
    const positionElements = document.getElementsByClassName('position');
    for (let i = 0; i < positionElements.length; i++) {
        if (positionElements[i].style.display !== 'none') {
            visiblePositions.push(positionElements[i].id);
        }
    }
    return visiblePositions;
}



// Numbers allowed because of shirt number - Readme

// Collapsible sections for descriptions on each JavaScript section

// Possible dark/light mode switch


// SWEEPSTAKE SECTION

// Stores the styling and text of the elements at the point the page is loaded
let originalCountryContent = [];
let originalCountryColor = [];
let originalCountryBorder = [];

document.addEventListener("DOMContentLoaded", function() {
    const countryElements = document.getElementsByClassName('country');
    for (let i = 0; i < countryElements.length; i++) {
        originalCountryContent.push(countryElements[i].innerHTML);
        originalCountryColor.push(countryElements[i].style.backgroundColor);
        originalCountryColor.push(countryElements[i].style.color);
    }
});

let myarray = ["Germany", "Scotland", "Hungary", "Switzerland", "Spain", "Croatia", "Italy", "Albania", "Slovenia", "Denmark", "Serbia", "England", "Poland", "Netherlands", "Austria", "France", "Belgium", "Slovakia", "Romania", "Ukraine", "Turkey", "Georgia", "Portugal", "Czech Republic"];
let assignedCountries = [];

function Sweepstake() {
  if (myarray.length === 0) {
    document.getElementById("Sweepstake").innerHTML = "All countries have been assigned.";
    return;
  }

  let name = prompt("Please enter your name:");
  if (!name) {
    alert("Name cannot be empty. Please try again.");
    return;
  }

  let randomIndex = Math.floor(Math.random() * myarray.length);
  let selectedCountry = myarray[randomIndex];

  // alert(name + ' - ' + selectedCountry);

  myarray.splice(randomIndex, 1);

  let countryElement = document.getElementById(selectedCountry);
  countryElement.textContent = `${selectedCountry} - ${name}`;
  countryElement.style.backgroundColor = "black";
  countryElement.style.color = "white";
}

function resetSweepstake() {
    const countryElements = document.getElementsByClassName('country');
    for (let i = 0; i < countryElements.length; i++) {
        countryElements[i].innerHTML = originalCountryContent[i];
        countryElements[i].style.backgroundColor = originalCountryColor[i];
        countryElements[i].style.color = originalCountryColor[i];
    }
}

// CURRENCY CONVERTOR

// API key required for getting conversion rates from v6.exchangerate-api.com
const apiKey = "307f81c5347b7086b868c498";

// Retrieves values from the form. 
let currencyAmount = document.getElementById("currencyAmount"); // ID of amount to convert field
let currencyFrom = document.getElementById("currencyFrom"); // ID for 'From' field 
let currencyTo = document.getElementById("currencyTo"); // ID for 'To' field
let convert = document.getElementById("convert"); // ID of the 'Convert' button
let result = document.getElementById("finalValue"); // ID of the result field

function Convert() { // Adapted from https://www.tutorialspoint.com/how-to-create-a-currency-converter-in-javascript
    let fromCurrency = currencyFrom.value; // Obtains currency selected in 'From' field
    let toCurrency = currencyTo.value; // Obtains currency selected in 'To' field
    let amount = parseFloat(currencyAmount.value); // Converts value in 'amount' field to a 'floating-point number'. 
    // JavaScript may interpret inputs in this field as Strings even if they are numbers. 
    // This is likely not necessary but I read online that this is considered good practice

    // If input is not a number (NaN) an alert appears asking to enter a valid number
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Obtains current conversion rates from the currency converter API. 
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`) // Returns a promise from the API
    .then(response => response.json()) // Handles the promise and parses the JSON text
    .then(data => { // Handles promise returned by the response.json()
        if (data.conversion_rates && data.conversion_rates[toCurrency]) { // Checks if 'data' has a proprety of 'conversion_rates' and if it contains the target currency
            let rate = data.conversion_rates[toCurrency]; // stores the conversion rate of the specified currency
            let total = rate * amount; // Multiplies the conversion rate by the amount in the input field
            result.innerHTML = `${amount} ${fromCurrency} = ${total.toFixed(2)} ${toCurrency}`; 
            // Updates innerHTML text to show the amount of the selected currency e.g. $200 = the calculated total to 2 decimal places e.g. £160
        }
    })
    .catch(error => { // Catches any errors that occur
        console.error('Error fetching the exchange rate:', error); // Logs error message to console
        result.innerHTML = "Sorry, something went wrong."; // Displays this text if an error occurs
    });
};


// REACTION TIME GAME

let startTime, endTime, timeoutId;

function reactionTest() {
    document.getElementById('default-state').style.display = 'none'; // Hide first-state button on click
    document.getElementById('first-click').style.display = 'block'; // Show second-state button on click

    const randomDelay = Math.random() * 7000 + 3000; // random time between 3000ms and 10000ms.
    // Math.random() * 7000 generates a random number between 0 and 7000. 
    // Adding 3000 ensures the minimum value is 3000 (3 seconds), and the maximum is 10000 (10 seconds).

    timeoutId = setTimeout(() => { // Function to be executed after randomDelay
        document.getElementById('delay-button').style.backgroundColor = 'green'; // Set colour to green
        document.getElementById('delay-button').innerText = 'Click now!'; // Set inner text to 'Click now!'
        startTime = new Date().getTime(); // Gets the time at the point the button turns green
        document.getElementById('delay-button').onclick = getReactionTime; // Runs getReactionTime function onclick
    }, randomDelay); // Runs the setTimeout() function after the randomDelay
}

function getReactionTime() {
    endTime = new Date().getTime(); // Time at point button is clicked
    const reactionTime = (endTime - startTime) / 1000; // Calculates the time in seconds from when button turned green to when user clicked it

    document.getElementById('first-click').style.display = 'none'; // Hides the second-state of the button
    document.getElementById('second-click').style.display = 'block'; // Show the final state of the button

    document.getElementById('result-message').innerText = `Your reaction speed was ${reactionTime.toFixed(3)} seconds! Well done!`; 
    // Displays the calculated reaction time to 3 decimal points
}

// Clear timeout if user clicks before green
document.getElementById('delay-button').onclick = () => {
    clearTimeout(timeoutId); // Clears randomDelay timer and stops function running so the button will not change
    alert("You clicked too early! Please try again."); // Display an alert
    document.getElementById('default-state').style.display = 'block'; // Shows the first-state of the button again
    document.getElementById('first-click').style.display = 'none'; // Hides the second-state
};



// NAVBAR DROPDOWN MENUS

document.addEventListener("DOMContentLoaded", function() {
    const dropdownArrows = document.getElementsByClassName("navbarArrow");

    Array.from(dropdownArrows).forEach((arrow, index) => {
        arrow.addEventListener("click", function() {
            const dropdownList = arrow.nextElementSibling;
            if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
                dropdownList.style.display = "inline-block";
                dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
                arrow.classList.add("flipped");
                dropdownList.style.transition = "max-height 1s ease-in-out";
            } else {
                dropdownList.style.maxHeight = "0px";
                dropdownList.style.transition = "max-height 1s ease-in-out";
                arrow.classList.remove("flipped");
                setTimeout(() => {
                    dropdownList.style.display = "none";
                }, 1000);
            }
        });
    });
});