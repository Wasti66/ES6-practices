//three dots means(...) spread operator

/* let poorCountry = ['Bangladesh','Srilanka'];
let richCountry = [...poorCountry,'Amarica','Canada','Italy'];
console.log(poorCountry);
console.log('\n');
console.log(richCountry); */



function total(...numbers){
    /*let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;*/
    return numbers.reduce((o, n)=>o + n)
}
console.log(total(10,20,30,40));