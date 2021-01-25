var button = document.querySelector('button');
var player1 = document.querySelector('.img1');
var player2 = document.querySelector('.img2');
var textMessage = document.querySelector('.text_message');
var player1Score;
var player2Score;


button.addEventListener('click', function(){
	button.textContent = "Try again!";
	randImg1();
	randImg2();
	if(player1Score > player2Score){
		textMessage.textContent = "Player 1 wins. Congratulations!";
	} else if(player2Score > player1Score){
		textMessage.textContent = "Player 2 wins. Congratulations!";
	} else {
		textMessage.textContent = "This is a draw =/ Try again.";
	}
});

function randImg1(){
	var img1Generation = Math.floor((Math.random() * 6) + 1);
	var standartSrc = "images/dice" + img1Generation + ".png"
	player1.src = standartSrc;
	player1Score = img1Generation;
}

function randImg2(){
	var img2Generation = Math.floor((Math.random() * 6) + 1);
	var standartSrc = "images/dice" + img2Generation + ".png"
	player2.src = standartSrc;
	player2Score = img2Generation;
}


