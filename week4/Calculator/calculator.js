//You will have one section for each math operation (4 total)
//Each section has two inputs to take the first and second numbers
//Each section will have a button to perform the operation
//You will inject the result into the HTML (not an alert)
//Your website will have 3 colors
//Your website will have proper padding/spacing to lay things out nicely.

const h1 = document.createElement("h1");
h1.textContent = "Calculator";
document.body.appendChild(h1);

//Addition
const calcAdd = document.createElement("div");
calcAdd.textContent = "Pick 2 numbers to add";
calcAdd.style.backgroundColor = "lightgrey";
document.body.appendChild(calcAdd);
const firstNumA = document.createElement("input");
firstNumA.type = "number";
calcAdd.appendChild(firstNumA);
const addButton = document.createElement("button");
addButton.textContent = "+"
calcAdd.appendChild(addButton);
const secondNumA = document.createElement("input");
secondNumA.type = "number";
calcAdd.appendChild(secondNumA);
const answerA = document.createElement("button");
answerA.textContent = "=";
calcAdd.appendChild(answerA);

//Subtraction
const calcSub = document.createElement("div");
calcSub.textContent = "Pick 2 numbers to subtract";
calcSub.style.backgroundColor = "lightpink";
document.body.appendChild(calcSub);
const firstNumS = document.createElement("input");
firstNumS.type = "number";
calcSub.appendChild(firstNumS);
const subButton = document.createElement("button");
subButton.textContent = "-";
calcSub.appendChild(subButton);
const secondNumS = document.createElement("input");
secondNumS.type = "number";
calcSub.appendChild(secondNumS);
const answerS = document.createElement("button");
answerS.textContent = "=";
calcSub.appendChild(answerS);

//Multiplication
const calcMul = document.createElement("div");
calcMul.textContent = "Pick 2 numbers to multiply";
calcMul.style.backgroundColor = "lightblue";
document.body.appendChild(calcMul);
const firstNumM = document.createElement("input");
firstNumM.type = "number";
calcMul.appendChild(firstNumM);
const mulButton = document.createElement("button");
mulButton.textContent = "x";
calcMul.appendChild(mulButton);
const secondNumM = document.createElement("input");
secondNumM.type = "number";
calcMul.appendChild(secondNumM);
const answerM = document.createElement("button");
answerM.textContent = "=";
calcMul.appendChild(answerM);

//Division
const calcDiv = document.createElement("div");
calcDiv.textContent = "Pick 2 numbers to divide";
calcDiv.style.backgroundColor = "lightgreen";
document.body.appendChild(calcDiv);
const firstNumD = document.createElement("input");
firstNumD.type = "number";
calcDiv.appendChild(firstNumD);
const divButton = document.createElement("button");
divButton.textContent = "/";
calcDiv.appendChild(divButton);
const secondNumD = document.createElement("input");
secondNumD.type = "number";
calcDiv.appendChild(secondNumD);
const answerD = document.createElement("button");
answerD.textContent = "=";
calcDiv.appendChild(answerD);

//If user forgets to input a number
answerA.addEventListener("click", function() {
    if (firstNumA.value == '' || secondNumA.value == '') {
        alert("A number must be entered");
    } else {
        inputAnswer.value = Number(firstNumA.value) + Number(secondNumA.value);
    }
});

answerS.addEventListener("click", function() {
    if (firstNumS.value == '' || secondNumS.value == '') {
        alert("A number must be entered");
    } else {
        inputAnswer.value = Number(firstNumS.value) - Number(secondNumS.value);
    }
});

answerM.addEventListener("click", function() {
    if (firstNumM.value == '' || secondNumM.value == '') {
        alert("A number must be entered");
    } else {
        inputAnswer.value = Number(firstNumM.value) * Number(secondNumM.value);
    }
});

answerD.addEventListener("click", function() {
    if (firstNumD.value == '' || secondNumD.value == '') {
        alert("A number must be entered");
    } else {
        inputAnswer.value = Number(firstNumD.value) / Number(secondNumD.value);
    }
});

const divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].style.margin = "15px";
};

const inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.margin = "15px";
};

const h2 = document.createElement("h2");
h2.textContent = "Answer:";
document.body.appendChild(h2);

const inputAnswer = document.createElement("input");
inputAnswer.style.border = "2px solid purple";
document.body.appendChild(inputAnswer);

const reset = document.createElement("button");
reset.textContent = "Reset";
reset.style.marginLeft = "20px";
document.body.appendChild(reset);

reset.addEventListener('click', function() {
    document.querySelectorAll('input').forEach(input => input.value = null);
});