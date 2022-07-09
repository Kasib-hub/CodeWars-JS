// ["3:1", "2:2", "0:1", ...]
// Got confused by format, It's simply an array of strings, not a key-value pair or dictionary
let games = ["3:1", "2:2", "0:1"]

// access a - still a string
let total = 0;
games.map(game => {
  if (game[0] === game[2]) {
    total += 1;
  } else if (game[0] > game[2]) {
    total += 3;
  }
});