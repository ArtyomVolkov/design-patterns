var Game = (function () {
    function Game() {
    }
    Game.prototype.getState = function () {
        console.log("Level: " + this.level + ", Score: " + this.score);
    };
    Game.prototype.set = function (l, s) {
        this.level = l;
        this.score = s;
    };
    Game.prototype.load = function (save) {
        this.level = save.getLEVEL();
        this.score = save.getSCORE();
    };
    Game.prototype.save = function () {
        return new Save(this.level, this.score);
    };
    return Game;
}());
var Save = (function () {
    function Save(level, score) {
        this.LEVEL = level;
        this.SCORE = score;
    }
    Save.prototype.getLEVEL = function () {
        return this.LEVEL;
    };
    Save.prototype.getSCORE = function () {
        return this.SCORE;
    };
    return Save;
}());
var SaveFile = (function () {
    function SaveFile() {
    }
    SaveFile.prototype.getSave = function () {
        return this.save;
    };
    SaveFile.prototype.setSave = function (save) {
        this.save = save;
    };
    return SaveFile;
}());
var game = new Game();
game.set('LVL 1', 350);
game.getState(); // Level: LVL 1, Score 350
// save status
var saveFile = new SaveFile();
saveFile.setSave(game.save());
game.set('LVL 3', 780);
game.getState(); // Level: LVL 3, Score 780
// load game
game.load(saveFile.getSave());
game.getState(); // Level: LVL 1, Score 350
