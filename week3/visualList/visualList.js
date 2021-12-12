//Create a new directory with an html and js file, then link them together. See .html file

//Create an H1 tag with the text “Hello World”, and append it to the DOM (test and make sure it is showing up on the website)

let h1 = document.createElement("h1");
h1.textContent = "Hello World!";
document.body.appendChild(h1);

//Create a for-loop, repeat this process 10 times so that 10 H1’s with the text “Hello World” show up when the website is visited.
//Add some style to the H1's in Step 3.

for (let i = 0; i < 10; i++) {
    let h1 = document.createElement("h1");
    h1.textContent = "Hello World!";
    h1.style.fontStyle = "italic";
    h1.style.color = "purple";
    document.body.appendChild(h1);
}

//Create a new array using the following information: const names = [“steve”, “larry”, “joe”, “shirley”, “steph”, “nate”, “rick”, “emily”]

const names = ["Steve", "Larry", "Joe", "Shirley", "Steph", "Nate", "Rick", "Emily", ];

//Create a for loop that iterates through the array in Step 5.

let nameList = document.createElement("ul");

for (let i = 0; i < names.length; i++) {
    nameList.innerHTML += "<li>" + names[i] + "</li>";
}
document.body.appendChild(nameList)