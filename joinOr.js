// Write a function named joinOr that produces the following results:

// joinOr([1, 2, 3]);               // => "1, 2, or 3"
// joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
// joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
// joinOr([]);                      // => ""
// joinOr([5]);                     // => "5"
// joinOr([1, 2]);                  // => "1 or 2"

// Use this function in the game when prompting the user to mark a square.

const joinOr = (arr) => {
  return arr.slice(0, arr.length - 1) + " or " + arr.slice(-1);
}

console.log(joinOr([1, 2, 3, 4, 5]));