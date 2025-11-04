// console.log(2 > 1) // true
// console.log(2 < 1) // false
// console.log(2 >= 1) // true
// console.log(2 == 1) // false
// console.log(2 != 1) // true

// console.log("2" > 1); // true
// console.log("2" < 1); // true


// null the reason is equility check == and compration 
// <> >= =< work differently compration null convert into
// a number treating it as 0
//they why null >= 0 is true and null >  is false       

// console.log(null > 0);// false
// console.log(null >= 0); // true
// console.log(null == 0); // false 

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
// === is check data type and equal 