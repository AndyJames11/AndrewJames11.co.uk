// Collapsible sections for descriptions on each JavaScript section

// Possible dark/light mode switch

function randRole() { // Defines an array and chooses a random item when the button is clicked
    let roleArray= ["Top","Jungle","Mid","ADC","Support"];
    let randomRole = roleArray[Math.floor(Math.random() * roleArray.length)];
    document.getElementById("randRoleButton").innerHTML=randomRole;
}

function resetLoL() { // Resets elements back to original state when clicked
    let champs = document.getElementsByClassName('champText');
    for (let i = 0; i < champs.length; i++) {
        champs[i].innerHTML = "";
    }
    document.getElementById("randRoleButton").innerHTML = "Random role";
}

function randTop() {// Defines an array and chooses a random item when the button is clicked
    let topArray = [
        "Aatrox", "Akali", "Akshan", "Alistar", "Amumu", "Ashe", "Blitzcrank", 
        "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Darius", "Draven", 
        "Dr. Mundo", "Ezreal", "Fiora", "Fizz", "Gangplank", "Garen", "Gnar", 
        "Gragas", "Gwen", "Illaoi", "Irelia", "Jax", "Jayce", "Kayle", "Kennen", 
        "Kled", "K'Sante", "Lee Sin", "Lucian", "Malphite", "Maokai", "Mordekaiser", 
        "Nasus", "Nidalee", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", 
        "Rengar", "Riven", "Rumble", "Sett", "Shen", "Singed", "Sion", "Teemo", 
        "Trundle", "Tryndamere", "Urgot", "Vayne", "Volibear", "Wukong", "Yasuo", 
        "Yone", "Yorick", "Zac", "Zed"
    ];
    let randomTop = topArray[Math.floor(Math.random() * topArray.length)];
    alert(randomTop); // Displays alert with selected item from the array
    // document.getElementById("topText").innerHTML = randomTop;
}

function randJung() { // Defines an array and chooses a random item when the button is clicked
    let jungArray = [
        "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", 
        "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", 
        "Brand", "Braum", "Briar", "Camille", "Cassiopeia", "Cho'Gath", "Corki", 
        "Darius", "Diana", "Draven", "Dr. Mundo", "Ekko", "Elise", "Evelynn", "Ezreal", 
        "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", 
        "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", 
        "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Kai'Sa", 
        "Kalista", "Karma", "Karthus", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", 
        "Kled", "K'Sante", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", 
        "Lucian", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", 
        "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", 
        "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Ornn", "Pantheon", 
        "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", 
        "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", 
        "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", 
        "Sion", "Skarner", "Smoulder", "Sona", "Swain", "Sylas", "Syndra", "Tahm Kench", 
        "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", 
        "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", 
        "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", 
        "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", 
        "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
    ];
    let randomJung = jungArray[Math.floor(Math.random() * jungArray.length)];
    alert(randomJung); // Displays alert with selected item from the array
    // document.getElementById("jungText").innerHTML = random;
}

function randMid() { // Defines an array and chooses a random item when the button is clicked
    let midArray = [
        "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", 
        "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", 
        "Brand", "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", 
        "Corki", "Darius", "Diana", "Draven", "Dr. Mundo", "Ekko", "Elise", "Evelynn", 
        "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", 
        "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", 
        "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", 
        "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", 
        "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "K'Sante", 
        "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu",
        "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", 
        "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", 
        "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", 
        "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", 
        "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", 
        "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", 
        "Singed", "Sion", "Sivir", "Skarner", "Smoulder", "Sona", "Soraka", "Swain", 
        "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", 
        "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", 
        "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", 
        "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", 
        "Xin Zhao", "Yasuo", "Yone", "Yorick", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", 
        "Zoe", "Zyra"
    ];
    let randomMid = midArray[Math.floor(Math.random() * midArray.length)];
    alert(randomMid); // Displays alert with selected item from the array
    // document.getElementById("midText").innerHTML = randomMid;
}

function randBot() { // Defines an array and chooses a random item when the button is clicked
    let botArray = [
        "Aatrox", "Ahri", "Akali", "Akshan", "Amumu", "Anivia", "Aphelios", "Ashe", 
        "Azir", "Bard", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Corki", "Darius", 
        "Diana", "Draven", "Ekko", "Ezreal", "Fiora", "Fizz", "Gangplank", "Garen", 
        "Gnar", "Gragas", "Gwen", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Janna", 
        "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Katarina", 
        "Kayn", "Kennen", "Kindred", "Kled", "Kog'Maw", "K'Sante", "LeBlanc", "Lee Sin", 
        "Lillia", "Lissandra", "Lucian", "Malzahar", "Master Yi", "Miss Fortune", 
        "Mordekaiser", "Naafiri", "Nasus", "Nidalee", "Nilah", "Nocturne", "Olaf", 
        "Orianna", "Ornn", "Pantheon", "Poppy", "Qiyana", "Quinn", "Rek'Sai", "Renekton", 
        "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Sett", 
        "Shyvana", "Sivir", "Smoulder", "Sylas", "Syndra", "Taliyah", "Talon", "Teemo", 
        "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", 
        "Urgot", "Varus", "Vayne", "Veigar", "Vex", "Vi", "Viego", "Viktor", "Volibear", 
        "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", 
        "Zac", "Zed", "Zeri", "Ziggs", "Zilean"
    ];
    let randomBot = botArray[Math.floor(Math.random() * botArray.length)];
    alert(randomBot); // Displays alert with selected item from the array
    // document.getElementById("botText").innerHTML = randomBot;
}

