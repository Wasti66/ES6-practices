/*function calculation(a,b){
    let sum = 0;
    let arr =[a,b];
    for(let i of arr){
        sum = sum + i;
    }
    console.log(sum);
}
calculation(20,30); */

function calculation(...numbers){
    let sum = 0;
    for(let i of numbers){
        sum = sum+i;
    }
    console.log(sum);
}
calculation(10,20,30,40,50);