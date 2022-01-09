// Make the box disapear when the user clicks it.

const box = document.querySelector(".red-box");
box.addEventListener("click", function() {
    box.style.display = 'none';
});