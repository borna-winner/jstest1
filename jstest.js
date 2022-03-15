let sum=(a,b) => a + b;
//alert(sum(2,3))
let product=(a,b) => a*b;
//alert(multi(55,12))
let subtract=(a,b) => a-b;
//alert(subtract(123,12))
let divide=(a,b) => a/b;
//alert(divide(10,5))
let answer = parseInt(prompt("please enter your number"));
for (let i = 1 ; i <= answer; i++ ) {
    if (i % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
} 
