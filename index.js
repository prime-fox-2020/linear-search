'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  let jumlah = []
  for(let a = 0; a < random_numbers.length; a++){
    if(random_numbers[a] === target){
      jumlah.push(a)
    }
  }
  if(jumlah.length === 0){
    return -1
  } else {
    return jumlah[0]
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  let jumlah = []
  for(let a = 0; a < banana_arr.length; a++){
    if(banana_arr[a] === target){
      jumlah.push(a)
    }
  }
  if(jumlah.length === 0){
    return -1
  } else {
    return jumlah
  }
}


let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]


// abaikan code dibawah
module.exports = {
  linearSearch,
  globalLinearSearch
}
