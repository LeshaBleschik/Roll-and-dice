var button = document.querySelector('button');
var player1 = document.querySelector('.img1');
var player2 = document.querySelector('.img2');
var textMessage = document.querySelector('.text_message');

button.addEventListener('click', function(){
	button.textContent = "Try again!";
	var player1Score = generateScore(player1);
	var player2Score = generateScore(player2);
	if(player1Score > player2Score){
		textMessage.textContent = "Player 1 wins. Congratulations!";
	} else if(player2Score > player1Score){
		textMessage.textContent = "Player 2 wins. Congratulations!";
	} else {
		textMessage.textContent = "This is a draw =/ Try again.";
	}
});

function generateScore(player) {
	var randomScore = Math.floor((Math.random() * 6) + 1);
	var standartSrc = "images/dice" + randomScore + ".png"
	player.src = standartSrc;
	return randomScore
}
