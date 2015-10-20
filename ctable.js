// package to change text color in terminal
var color = require("colors") || undefined;


try {
  // main function invocation defaults to 10 if no argument is provided
  printPrimesTable(process.argv[2] || 10);
}
catch(err) {
  console.error(err);
}



// logs multiplication table of n primes by n primes
function printPrimesTable(n) {
  var table = makePrimeTable(n);

  // get length of last(longest) number in table to calculate pretty spacing
  var longest = table[n-1][n-1].toString().length;
  var topRow = makeNPrimes(n);
  var topRowSpaced;
  // add blank space to topRow for table corner 
  topRow.unshift(" ");
  topRowSpaced = joinWithCorrectSpacing(topRow, longest);

  console.log(topRowSpaced.blue);
  for (var m = 0; m < table.length; m++) {
    // add 1 num to each row to create first column
    var column1num = topRow[m+1].toString();
    table[m].unshift(column1num);
    console.log(joinWithCorrectSpacing(table[m], longest));
  }
}


// join array of numbers into string with visually consistent spacing 
function joinWithCorrectSpacing(arr, spaces) {
  
  var zeroLength = arr[0].toString().length;
  return arr.reduce( function (str, num) {
    var numLength = zeroLength || num.toString().length;

    if (zeroLength) {
      zeroLength = null;
    }

    if (num != " " && arr.indexOf(num) === 0) {
      num = num.toString().magenta;
    }

    return str.concat(num.toString(), Array(spaces + 2 - numLength).join(" "));
  }," ");
}


// return two-dimensional array representing multiplication table of n primes x n primes
function makePrimeTable(n) {
  var set = makeNPrimes(n);
  var results = [];

  for (var j = 0; j < set.length; j++) {
    var row = [];
    for (var k = 0; k < set.length; k++) {
      row.push(set[j] * set[k]);
    }
    results.push(row);
  }
  return results;
}


// returns an array of the first n prime numbers
function makeNPrimes(n) {
  var results = [];
  var primeCount = 0;
  var currentNum = 2;

  while (primeCount < n) {
    if (isPrime(currentNum)) {
      results.push(currentNum);
      primeCount++;
    }
    currentNum++;
  }
  return results;
}


// returns true if num is prime, false if not 
function isPrime(num) {
  for (var i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


// export functions for testing
module.exports = {
  printPrimesTable: printPrimesTable,
  joinWithCorrectSpacing: joinWithCorrectSpacing,
  makePrimeTable: makePrimeTable,
  makeNPrimes: makeNPrimes,
  isPrime: isPrime
};
