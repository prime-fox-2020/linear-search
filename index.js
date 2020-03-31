//sort 

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  var index = 0;
  //write your code here
  //looping values 
  for (var i = 0; i < values.length; i++) {
    if (values[i] == target) {
      return index
    } else {
      index++
    }
  }
  if(index == values.length){
    return -1
  }
}
let random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  res= []
  index =0
  for(var i =0;i< values.length;i++){
    if(values[i] == target){
      res.push(index)
      index++
    }else{
      index++
    }
  }
  if(res.length == 1){
    return res [0]
  }else if (res.length >1){
    return res
  }else if(res.length < 1){
    return -1 
  }
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
let apple_arr ="apple".split("");
let hujan_arr ="hujan".split("");
console.log(globalLinearSearch("d",apple_arr));
console.log(globalLinearSearch("h",hujan_arr));

// abaikan code dibawah
// module.exports = {
//   linearSearch,
//   globalLinearSearch
// }
