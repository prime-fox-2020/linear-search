'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  let result = 0;
  for (let i in values){
    if (values[i] == target) result++;
  }
  if (result == 0) return -1;
  return result;
  //write your code here
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  let result = [];
  for (let i in values){
    if (values[i] == target) result.push(+i);
  }
  return result;  
  //write your code here
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
