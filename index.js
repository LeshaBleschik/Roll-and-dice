var button = document.querySelector('button');
var player1 = document.querySelector('.img1');
var player2 = document.querySelector('.img2');
var textMessage = document.querySelector('.text_message');

button.addEventListener('click', function() {
	button.textContent = "Try again!";

	playerScores= [ ]
	for (player of [ player1, player2 ]) {
		var playerScore = rollTheDice();
		player.src = scoreToImageSrc(playerScore);
		playerScores.push(playerScore);
	}

	if (playerScores[0] > playerScores[1]) {
		textMessage.textContent = "Player 1 wins. Congratulations!";
	} else if(playerScores[1] > playerScores[0]) {
		textMessage.textContent = "Player 2 wins. Congratulations!";
	} else {
		textMessage.textContent = "This is a draw =/ Try again.";
	}
});

function rollTheDice() {
	return Math.floor((Math.random() * 6) + 1);
}

function scoreToImageSrc(score) {
	return "images/dice" + score + ".png"
}