function randSupp() { // Defines an array and chooses a random item when the button is clicked
    let suppArray = [
        "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", 
        "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", 
        "Braum", "Briar", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Darius", 
        "Diana", "Draven", "Dr. Mundo", "Ekko", "Elise", "Fiddlesticks", "Fiora", 
        "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", 
        "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna", 
        "Jarvan IV", "Jax", "Jayce", "Kalista", "Karma", "Karthus", "Kassadin", 
        "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", 
        "K'Sante", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lulu", "Lux", 
        "Malphite", "Malzahar", "Maokai", "Miss Fortune", "Milio", "Mordekaiser", 
        "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nunu & Willump", 
        "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", 
        "Rakan", "Rammus", "Rell", "Renata Glasc", "Renekton", "Rengar", "Ryze", "Sejuani", 
        "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Skarner", 
        "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", 
        "Taric", "Teemo", "Thresh", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", 
        "Varus", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Volibear", 
        "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Zac", 
        "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
    ];
    var randomSupp = supArray[Math.floor(Math.random() * suppArray.length)];
    alert(randomSupp); // Displays alert with selected item from the array
    // document.getElementById("suppText").innerHTML = randomSupp;
}

// Football position section

// Gets original styling and content when page is loaded. Used to reset styling to default later on
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

let counter = 0; // Starts a counter to prevent the same position being allocated twice in the array

function randPos() { // If all positions are taken, do not display a new position and instead display an alert
    let posArray = getVisiblePositions(); // If the background color is yellow, the position is filled
    const filledPositions = Array.from(document.getElementsByClassName('position')).filter(pos => pos.style.backgroundColor === 'yellow');

    if (filledPositions.length === posArray.length) {
        alert("All positions are filled!");
        return;
    }

    let random; // If the math.random selects a position which has a yellow background, run the math.random again
    do {
        random = posArray[Math.floor(Math.random() * posArray.length)];
    } while (document.getElementById(random).style.backgroundColor === 'yellow');

    const position = document.getElementById(random);

    let personName = '';
    while (!personName) { // Ask for a name. If the name is blank or with just a spacebar, ask for a valid name
        personName = prompt("Enter the person's name:").trim();
        if (!personName) {
            alert("Name cannot be blank. Please enter a valid name.");
        }
    }

    position.innerHTML = personName; // Add the user inputted name to the position text
    position.style.backgroundColor = "yellow"; // Change the background color to yellow of selected position
    position.style.border = "1px solid black"; // Add a 1px black border to selected position
    counter++; // Increase the counter by 1
}

function clearPos() { // Reset all elements back to original state
    const positionElements = document.getElementsByClassName('position');
    for (let i = 0; i < positionElements.length; i++) {
        positionElements[i].innerHTML = originalContent[i];
        positionElements[i].style.backgroundColor = originalColor[i];
        positionElements[i].style.border = originalBorder[i]; // Restoring the original border
    }
}

