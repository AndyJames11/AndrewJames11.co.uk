document.addEventListener("DOMContentLoaded", function() {
    const dropdownArrow = document.getElementById("dropdownArrow"); // Assign a variable for dropdownArrow element
    const dropdownList = document.getElementById("dropdownList"); // Assign a variable for dropdownList element

    function dropdown() {
        if (dropdownList.style.display === "none" || dropdownList.style.display === "") { // If dropdownList is not visible...
            dropdownList.style.display = "inline-block"; // ...make it visible
            dropdownList.style.maxHeight = dropdownList.scrollHeight + "px"; // Ensuring dropdownList is correct height
            dropdownArrow.classList.add("flipped"); // Adds 'flipped' class to the dropdownArrow
            dropdownList.style.transition = "max-height 1s ease-in-out"; // Animation for flipping the arrow and showing/hiding dropdownList
        } else { // If dropdownList is visible...
            dropdownList.style.maxHeight = "0px"; // ...hide the list
            dropdownList.style.transition = "max-height 1s ease-in-out"; // Animation styling 
            dropdownArrow.classList.remove("flipped"); // Removes 'flipped' class from dropdownArrow
            setTimeout(() => {
                dropdownList.style.display = "none";
            }, 1000); // Hides dropdownList completely after 1000ms (1 second) to ensure animation is smooth
        }
    }

    dropdownArrow.addEventListener("click", dropdown); // Adds event listener to run function on click
});