// let promise = new Promise((resolve, reject) => {
//   let isOpened: boolean = false;

//   if (isOpened) {
//     resolve("Opened");
//   } else {
//     reject("Not Opened");
//   }
// });

// promise
//   .then((fromResolve) => {
//     console.log(fromResolve);
//   })
//   .catch((fromReject) => {
//     console.log(fromReject);
//   });

function openFile(): Promise<string> {
  return new Promise((resolve, reject) => {
    let isOpened: boolean = true;

    if (isOpened) resolve("Opened");

    reject("Not Opened");
  });
}

function readFile(): Promise<string> {
  return new Promise((resolve, reject) => {
    let isOpened: boolean = true;

    if (isOpened) resolve("Read");

    reject("Not Read");
  });
}

function deleteFile(): Promise<string> {
  return new Promise((resolve, reject) => {
    let isOpened: boolean = true;

    if (isOpened) resolve("Deleted");

    reject("Not Deleted");
  });
}

//ERRADO
// openFile()
//   .then((fromResolve) => {
//     console.log(fromResolve);
//   }).catch((fromReject) => {console.log(fromReject)})
//   .then(() => console.log(readFile()))
//   .then(() => console.log(deleteFile()))
//   .then(() => console.log("Ok"))

openFile()
  .then(() =>
    readFile()
      .then(() =>
        deleteFile()
          .then(() => {
            console.log("Ok");
          })
          .catch((fr) => {
            console.log(fr);
          })
      )
      .catch((fr) => {
        console.log(fr);
      })
  )
  .catch((fr) => {
    console.log(fr);
  });

Promise.all([openFile, readFile, deleteFile]).then().catch();

Promise.race([openFile, readFile, deleteFile]).then().catch();