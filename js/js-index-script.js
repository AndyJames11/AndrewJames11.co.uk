document.addEventListener("DOMContentLoaded", function() {
    const dropdownArrow = document.getElementById("dropdownArrow");
    const dropdownList = document.getElementById("dropdownList");

    function dropdown() {
        if (dropdownList.style.display === "none" || dropdownList.style.display === "") {
            dropdownList.style.display = "inline-block";
            dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
            dropdownArrow.classList.add("flipped");
            dropdownList.style.transition = "max-height 1s ease-in-out";
        } else {
            dropdownList.style.maxHeight = "0px";
            dropdownList.style.transition = "max-height 1s ease-in-out";
            dropdownArrow.classList.remove("flipped");
            setTimeout(() => {
                dropdownList.style.display = "none";
            }, 1000);
        }
    }

    dropdownArrow.addEventListener("click", dropdown);
});