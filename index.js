console.log("Hello");
console.log("I Like Pizza");
/*
window.alert(`this is an alert`);
window.alert(`I Like Pizza!!`);
*/
//this is a comment
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    if(Boolean(username)){
    document.getElementById("myh1").textContent = `Hello ${username}`;
    }
}
let isNumber;
function getRadioValue() {
    const selectedRadio = document.querySelector('input[name="circCalcAnsSelector"]:checked');
    if (selectedRadio) {
      const selectedValue = selectedRadio.value;
      isNumber = selectedValue;
      console.log(isNumber);
      if(isNumber == "number"){
        isNumber = true;
    } else if(isNumber == "pi"){
        isNumber = false;
    } else{
        alert("isNumber is null");
    }
      //alert("Selected value: " + selectedValue);
    } else {
      alert("No option selected");
    }
}

let radius;
const PI = Math.PI;

console.log(isNumber, typeof isNumber);
document.getElementById("myRadiusSubmit").onclick = function(){
    if(isNumber == null){
        alert("Please select an answer type before typing a radius");
    }
    radius = Number(document.getElementById("myRadius").value);
    if(Boolean(radius)){
        if(isNumber){
        let circumference = PI * radius * 2;
        document.getElementById("myh3").textContent = `your circumference is: ${circumference}`;
        } else{
            let circumference = radius * 2;
            document.getElementById("myh3").textContent = `your circumference is: ${circumference}pi`;
        }
        
   
    }
}

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


const myRNGButton = document.getElementById("myRNGButton");
const myRNGLabel = document.getElementById("myRNGLabel");

const min = 1;
const max = 6;
let randomNum;

myRNGButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myRNGLabel.textContent = randomNum;
}



const calcInput = document.getElementById("calcInput");

document.querySelectorAll(".buttons.calc").forEach((button) => {
    button.onclick = function () {
        const value = button.textContent;
        //console.log(value);
        if(value === "c") {
            console.log(`deleted ${calcInput.value}`);
            calcInput.value = "";
        } else if(value === "="){
            try {
                console.log("evaluating expression");
                calcInput.value = eval(calcInput.value + "!");
            } catch {
                calcInput.value = "Error";
            }
        } else {
            calcInput.value += value;
        }
        calcInput.textContent = calcInput.value;
    };
});


function eval(value){
    let length = value.length;
    let answer = 0;
    let numberArray = [];
    let expressionArray = [];
    let currentNum = 0;
    let expIndex = 0;
    for(let i = 0; i < length; i++){
        let currentChar = value.charAt(i);
        if(isDigit(currentChar)){
            currentNum += currentChar;
        } else {
            expressionArray[expIndex] = Number(currentNum);
            currentNum = 0;
        }
        if(isOperator(currentChar)){
            expressionArray[i] = currentChar;
        }else{
        }
    }
    
    console.log(printArray(expressionArray));

    return answer;
}
function printArray(value){
    let printStr = "";
    for(let i = 0; i < value.length; i++){
        printStr += value[i] + ", "
    }
    return printStr;
}
function isDigit(value){
    return (!isNaN(value) && value.length === 1)
}
function isOperator(value){
    return (value === "+" || value === "-" || value === "*" || value === "/");
}


const TemperatureTextBox = document.getElementById("TempTextBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(TemperatureTextBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if(toCelcius.checked){
        temp = Number(TemperatureTextBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "please select a unit";
    }
}

function rollDice(){
const numOfDice = document.getElementById("numOfDice").value;
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");
const values = [];
const images = [];

for(let i = 0; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/dice${value}.png" alt="dice${value}">`);
}

diceResult.textContent = `dice: ${values.join(', ')}`;
diceImages.innerHTML = images.join('');
}

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    return '';
}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(  passwordLength, 
                                    includeLowercase, 
                                    includeUppercase, 
                                    includeNumbers, 
                                    includeSymbols);


