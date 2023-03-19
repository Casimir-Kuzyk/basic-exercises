//11. Modify your rock paper scissors function to keep track of the score, 
//and log it out after every round. So more than 1 round can be played at a time, 
//in a loop. AFter every round it should say "Your Score: {yourScore}, ComputerScore: {computerScore}.

const prompt = require('prompt-promise');

async function rockPaperScissors(){
    const possibleGuesses = ['rock','paper','scissors'];
    let yourScore = 0;
    let computerScore = 0;
    keepPlaying = true;
    while (keepPlaying === true){
        let guess = await prompt('Rock, paper, or scissors?');
        const computer = possibleGuesses[Math.floor(Math.random()*possibleGuesses.length)];
        if (guess.toLowerCase() === 'rock' && computer === 'paper'){
            console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you lose!');
            computerScore = computerScore + 1;
        } else if (guess.toLowerCase() === 'paper' && computer === 'scissors'){
            console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you lose!');
            computerScore = computerScore + 1;
        } else if (guess.toLowerCase() === 'scissors' && computer === 'rock'){
            console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you lose!');
            computerScore = computerScore + 1;
        } else if (guess.toLowerCase() === 'rock' && computer === 'scissors'){
            console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you win!');
            yourScore = yourScore + 1;
        } else if (guess.toLowerCase() === 'paper' && computer === 'rock'){
            console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you win!');
            yourScore = yourScore + 1;
        } else if (guess.toLowerCase() === 'scissors' && computer === 'paper'){
            console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you win!');
            yourScore = yourScore + 1;
        } else if (guess.toLowerCase() === computer){
            console.log('you chose ' + guess + ' and the computer chose ' + computer + ' so you tie!');
        } else {
            console.log('you must choose rock, paper, or scissors.')
        }
        console.log('the score is you: ' + yourScore + ', computer: ' + computerScore)
        let askToPlay = null;
        while (askToPlay !== 'y' && askToPlay !== 'n'){
            askToPlay = await prompt('Would you like to keep playing? (y/n)');
            if (askToPlay.toLowerCase() === 'y'){
                console.log('nice!');
            } else if (askToPlay.toLowerCase() === 'n'){
                keepPlaying = false;
            } 
        }
    }
    process.exit()
}

rockPaperScissors()