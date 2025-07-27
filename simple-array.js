let simpleArray = ['A','B','C','D','E'];

for( let item of simpleArray){
    console.log(item);
}

// array construction
let arrayCons = new Array(1,2,3,4,5);
sum = 0;

for(let item of arrayCons){
    sum = sum + item;
    console.log(item);
}
console.log(sum);