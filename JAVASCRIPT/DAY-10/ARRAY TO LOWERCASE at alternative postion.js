// function wordToLowerCase(word) {
//     return word.toLowerCase();
//   }
  
//   function arrayToLowerCase(array) {
//     return array.map(wordToLowerCase);
//   }
  
//   var array = ["RED", "AND", "WHITE"];
  
//   var lowercaseArray = arrayToLowerCase(array);
  
//   for (let word of lowercaseArray) {
//     console.log(word);
//   }
  


var arr = ["RED", "AND", "WHITE"];
let lowercaseArr = [];
  
for (let i = 0; i < arr.length; i++) 
{
    let array = arr[i];
    if (array !== "RED" && array !== "WHITE")
     {
        array = array.toLowerCase();
    }
    console.log(array);
}