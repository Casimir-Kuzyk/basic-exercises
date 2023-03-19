//9. ROCK PAPER SCISSORS! Declare a function that plays rock paper scissors 
//with you via the `prompt-promise` npm package. The funcion should prompt you for your decision, 
//then cheat, and always pick the winning move, so you can never win.
const prompt = require('prompt-promise');

async function rockPaperScissors(){
    const guess = await prompt('Rock, paper, or scissors?');
    if (guess.toLowerCase() === 'rock'){
        const computer = 'paper';
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you lose!');
        process.exit();
    } else if (guess.toLowerCase() === 'paper'){
        const computer = 'scissors';
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you lose!');
        process.exit();
    } else if (guess.toLowerCase() === 'scissors'){
        const computer = 'rock';
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you lose!');
        process.exit();
    } else {
        console.log('you must choose rock, paper, or scissors.')
        process.exit();
    }
}

rockPaperScissors()