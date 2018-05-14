var game = (function(){
    // Player.nextId = 0;
    // function Player(){
    //     this.id = ++Player.nextId;
    //     this.score = 0;
    //     this.currentScore = 0;
    // }
    function Game(player){
        this.players = [];
        this.winner = '';
        var player1 = {
            id : 1,
            score : 0,
            currentScore : 0
        };
        var player2 = {
            id : 2,
            score : 0,
            currentScore : 0
        };
        this.players.push(player1);
        this.players.push(player2);
    }
    Game.prototype.rollDiceOne = function(){

        var result1 = Math.ceil(Math.random() * 6);
        // var result2 =  Math.ceil(Math.random() * 6);
        // var player = this.players.findIndex((player) => player.id == id);
        // if(player < 0){
        //     throw new Error('No such player ' + id);
        // } else {
        //     if(result1 == 1 || result2 == 1){
        //         this.players[player].currentScore = 0;
        //     } else {
                // this.players[player].currentScore += (result1 + result2);
        //     }
        // }
        return result1
    }
    Game.prototype.rollDiceTwo = function(){
        var result2 = Math.ceil(Math.random() * 6);
        return result2
    }
    Game.prototype.addScore = function(id){
        var player = this.players.findIndex((player) => player.id == id);
        if(player < 0){
            throw new Error('No such player ' + id);
        } else {
            this.players[player].score += this.players[player].currentScore;
        }
    }
    Game.prototype.newGame = function(){
        this.players[0].score = 0;
        this.players[0].currentScore = 0;
        this.players[1].score = 0;
        this.players[1].currentScore = 0;
    }
    return new Game();
})();