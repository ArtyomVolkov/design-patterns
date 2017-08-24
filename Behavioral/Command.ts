interface Command {
  execute();
}

// Receiver class
class Player {
  play() {
    console.log('play');
  }
  stop() {
    console.log('stop');
  }
  reset() {
    console.log('reset');
  }
}
// Concrete command play; (Adaptor)
class CommandPlay implements Command {
  private player: Player;

  constructor(p: Player) {
    this.player = p;
  }

  execute() {
    this.player.play();
  }
}
// Concrete command stop; (Adaptor)
class CommandStop implements Command {
  private player: Player;

  constructor(p: Player) {
    this.player = p;
  }

  execute() {
    this.player.stop();
  }
}

// Concrete command reset; (Adaptor)
class CommandReset implements Command {
  private player: Player;

  constructor(p: Player) {
    this.player = p;
  }

  execute() {
    this.player.reset();
  }
}

// Invoker class
class User {
  private play: Command;
  private stop: Command;
  private reset: Command;

  constructor(p: Command, s: Command, r: Command) {
    this.play = p;
    this.stop = s;
    this.reset = r;
  }

  playSong() {
    this.play.execute();
  }

  stopSong() {
    this.stop.execute();
  }

  resetSong() {
    this.reset.execute();
  }
}

// execute
let player = new Player();
let user = new User(new CommandPlay(player), new CommandStop(player), new CommandReset(player));

user.playSong();
user.stopSong();
user.resetSong();