class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetail(): void {
    console.log(`The player ${this.name} is ${this.age} years old`);
  }
}

const will = new UserAccount("Felipe", 30);

console.log(will);
will.logDetail();

class CharAccount extends UserAccount {
  readonly nickname: string;
  private level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log("------GET-----");
    return this.level;
  }

  set setLevel(value: number) {
    this.level = value;
  }
}

const John = new CharAccount("John", 35, "felipementel", 7);

console.log(John);
John.logDetail();

console.log(John.getLevel);
John.setLevel = 100;

console.log(John);

abstract class User {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class UserBank extends User {
  protected name: string;

  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}
