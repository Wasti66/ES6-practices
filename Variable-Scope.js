function myFun(){
    // local variable scope
    var name = 'Wasti';
    return name;
}
console.log(myFun())

console.log('\n');

// Global Variable scope
var name = "Ruhani Islam";
function MyFun(){
    console.log(name);
}
MyFun();
console.log(name);
