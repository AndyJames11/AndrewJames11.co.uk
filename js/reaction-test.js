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
    document.getElementById('second-click').style.display = 'block'; // Show the 'click now!' state of the button

    document.getElementById('second-click').style.display = 'none';
    document.getElementById('try-again').style.display = 'block';

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