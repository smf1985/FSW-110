var h1 = document.createElement("h1");
h1.textContent = "Welcome to my JS site";

var p = document.createElement("p");
p.textContent = "All of this was created with Javascript";

var ol = document.createElement("ol");

var listItem1 = document.createElement("li");
listItem1.textContent = "JavaScfript";
ol.appendChild(listItem1);

var listItem2 = document.createElement("li");
listItem2.textContent = "HTML";
ol.appendChild(listItem2);

var listItem3 = document.createElement("li");
listItem3.textContent = "Elements";
ol.appendChild(listItem3);

document.body.append(h1, p, ol);