function changeFormation() {

    resetStyles(); // Reset position styles to default state when changing formation

    const formation = document.getElementById("formationSelect").value; // Get the formation from the list
    switch (formation) { // Changes styling depending on selected formation
        case "4-3-3": // First formation in the list
            setPositions({ // Changes position and visibility of relevant positions
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
            break; // Stop processing more rules
        case "4-2-3-1": // Second formation in the list
            setPositions({ // Changes position and visibility of relevant positions
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
            break; // Stop processing more rules
        case "4-4-2": // Third formation in the list
            setPositions({ // Changes position and visibility of relevant positions
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
            break; // Stop processing more rules
    }
}

function setPositions(positions) { // Ensures elements are visible/not visible when they should be
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

function resetStyles() { // Resets styling back to default state
    const positionElements = document.getElementsByClassName('position');
    for (let i = 0; i < positionElements.length; i++) {
        positionElements[i].innerHTML = originalContent[i];
        positionElements[i].style.backgroundColor = originalColor[i];
        positionElements[i].style.border = originalBorder[i];
    }
}

function getVisiblePositions() { // Checks which positions are displayed so the correct position is filled
    const visiblePositions = [];
    const positionElements = document.getElementsByClassName('position');
    for (let i = 0; i < positionElements.length; i++) {
        if (positionElements[i].style.display !== 'none') {
            visiblePositions.push(positionElements[i].id);
        }
    }
    return visiblePositions;
}

// SWEEPSTAKE SECTION

// Used to reset styling to default later on
let originalCountryContent = [];
let originalCountryColor = [];
let originalCountryBorder = [];

// Stores the styling and text of the elements at the point the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    const countryElements = document.getElementsByClassName('country');
    for (let i = 0; i < countryElements.length; i++) {
        originalCountryContent.push(countryElements[i].innerHTML);
        originalCountryColor.push(countryElements[i].style.backgroundColor);
        originalCountryColor.push(countryElements[i].style.color);
    }
});

let countriesArray = [ // Stores countries in an array to be called from later
    "Germany", "Scotland", "Hungary", "Switzerland", 
    "Spain", "Croatia", "Italy", "Albania", 
    "Slovenia", "Denmark", "Serbia", "England", 
    "Poland", "Netherlands", "Austria", "France", 
    "Belgium", "Slovakia", "Romania", "Ukraine", 
    "Turkey", "Georgia", "Portugal", "Czech Republic"];
let assignedCountries = [];

function Sweepstake() { // If all countries assigned, display an alert
  if (countriesArray.length === 0) {
    document.getElementById("Sweepstake").innerHTML = "All countries have been assigned.";
    return;
  }

  let name = prompt("Please enter your name:"); // Prompt for a name. If name is empty, ask to enter it again
  if (!name) {
    alert("Name cannot be empty. Please try again.");
    return;
  }

  let randomIndex = Math.floor(Math.random() * countriesArray.length);
  let selectedCountry = countriesArray[randomIndex];

  // alert(name + ' - ' + selectedCountry);

  countriesArray.splice(randomIndex, 1);

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

// NAVBAR DROPDOWN MENUS

document.addEventListener("DOMContentLoaded", function() {
    const dropdownArrows = document.getElementsByClassName("navbarArrow"); // Select all elements with class 'navbarArrow'
    let openDropdown = null; // Keep track of currently opened dropdown menu

    function closeOpenDropdowns() {
        if (openDropdown) {
            openDropdown.style.maxHeight = "0px"; // Collapse the open dropdown
            openDropdown.style.transition = "max-height 1s ease-in-out"; // Smooth transition for collapsing
            openDropdown.previousElementSibling.classList.remove("flipped"); // Remove the 'flipped' class from the arrow

            setTimeout(() => {
                openDropdown.style.display = "none"; // Hide the dropdown completely
                openDropdown = null; // Reset the openDropdown variable
            }, 1000); // 1 second delay to match the transition duration
        }
    }

    Array.from(dropdownArrows).forEach((arrow) => { // Creates an array from each dropdownArrow so it can be iterated over 
        arrow.addEventListener("click", function(event) { // Run the function when the arrow is clicked
            event.stopPropagation(); // This ensures that clicking the arrow does not trigger the click event to closeOpenDropdowns
            const dropdownList = arrow.nextElementSibling; // Selects the next sibling of the clicked arrow.
            // This assumes the navbarArrow is directly followed by the relevant dropdownList in the HTML file

            // If there is a dropdownList open, close it instantly and unflip the navbarArrow
            if (openDropdown && openDropdown !== dropdownList) {
                openDropdown.style.maxHeight = "0px";
                openDropdown.previousElementSibling.classList.remove("flipped");
                openDropdown.style.display = "none";
            }

            // If the clicked dropdown is not already open, open it smoothly and flip the arrow to show that the menu is open
            if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
                dropdownList.style.display = "inline-block";
                dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
                arrow.classList.add("flipped");
                dropdownList.style.transition = "max-height 1s ease-in-out";
                openDropdown = dropdownList;
            } else { // If the clicked dropdown is already open, close it.
                dropdownList.style.maxHeight = "0px";
                dropdownList.style.transition = "max-height 1s ease-in-out";
                arrow.classList.remove("flipped");
                setTimeout(() => {
                    dropdownList.style.display = "none";
                }, 1000);
                openDropdown = null;
            }
        });
    });

    // Click event listener to close the dropdown when clicking elsewhere on the screen
    document.addEventListener("click", function() {
        closeOpenDropdowns(); // Close the open dropdown
    });
});

// Collapsible button for descriptions of different features
let accordian = document.getElementsByClassName("collapsible"); // Define the variable 'accordian' and link to .collapsible element
let i;

for (i = 0; i < accordian.length; i++) { 
  accordian[i].addEventListener("click", function() {
    this.classList.toggle("active"); // Adds/removes '.active' class to the element on click
    let content = this.nextElementSibling; // Links 'content' to the next sibling of '.collapsible' which in this case is the 'p' element
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // If content is visible, hide it
      content.style.borderWidth = "0"; // Hide the border
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // If content is invisible, show it
      content.style.borderWidth = "1px"; // Show the border
    }
  });
}