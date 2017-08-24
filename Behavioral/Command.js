// Receiver class
var Player = (function () {
    function Player() {
    }
    Player.prototype.play = function () {
        console.log('play');
    };
    Player.prototype.stop = function () {
        console.log('stop');
    };
    Player.prototype.reset = function () {
        console.log('reset');
    };
    return Player;
}());
// Concrete command play; (Adaptor)
var CommandPlay = (function () {
    function CommandPlay(p) {
        this.player = p;
    }
    CommandPlay.prototype.execute = function () {
        this.player.play();
    };
    return CommandPlay;
}());
// Concrete command stop; (Adaptor)
var CommandStop = (function () {
    function CommandStop(p) {
        this.player = p;
    }
    CommandStop.prototype.execute = function () {
        this.player.stop();
    };
    return CommandStop;
}());
// Concrete command reset; (Adaptor)
var CommandReset = (function () {
    function CommandReset(p) {
        this.player = p;
    }
    CommandReset.prototype.execute = function () {
        this.player.reset();
    };
    return CommandReset;
}());
// Invoker class
var User = (function () {
    function User(p, s, r) {
        this.play = p;
        this.stop = s;
        this.reset = r;
    }
    User.prototype.playSong = function () {
        this.play.execute();
    };
    User.prototype.stopSong = function () {
        this.stop.execute();
    };
    User.prototype.resetSong = function () {
        this.reset.execute();
    };
    return User;
}());
// execute
var player = new Player();
var user = new User(new CommandPlay(player), new CommandStop(player), new CommandReset(player));
user.playSong();
user.stopSong();
user.resetSong();
