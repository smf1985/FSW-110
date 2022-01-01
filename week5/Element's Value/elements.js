/* It is important to note that any button placed inside of <form> tags will automatically fire a “submit” event for 
 the form to capture and use. Your task for this assignment is to create a form on an html file that has at least 3 inputs
 and a button.
-When the button is clicked, the inputs should be displayed in an “alert” window using the alert() method.  
-After the alert is closed, the inputs should clear themselves out. */

var yourName = document.getElementById("yourName");
var yourCollege = document.getElementById("yourCollege");
var yourLocation = document.getElementById("yourLocation");

let myform = document.getElementById("myform");

myform.addEventListener("submit", function() {
    alert(` 
    Your Name: ${yourName.value}
    College: ${yourCollege.value}
    Location: ${yourLocation.value} `);
});