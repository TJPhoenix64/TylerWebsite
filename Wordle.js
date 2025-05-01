let currentWord = "";
let answerList = ["crane", 
    "known",
    "power",
    "slide",
    "needs",
    "paint",
    "ready",
    "stone", 
    "doubt"];
let answerListlength = answerList.length;
let wordIndex = Math.floor(Math.random() * answerListlength);
let answer = answerList[wordIndex];
console.log(wordIndex)
console.log(answerList[wordIndex]);
let gameOver = false;
let textInput = document.getElementById("textInput");
let enterButton = document.getElementById("enter");
let currentLevel = 0;
let buttonArr = Array.from({ length: 6 }, () => Array(5).fill(null));
    for(let c = 0; c < 6; c++){
        let id = ``;
        switch (c) {
            case 0:
                id = `a`;
                break;
            case 1:
                id = `b`;
                break;
            case 2:
                id = `c`;
                break;
            case 3:
                id = `d`;
                break;
            case 4:
                id = `e`;
                break;
            case 5:
                id = `f`;
                break;
            default:
            console.log("error tyler1");
            break;
        }
        for(let r = 1; r < 6; r++){
            const buttonId = `${id}${r}`;
            buttonArr[c][r - 1] = document.getElementById(buttonId);
        }
    }
enterButton.onclick = function () {

    console.log("enterButton pressed");
    currentWord = textInput.value;
    if(currentWord.length !== 5){
        console.log("please enter a 5-letter word");
        return;
    }
    console.log(currentWord);
    
    if(currentLevel >= 5){
        console.log("you lost");
        return;
    }
    for(let i = 0; i < 5; i++){
        buttonArr[currentLevel][i].textContent = currentWord[i];
        if(answer.includes(currentWord[i])){
            if(answer.indexOf(currentWord[i]) == i){
                console.log(` your guess at ${i} is in the correct spot`);
                buttonArr[currentLevel][i].className += " Green";
            }
            else {
                console.log(` your guess at ${i} is the correct type, not the correct spot`);
                buttonArr[currentLevel][i].className += " Yellow";
            }
        }
        buttonArr[currentLevel][i].className += " Red";
    }
    if(currentWord === answer){
        console.log("GameOver");
        return;
    }
    currentLevel++;
}
