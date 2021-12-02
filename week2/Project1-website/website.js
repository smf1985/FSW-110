//Must link a JS file to HTML file: see website.html file
//Site must have a navbar with links
const navbar = document.createElement("navbar");
navbar.style.backgroundColor = "white";
navbar.style.float = "center";

const a1 = document.createElement("a1");
a1.setAttribute("href", "#home");
a1.textContent = "Home";
a1.style.color = "green";

const a2 = document.createElement("a2");
a2.setAttribute("href", "#login");
a2.textContent = "Log In";
a2.style.color = "black";

const a3 = document.createElement("a3");
a3.setAttribute("href", "#contactUs");
a3.textContent = "Contact Us";
a3.style.color = "purple";

function styleNavLinks(...args) {
    for (a of args) {
        a.style.padding = "30px";
        a.style.fontSize = "20px";
    }
}

styleNavLinks(a1, a2, a3);
navbar.append(a1, a2, a3);
document.body.appendChild(navbar);

//Site must hvae an h1 tag
const h1 = document.createElement("h1");
h1.textContent = "Welcome to my first website";
document.body.appendChild(h1);

//Site must have a p tag
const p1 = document.createElement("p");
p1.textContent = "Hello, I hope you are enjoying my page. Which coding language do you use?";
document.body.appendChild(p1);

//Site must have a list
const ol = document.createElement("ol");

const li1 = document.createElement("li");
li1.textContent = "JavaScript";
const li2 = document.createElement("li");
li2.textContent = "Ruby";
const li3 = document.createElement("li");
li3.textContent = "Python";
const li4 = document.createElement("li");
li4.textContent = "PHP";

ol.append(li1, li2, li3, li4);
document.body.appendChild(ol);

//site must have a footer
const footer = document.createElement("footer");
const p2 = document.createElement("p");
p2.innerHTML = "Created by Stephanie for Course 110";
p2.style.fontStyle = "bold";
footer.appendChild(p2);
document.body.appendChild(footer);