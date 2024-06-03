# JavaScript Playground

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [User Experience](#user-experience)
- [Design and Typography](#design-and-typography)
- [Technologies Used](#technologies-used)
- [Testing and Performance Optimization](#testing-and-performance-optimization)
- [Further Testing and Functional Testing](#further-testing-and-functional-testing)
- [Bugs](#bugs)
- [Credits](#credits)

## Introduction
This project is built as part of my portfolio to demonstrate the skills I have learned during the course. I have used different JavaScript methods to create various functions, including a League of Legends role and champion randomizer, a football position randomizer, a Euro 2024 sweepstake simulator, and a currency converter.

## Features
1. **League of Legends Role and Champion Randomizer**: Allows users to randomly select roles and champions for the game.
2. **Football Position Randomizer**: Provides random football positions based on selected formations. Primarily used for FIFA Pro Clubs, but can also be used for normal 11-a-side football.
3. **Euro 2024 Sweepstake Simulator**: A sweepstake for the upcoming Euros football competition where the user is prompted to input a name, and then that name is assigned to a country playing in the Euros.
4. **Currency Converter**: A standard currency convertor which utilises a currency exchange API.

## User Experience
### User Stories
- **First-time Visitors**:
  - Understand the purpose of each section easily.
  - Use the randomizer features without needing prior knowledge.
- **Returning Visitors**:
  - Quickly access their favorite features.
  - See any new updates or improvements in functionality.
- **Frequent Visitors**:
  - Enjoy a seamless and consistent experience.
  - Benefit from any added features or optimizations.

## Design and Typography
- **Typography**: Uses Lato font for clarity and readability.
- **Color Scheme**: 
  - Background: ***TBA***
  - Navbar: ***TBA***
  - Buttons: Cyan with animated hover effects
- **Imagery**:
  - League of Legends role icons
  - League of Legends map background
  - Football pitch hand-drawn in Microsoft Paint

## Technologies Used
- **HTML**: [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) for the structure of the web page.
- **CSS**: [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) for styling the HTML elements.
- **JavaScript**: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for interactive functionality.
- **Bootstrap**: [Bootstrap 5.0.2](https://getbootstrap.com/docs/5.0/getting-started/introduction/) for responsive design and pre-built components.

## Validation
- **HTML validation**
  - W3C validator

- **CSS validation**
  - Jigsaw validator

- **JavaScript validation**
  - JSLint.com

## Testing and Performance Optimization
- **Manual Testing**:
  - Ensured that buttons trigger the correct JavaScript functions.
  - Made sure the layout was responsive across different devices and screen sizes.
  - Ensured that the randomisers were not giving repeat results.
- **Performance Optimization**:
  - Minimized DOM manipulation for faster interaction.
  - Used efficient loops and event listeners.

## Further Testing

- **Random Role Selector**:
  - Tested that clicking the "Random role" button displays a random role from the predefined list.
  - Verified that the "Reset" button clears the selections.
- **League of Legends Role Randomizer**:
  - Ensured each role button (Top, Jungle, Mid, ADC, Support) displays a random champion.
  - Confirmed that the reset functionality works correctly by resetting the champion text.
- **Football Position Randomizer**:
  - Verified that using the dropdown to select a formation works as intended and switching back and forth between formations correctly displays the positions.
  - Ensured that the "Random position" button displays random positions based on the chosen formation without selecting a position which is already chosen.
  - Made sure reset button correctly resets the formations and positions back to the default state.
  - Tested that inputting a 'space' or not inputting anything for the name prompt shows an alert to say you must enter a name.
- **Currency Converter**:
  - Tested that entering an amount and selecting currencies converts the value accurately.
  - Verified that the "Reset" button clears all inputs.
  - Entering something which is not a number correctly warns you to input a number.

## Bugs
1. **Random Role Button Text**: The text on the random role button sometimes fails to reset properly. ***Fixed 29/05/2024***
2. **Random League Role Icons**: The icons sometimes move out of their intended position when the screen is resized.
3. **Football Position Visibility**: Some positions are not displaying correctly based on the chosen formation. ***Fixed 29/05/2024***
4. **Sweepstake**: The reset button does not work correctly. It resets the text to white, the content to the football positions, and some of the content to undefined and also does not remove the highlighting on some of the content. ***Fixed 29/05/2024***

## Credits

### Imagery
- **League of Legends background and role icons**
  - [Background](https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/images/position-assignment/map-south.png) and [icons](https://developer.riotgames.com/docs/lol#data-dragon_data-assets) taken from official League of Legends asset files. Link to the full database [here](https://raw.communitydragon.org/)


### Code Sources
- **Currency Converter**: 
  - I used a post found on Tutorials Point to give me a baseline for the currency converter. The code that I used as a baseline is as follows:
    ```javascript
    const convert = document.getElementById("convert");
      const result = document.getElementById("result");
      const from = document.getElementById("from");
      const to = document.getElementById("to");
      const amount = document.getElementById("amount");
      convert.addEventListener("click", function() {
         let fromCurrency = from.value;
         let toCurrency = to.value;
         let amt = amount.value;
         fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
         .then(response => {
               return response.json();
         })
         .then(data => {
            let rate = data.rates[toCurrency];
            let total = rate * amt;
            result.innerHTML = `${amt} ${fromCurrency} = ${total}
            ${toCurrency}`;
         });
      });
    ```
    I have re-written all of this code, but this was the main reference point for the code I wrote, so it looks fairly similar.
    Source: [Tutorials Point](https://www.tutorialspoint.com/how-to-create-a-currency-converter-in-javascript)
- **Random Selection Functions**: 
  - The random selection logic for roles and champions uses a common approach found in various coding forums:
    ```javascript
    function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    ```
    Source: [JavaScript Info](https://javascript.info/task/random)

- **General Bootstrap Usage**
  - I used Bootstrap's [main page](https://getbootstrap.com/docs/5.0/getting-started/introduction/) to implement the stylings of most of the sections to ensure they are responsive and well laid out.

## Setup



## Usage

- **Random Role Selector**: Click the "Random role" button to select a random role. Click the "Reset" button to clear the selections.
- **League of Legends Role Randomizer**: Click any role button (Top, Jungle, Mid, ADC, Support) to select a random champion for that role.
- **Football Position Randomizer**: (Currently commented out) Uncomment the relevant sections in `jstest.html` to enable this feature. Use the dropdown to select a formation and click the "Random position" button to select random football positions.
- **Sweepstake**: Click the Sweepstake button and then enter a name to assign that name to a country for the Euro's competition. This is intended to be used as a standard sweepstakes randomiser and I have already used it at my job for our company sweepstake. 
- **Currency Converter**: Enter the amount, select the currencies to convert from and to, and click "Convert". Click "Reset" to clear the inputs.