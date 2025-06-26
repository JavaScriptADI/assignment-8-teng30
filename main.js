// task 1

function square(n) {
  return n ** 2;
}

let array = [1, 2, 3, 4];
let arraySquares = array.filter(square); 

console.log(arraySquares);

//-------------------------------------------//

// task 2

let num = [1, 2, 3, 4, 5]

console.log(num.filter(function(even){
    return even % 2 == 0     
}))

//-------------------------------------------//

// task 3

let arr = [1, 2, 3, 4]

console.log(arr.reduce(function(a, b){
    return a + b
})) // reduce kargad ver gavige

//-------------------------------------------//

// task 4

let numbe = [1, 2, 3, 4, 5]
function ev(x){
    return x % 2 == 0
}

let evens = num.filter(ev)

let firsteven = evens[0]
console.log(firsteven)

//-------------------------------------------//

// task 5 ?

//-------------------------------------------//

// task 6 ?

let numb = [1, 2, 3, 4, 5,]
function ev(x){
    return x % 2 == 0
}
divided = numb.filter(ev) 

if ( ){
    console.log("all even")
} else{
    console.log("not all even")
}  // cb ver gavige
