interface IGame {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];

  getSimilars: (title: string) => void;
}

const tlou: IGame = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS3", "PS4"],

  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

console.log(tlou.title);
tlou.getSimilars(tlou.title);

interface IDLC extends IGame {
  originalGame: string;
  newContent: string[];
  OptinalMethod?: (name: string) => void;
}

const leftBehind: IDLC = {
  title: "The Last of Us",
  description: "The best game in the world",
  genre: "Action",
  //platform: ["PS3", "PS4"], Marcado como opicinal com ? na interface Game
  originalGame: "string",
  newContent: [""],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  },
};

if (leftBehind.OptinalMethod) {
  leftBehind.OptinalMethod(leftBehind.title);
}

class CreateGame implements IGame {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }

  getSimilars(t: string) {
    console.log(`The title is ${title}`);
  };
}
