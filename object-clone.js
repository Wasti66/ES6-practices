let obj = {
    fName : 'Wazihatulla',
    LName : 'Wasti'
}

let anotherObj = Object.assign({}, obj);
anotherObj.fName = "purnota";

console.log(anotherObj);
console.log(obj);