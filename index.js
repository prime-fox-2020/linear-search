'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  var check = ''
  for (let i = 0; i < values.length; i++) {
    if (values[i] == target) {
      return i
    } else {
      check = 'tidak ada'
    }
  }

  if (check == 'tidak ada') {
    return -1
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
  //write your code here
  var indexOfA = []
  for (let j = 0; j < values.length; j++) {
    if (values[j] === target) {
      indexOfA.push(j)
    }
  }
  return indexOfA
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
