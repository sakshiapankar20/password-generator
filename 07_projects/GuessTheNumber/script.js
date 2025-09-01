let randomNO=Math.round((Math.random()*100)+1);



const submit=document.getElementById('submit');

const userInput=document.getElementById('guessField');

const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');

const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess === "") {
        alert("Please enter a valid number");
    } 
    else if (guess < 1 || guess > 100) {
        alert("Please enter a number within range 1 to 100");
    } 
    else {
        prevGuess.push(guess);
        displayGuess(guess);

        if (guess === randomNO) {
            displayMessage(`🎉 You guessed it right!`);
            endGame();
        } 
        else if (numGuess === 10) {
            displayMessage(`💀 Game Over! Random number was ${randomNO}`);
            endGame();
        } 
        else {
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){

    if(guess===randomNO){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess<randomNO){
        displayMessage("Number is Tooo low");
    }
    else{
        displayMessage("Number is Too High");
    }

}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++; // increment after showing remaining
}


function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;


}


function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameBtn=document.querySelector('#newGame');
    newGameBtn.style.backgroundColor="red";
    newGameBtn.style.padding="10px";
    newGameBtn.style.color="white";
    newGameBtn.style.margin="10px auto";
    newGameBtn.style.borderRadius="10px";
    newGameBtn.style.width="fit-content"

    
    newGameBtn.addEventListener('click',function(e){
       randomNO=parseInt(Math.round((Math.random()*100)+1));
       prevGuess=[];
       numGuess=1;
       guessSlot.innerHTML='';
       remaining.innerHTML=`${11-numGuess}`;
       userInput.removeAttribute('disabled');
       startOver.removeChild(p);


       
        playGame=true;

    })

}


