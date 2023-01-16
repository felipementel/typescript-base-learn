function logDetailts(uid: number | string, item: string) {
    console.log(`A procut with ${uid} has title as ${item}`)
}

function logInfo(uid: number | string, user: string){
    console.log(`An user with ${uid} has a name as ${user}`)
}

logDetailts(123, "sapato");
logDetailts("123", "calça");

logInfo(123, "sapato");
logInfo("123", "calça");

// Type Alias
type Uid = number | string;

function logDetailts2(uid: Uid, item: string) {
    console.log(`A procut with ${uid} has title as ${item}`)
}

function logInfo2(uid: Uid, user: string){
    console.log(`An user with ${uid} has a name as ${user}`)
}

// exemplo 2

type Platform = 'Linux' | 'Windows' | 'Mac OS'

function renderPlatform(platform: Platform){
    console.log(platform);
}

renderPlatform('Linux'); // funciona
//renderPlatform('ios'); // não funciona