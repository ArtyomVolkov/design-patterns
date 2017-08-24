class Game {
  private level: string;
  private score: number;

  getState() {
    console.log(`Level: ${this.level}, Score: ${this.score}`);
  }

  set(l: string, s: number) {
    this.level = l;
    this.score = s;
  }

  load(save: Save) {
    this.level = save.getLEVEL();
    this.score = save.getSCORE();
  }

  save(): Save {
    return new Save(this.level, this.score);
  }
}

class Save {
  private LEVEL: string;
  private SCORE: number;

  constructor(level, score) {
    this.LEVEL = level;
    this.SCORE = score;
  }

  getLEVEL(): string {
    return this.LEVEL;
  }

  getSCORE(): number {
    return this.SCORE;
  }
}

class SaveFile {
  private save: Save;

  getSave(): Save {
    return this.save;
  }

  setSave(save: Save) {
    this.save = save;
  }
}

let game = new Game();
game.set('LVL 1', 350);
game.getState(); // Level: LVL 1, Score 350

// save status
let saveFile = new SaveFile();
saveFile.setSave(game.save());

game.set('LVL 3', 780);
game.getState(); // Level: LVL 3, Score 780

// load game
game.load(saveFile.getSave());
game.getState(); // Level: LVL 1, Score 350