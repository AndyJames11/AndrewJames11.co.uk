# JavaScript Playground

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [User Experience](#user-experience)
- [Design and Typography](#design-and-typography)
- [Validation](#validation)
- [Technologies Used](#technologies-used)
- [Testing and Performance Optimization](#testing-and-performance-optimization)
- [Further Testing](#further-testing)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Usage](#usage)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

## Introduction
This project is built as part of my portfolio to demonstrate the skills I have learned during the course. I have used different JavaScript methods to create various functions, including a League of Legends role and champion randomizer, a football position randomizer, a Euro 2024 sweepstake simulator, and a currency converter. I have also purchased the domain name **andrewjames11.co.uk** which is linked to my GitHub pages for this repository.

## Features
1. **League of Legends Role and Champion Randomizer**: Allows users to randomly select roles and champions for the game.
2. **Football Position Randomizer**: Provides random football positions based on selected formations. Primarily used for FIFA Pro Clubs, but can also be used for normal 11-a-side football.
3. **Euro 2024 Sweepstake Simulator**: A sweepstake for the upcoming Euros football competition where the user is prompted to input a name, and then that name is assigned to a country playing in the Euros.
4. **Currency Converter**: A standard currency convertor which utilises a currency exchange API.
5. **Reaction Test Game**: A game where you click a button when the colour changes from Red to Green and your speed is recorded and displayed to you.

## User Experience
### User Stories
- **First-time Visitors**:
  - Understand the purpose of each section easily.
  - Use the randomiser features without needing prior knowledge.
- **Returning Visitors**:
  - Quickly access their favourite features.
  - See any new updates or improvements in functionality.
- **Frequent Visitors**:
  - Enjoy a seamless and consistent experience.
  - Benefit from any added features or optimizations.
  - Continue to use their favourite features.

## Design and Typography
- **Typography**: Uses Lato font for clarity and readability.
- **Color Scheme**: 
  - Background: On the JS-Index page I used a starry animated background which I sourced from [Here](https://codepen.io/sarazond/pen/LYGbwj). I then edited some of it to fit my page. On the Coming Soon page, the background used is linked [here](https://wallpaper.mob.org/pc/image/earth-waterfall-forest-mountain-nature-sunset-water-1505348.html). For the other JavaScript pages, backgrounds were used to have clear contrast between the features and the background.
  - Navbar: I designed a functional Navbar with clear sections and smooth transitions to ensure the user can quickly find the page they want to go to.
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
  - Used low resolution images for faster page loading.
  - Minimized DOM manipulation for faster interaction.
  - Used efficient loops.

## Further Testing
- **Random Role Selector**:
  - Tested that clicking the "Random role" button displays a random role from the predefined array.
  - Verified that the "Reset" button resets the section to it's default state.
- **League of Legends Role Randomizer**:
  - Ensured each role button (Top, Jungle, Mid, ADC, Support) displays a random champion from the predefined array.
  - Verified that the "Reset" button resets the section to it's default state.
- **Football Position Randomizer**:
  - Verified that using the dropdown to select a formation works as intended and switching back and forth between formations correctly displays the positions.
  - Ensured that the "Random position" button displays random positions based on the chosen formation without selecting a position which is already chosen.
  - Made sure reset button correctly resets the formations and positions back to the default state.
  - Tested that inputting a 'space' or not inputting anything for the name prompt shows an alert to say you must enter a name. (Numbers are allowed as users may choose to use their football shirt number instead of their name).
- **Currency Converter**:
  - Tested that entering an amount and selecting currencies converts the value accurately.
  - Verified that the "Reset" button resets the section to it's default state.
  - Entering something which is not a number correctly warns you to input a number.
- **Reaction Game Test**:
  - Tested that clicking the button started the game.
  - Verified that clicking the button early displayed an alert and reset the button to default state.
  - Ensured that on clicking the button after it turns green, the correct reaction time is displayed underneath.
<<<<<<< HEAD
- **Dropdown + Accordian Sections**
  - Verified that clicking on the dropdown arrows in the navigation bars correctly opens and closes the section.
  - Ensured that clicking on a different navigation menu closes the currently open one.
  - Verified that clicking on the accordians for the descriptions of the features correctly opens and closes the section.
  - Ensured that the content for the navigation bars and the accordian sections correctly displays and hides.
=======
>>>>>>> 666bae0ab4e118e63ee84250ff10e0f024e816be

## Bugs
1. **Random Role Button Text**: The text on the random role button sometimes fails to reset properly. ***Fixed 03/06/2024***
2. **Random League Role Icons**: The icons sometimes move slightly out of their intended position when the screen is resized.
3. **Football Position Visibility**: Some positions incorrectly remain visible when switching between formations. ***Fixed 29/05/2024***
4. **Sweepstake**: The reset button does not work correctly. It resets the text to white, the content to the football positions, and some of the content to undefined and also does not remove the highlighting on some of the content. ***Fixed 03/06/2024***
5. **JS-Index Page**: The page sometimes displayed incorrectly on smaller devices. The entire HTML content would be shrunk into the corner, and excess incorrect content would display in the rest of the screen. ***Fixed 11/06/2024***  

## Deployment
### GitHub Pages
The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/AndyJames11/AndrewJames11.co.uk)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" Section.
4. Under "Source", click the dropdown called "Deploy from a branch" and select "main".
5. The page will automatically refresh.
6. Update the 'Custom domain' section to point to my domain - www.andrewjames11.co.uk - and click 'Save'
7. The site is now live, select 'Visit site' button at the top of the "GitHub Pages" section. [Visit Site](www.AndrewJames11.co.uk/)

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/AndyJames11/AndrewJames11.co.uk)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/AndyJames11/AndrewJames11.co.uk.git
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/AndyJames11/AndrewJames11.co.uk.git
> Cloning into `AndrewJames11.co.uk-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Usage
- **Random Role Selector**: Click the "Random role" button to select a random role. Click the "Reset" button to clear the selections.
- **League of Legends Role Randomizer**: Click any role button (Top, Jungle, Mid, ADC, Support) to select a random champion for that role.
- **Football Position Randomizer**: (Currently commented out) Uncomment the relevant sections in `jstest.html` to enable this feature. Use the dropdown to select a formation and click the "Random position" button to select random football positions.
- **Sweepstake**: Click the Sweepstake button and then enter a name to assign that name to a country for the Euro's competition. This is intended to be used as a standard sweepstakes randomiser and I have already used it at my job for our company sweepstake. 
- **Currency Converter**: Enter the amount, select the currencies to convert from and to, and click "Convert". Click "Reset" to clear the inputs.
- **Reaction Test Game**: Click on the button to begin the reaction test. The button will turn red and begin a timer in the background. After a random time (between 3 and 10 seconds) the button will turn green. Click the button as quickly as you can after it turns green. Your score will be displayed below as the time it took to click the button after it became green. If you click the button too early, the game will reset and you will be told to not click it until it turns green.

## Credits
### Media
- **League of Legends background and role icons**
  - [League of Legends background](https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-champ-select/global/default/images/position-assignment/map-south.png) and [icons](https://developer.riotgames.com/docs/lol#data-dragon_data-assets) taken from official League of Legends asset files. Link to the full database [here](https://raw.communitydragon.org/)

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

- **Animated Background on Front Page**
  - I used the code found on [1stWebDseigner](https://1stwebdesigner.com/15-css-background-effects/) and converted it from HAML and SASS to HTML and CSS using a [HAML](https://herotofu.com/haml-converter) and [SASS](https://codebeautify.org/sass-to-css-converter) convertor. [Here](https://codepen.io/sarazond/pen/LYGbwj) is a link to the codepen page itself. The code was written by sarazond and they have allowed free use of it.

- **Coming Soon Page**
  - I used a template on W3Schools for this page. The source of the code is [here](https://www.w3schools.com/howto/howto_css_coming_soon.asp). The image used is taken from [here](https://wallpaper.mob.org/pc/image/earth-waterfall-forest-mountain-nature-sunset-water-1505348.html)

- **Accordian (Description) Sections**
  - I once again used a template on W3Schools for this as I was unsure how to make this work. After using the code on the site, I was able to understand the code and re-wrote it from scratch to fit my needs. The original template that I used is linked [here](https://www.w3schools.com/howto/howto_js_collapsible.asp) 

- **General Bootstrap Usage**
  - I used Bootstrap's [main page](https://getbootstrap.com/docs/5.0/getting-started/introduction/) to implement the stylings of most of the sections to ensure they are responsive and well laid out.

  ### Acknowledgements
- [W3schools.com](W3schools.com), [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) and [Stack Overflow](www.stackoverflow.com) were all very useful for troubleshooting specific issues and gaining a better understanding different things such as element positioning, containers, arrow functions, etc.
- Google was incredibly helpful for very specific things that I got stuck on during the project. I had to use Google many times to figure out why my functions were not working or to learn how to do something specific e.g. call an API for my currency convertor.
- Tutor support at Code Institute for their continued support.
