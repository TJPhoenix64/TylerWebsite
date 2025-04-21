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

document.querySelectorAll(".buttons").forEach((button) => {
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





/*
let username;
username = window.prompt("Whats your username?");
console.log(`Hello ${username}`);
*/
/*
document.getElementById("myh1").textContent = `hello, this is JavaScript`;
document.getElementById("myp").textContent = age;
*/

/*
let price = 10.99;
console.log(`you cost ${price}`);
console.log(typeof price);

let firstName = "TylerSigma";
console.log(typeof firstName);
console.log(firstName);

let hasGirl = false;
console.log(`does tyler have a girl: ${hasGirl}`);
console.log(typeof hasGirl);

*/


