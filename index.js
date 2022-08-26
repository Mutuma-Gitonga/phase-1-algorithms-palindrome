function isPalindrome(word) {

  // Declare empty newWord array to hold a new reversed string
  let newWord = [];

  // Convert the passed word into an array 
  const splitWord = word.split('');

  // Reverse the splitWord & assign it to a variable
  newWord = splitWord.reverse();
  
  // Now combine chars in the newWord array
  const finalWord = newWord.join('');

  // Compare the finalWord to the passed one. If matching, return true, otherwise return false
  return (finalWord === word ? true : false);
}


/* 
  Add your pseudocode here

  Redeclare the passed string using String constructor (to convert the individual characters into an array)

  Declare empty newWord array to hold a new reversed string

  Convert the passed word into an array with split() and assign into to a new variable, splitWord

  Reverse the splitWord & assign it to a variable
  
  Now combine chars in the newWord array with join() to create a string & assign them to a new variable, finalWord.

  Compare the finalWord to the passed in word, if matching, return true, otherwise return false

*/


/*
  Add written explanation of your solution here

  If string argument passed in is a palindrome, return true, otherwise return false

  Function only takes in lowercase strings all letters, hence no need to handle these edge/special cases
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("racecar =>", isPalindrome("racecar"));

  // Mine
  console.log("Expecting: false");
  console.log("rate =>", isPalindrome("rate"));
  
  console.log("Expecting: true");
  console.log("ewe =>", isPalindrome("ewe"));

  console.log("Expecting: false");
  console.log("robot =>", isPalindrome("robot"));
}

module.exports = isPalindrome;
