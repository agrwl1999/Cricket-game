var Game = /** @class */ (function () {
    function Game() {
        this.teams = [];
        for (var i = 0; i < 2; i++) {
            this.teams.push(new Team(i));
        }
        this.currentTeam = this.teams[0];
    }
    return Game;
}());
var Team = /** @class */ (function () {
    function Team(id) {
        this.players = [];
        this.id = id;
        for (var i = 0; i < 10; i++) {
            this.players.push(new Player(i, this));
        }
        this.currentPlayer = this.players[0];
    }
    Team.prototype.changePlayer = function () {
        this.currentPlayer = this.players[this.currentPlayer.id + 1];
    };
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(id, team) {
        this.score = 0;
        this.balls = 0;
        this.ballScore = [null, null, null, null, null, null];
        this.id = id;
        this.belongsToTeam = team;
    }
    Player.prototype.ballhit = function () {
        var randRun = Math.floor(Math.random() * 7);
        if (randRun == 0 || this.balls == 7) {
            this.belongsToTeam.changePlayer();
            console.log("Player changed");
        }
        else {
            console.log(randRun);
            this.ballScore[this.balls] = randRun;
            this.score = this.score + randRun;
            this.balls++;
        }
    };
    return Player;
}());
var game;
document.getElementById("create-game").addEventListener("click", function () {
    game = new Game();
    console.log(game);
});
document.getElementById("team1-hit").addEventListener("click", function () {
    game.currentTeam.currentPlayer.ballhit();
    console.log(game);
});
