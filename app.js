
var playerScore = 0;
var computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scores_div = document.querySelector(".scores")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")


function win(choiceP, choiceC) {
	playerScore++
	playerScore_span.innerHTML = playerScore;
	result_div.innerHTML = `${choiceP} beats ${choiceC}, Player Wins!`
}

function lose(choiceP, choiceC) {
	computerScore++
	computerScore_span.innerHTML = computerScore
	result_div.innerHTML = `${choiceC} beats ${choiceP}, you lose!`
}

function draw(choiceP) {
	result_div.innerHTML = `Both chose ${choiceP}, Tie game!`
}


function computerChoice() {
	let options = ['rock', 'paper', 'scissors']
	let choice = options[Math.floor(Math.random() * options.length)];
	return choice
}


function play(playerChoice) {
	const compChoice = computerChoice()
	switch (playerChoice + ' ' + compChoice) {
		case 'rock scissors':
		case 'paper rock':
		case 'scissors paper':
			win(playerChoice, compChoice);
			break;
		case "rock paper":
		case "paper scissors":
		case "scissors rock":
			lose(playerChoice, compChoice);
			break;
		case "rock rock":
		case "paper paper":
		case "scissors scissors":
			draw(playerChoice);
			break;
	}
}	



rock_div.addEventListener('click', function() {
	play("rock")
})

paper_div.addEventListener('click', function() {
	play("paper")
})

scissor_div.addEventListener('click', function() {
	play("scissors")
})