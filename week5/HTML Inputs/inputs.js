/* You just started your own company, and you need to collect data about your customers for your marketing team. This is a
 perfect example of using forms within a web application — to obtain user data.
You should collect the following information from the user:
-First name (text input)
-Last name (text input)
-Age (number input)
-A question that has a yes or no answer (should use radio buttons) ex) Have you shopped with us before?
-A question with a single possible response but multiple options (select box with at least 3 options) ex) How likely are 
 you to recommend this product to a friend? [not likely, somewhat likely, likely, ... etc]
-A question with multiple possible answers (check boxes with at least 3 options) ex) Do you have any dietary restrictions?
 [gluten free, keto, vegetarian, .... etc]
Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.
There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that 
 looks like this: 
You should style your form to look good and be easily usable. */

var form = document.myForm;
var selectMenu = document.getElementById("options");

form.addEventListener("submit", function() {
    var checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
    var languages = [];
    for (var i = 0; i < checkbox.length; i++) {
        languages.push(" " + checkbox[i].value);
    }
    alert(` 
    First Name: ${form.first_name.value}
    Last Name: ${form.last_name.value}
    Age: ${form.age.value}
    Is this your first JavaScript course: ${form.question.value}
    How likely to reccomend: ${selectMenu.options[selectMenu.selectedIndex].value}
    Other Languages: ${languages}`);
});