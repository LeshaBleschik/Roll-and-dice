var button = document.querySelector('button');
var player1 = document.querySelector('.img1');
var player2 = document.querySelector('.img2');
var textMessage = document.querySelector('.text_message');

button.addEventListener('click', function() {
	button.textContent = "Try again!";
	var player1Score = rollTheDice()
	player1.src = scoreToImageSrc(player1Score)

	var player2Score = rollTheDice()
	player2.src = scoreToImageSrc(player2Score)

	if (player1Score > player2Score) {
		textMessage.textContent = "Player 1 wins. Congratulations!";
	} else if(player2Score > player1Score) {
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
