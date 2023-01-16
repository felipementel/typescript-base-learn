type AccountInfo = {
  id: number | string; // union
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "Felipe",
};

type CharInfo = {
  nickName: string;
  level: number;
};

const char: CharInfo = {
  nickName: "felipementel",
  level: 100,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: "123",
    name: "Felipe",
    nickName: "felipementel",
    level: 100
};
