//10. Do your rock paper scissors function again, but it selects randomly, not cheating.
const prompt = require('prompt-promise');

async function rockPaperScissors(){
    const guess = await prompt('Rock, paper, or scissors?');
    const possibleGuesses = ['rock','paper','scissors'];
    const computer = possibleGuesses[Math.floor(Math.random()*possibleGuesses.length)];
    if (guess.toLowerCase() === 'rock' && computer === 'paper'){
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you lose!');
        process.exit();
    } else if (guess.toLowerCase() === 'paper' && computer === 'scissors'){
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you lose!');
        process.exit();
    } else if (guess.toLowerCase() === 'scissors' && computer === 'rock'){
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you lose!');
        process.exit();
    } else if (guess.toLowerCase() === 'rock' && computer === 'scissors'){
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you win!');
        process.exit();
    } else if (guess.toLowerCase() === 'paper' && computer === 'rock'){
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you win!');
        process.exit();
    } else if (guess.toLowerCase() === 'scissors' && computer === 'paper'){
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you win!');
        process.exit();
    } else if (guess.toLowerCase() === computer){
        console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you tie!');
        process.exit();
    } else {
        console.log('you must choose rock, paper, or scissors.')
        process.exit();
    }
}

rockPaperScissors()