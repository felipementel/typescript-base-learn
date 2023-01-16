// boolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: number[];
items = [1, 2, 3];

let itemss: string[];
itemss = ["1", "2"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string];
title = [1, "Felipe"];

let title2: [number, string, boolean];
title2 = [1, "Felipe", true];

// enum
enum Colors {
  white = "#fff",
  back = "#000",
}

// any

let coisa: any;
coisa = [1];

// void
function logger(): void {
  console.log("foo");
}

// null | undefined
let nome: null; // sem sentido

//never
function error(): never {
  throw new Error("error");
}

// object
let cart: object;

cart = {
  key: "1",
};

// type inference
let message2 = "mensagem definida";

window.addEventListener("click", (e: MouseEvent) => {
  console.log(e.target);
});

