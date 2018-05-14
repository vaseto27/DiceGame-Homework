document.addEventListener('DOMContentLoaded',function(){
    var player1CurrentScore = document.querySelector('#score1 > h2');
    var player2CurrentScore = document.querySelector('#score2 > h2');
    var player1Score = document.querySelector('#player1 > h2');
    var player2Score = document.querySelector('#player2 > h2');
    var diceOne = document.querySelector('#firstDice > img');
    var diceTwo = document.querySelector('#secondDice > img');
    var firstPlayerTurn = true;
    var player1Dot = document.querySelector('#dot1');
    var player2Dot = document.querySelector('#dot2');
    player1Dot.style.display = 'block';
    player2Dot.style.display = 'none';
    document.getElementById('rollDice').addEventListener('click',function(){
        var result1 = game.rollDiceOne();
        var result2 = game.rollDiceTwo();
        diceOne.style.display = 'block';
        diceTwo.style.display = 'block';
        switch(result1){
            case 1 : diceOne.src = '../DiceGame/assets/images/dice-1.png'
            break;
            case 2 : diceOne.src = '../DiceGame/assets/images/dice-2.png'
            break;
            case 3 : diceOne.src = '../DiceGame/assets/images/dice-3.png'
            break;
            case 4 : diceOne.src = '../DiceGame/assets/images/dice-4.png'
            break;
            case 5 : diceOne.src = '../DiceGame/assets/images/dice-5.png'
            break;
            case 6 : diceOne.src = '../DiceGame/assets/images/dice-6.png'
            break;
        }
        switch(result2){
            case 1 : diceTwo.src = '../DiceGame/assets/images/dice-1.png'
            break;
            case 2 : diceTwo.src = '../DiceGame/assets/images/dice-2.png'
            break;
            case 3 : diceTwo.src = '../DiceGame/assets/images/dice-3.png'
            break;
            case 4 : diceTwo.src = '../DiceGame/assets/images/dice-4.png'
            break;
            case 5 : diceTwo.src = '../DiceGame/assets/images/dice-5.png'
            break;
            case 6 : diceTwo.src = '../DiceGame/assets/images/dice-6.png'
            break;
        }
            if(firstPlayerTurn){
                player1Dot.style.display = 'block';
                player2Dot.style.display = 'none';
                if(result1 != 1 && result2 != 1){
                    player1CurrentScore.innerHTML = game.players[0].currentScore += (result1 + result2);
                } else{
                    game.players[0].currentScore = 0;
                    player1CurrentScore.innerHTML = 0;
                    firstPlayerTurn = false
                }
            } else {
                player2Dot.style.display = 'block';
                player1Dot.style.display = 'none';
                if(result1 != 1 && result2 != 1){
                    player2CurrentScore.innerHTML = game.players[1].currentScore += (result1 + result2);
                } else {
                    game.players[1].currentScore = 0;
                    player2CurrentScore.innerHTML =  0;
                    firstPlayerTurn = true;
                }
            }
    });
    document.getElementById('hold').addEventListener('click',function(){
        if(firstPlayerTurn){
            game.addScore(1);
            player1Score.innerHTML = game.players[0].score;
            if(game.players[0].score > 99){
                document.querySelector('#winner > h2').innerHTML = 'PLAYER 1 WINS';
                document.querySelector('#winner > h2').style.display = 'block';
                game.newGame();
                player1Score.innerHTML = 0;
                player2Score.innerHTML = 0;
                player1CurrentScore.innerHTML = 0;
                player2CurrentScore.innerHTML = 0;
            }
            game.players[0].currentScore = 0;
            firstPlayerTurn = false;
        } else {
            game.addScore(2);
            player2Score.innerHTML = game.players[1].score;
            if(game.players[1].score > 99){
                document.querySelector('#winner > h2').innerHTML = 'PLAYER 2 WINS';
                document.querySelector('#winner > h2').style.display = 'block';
                game.newGame();
                player1Score.innerHTML = 0;
                player2Score.innerHTML = 0;
                player1CurrentScore.innerHTML = 0;
                player2CurrentScore.innerHTML = 0;
            }
            game.players[1].currentScore = 0;
            firstPlayerTurn = true;
        }
        diceOne.style.display = 'none';
        diceTwo.style.display = 'none';
        player1CurrentScore.innerHTML = 0;
        player2CurrentScore.innerHTML = 0;
    });

    document.getElementById('newGame').addEventListener('click',function(){
        game.newGame();
        player1Score.innerHTML = 0;
        player2Score.innerHTML = 0;
        player1CurrentScore.innerHTML = 0;
        player2CurrentScore.innerHTML = 0;
        document.querySelector('#winner > h2').style.display = 'none';
    });
},false);