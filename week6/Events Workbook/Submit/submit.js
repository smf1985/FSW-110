// The "submit" event refreshes your browser by default
// Use "e.preventDefault()" in the first line of your callback function to prevent this
// Remember to pass "e" into the callback function

const form = document.getElementById("submit-me");
const nameInput = form.elements["name"];
const ageInput = form.elements["age"];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Name: " + nameInput.value + " / Age: " + ageInput.value);
});