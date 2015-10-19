// import main file
var prime = require("../table");

describe("isPrime", function(){
  it("returns true for prime numbers", function(){
    expect(prime.isPrime(5)).toBe(true);
    expect(prime.isPrime(11)).toBe(true);
    expect(prime.isPrime(29)).toBe(true);
  })

  it("returns false for non-prime numbers", function(){
    expect(prime.isPrime(8)).toBe(false);
    expect(prime.isPrime(27)).toBe(false);
    expect(prime.isPrime(100)).toBe(false);
  });
  
});

describe("makeNPrimes", function(){
  it("returns an array", function(){
    var testPrimes = prime.makeNPrimes(10);

    expect(typeof testPrimes).toEqual("object");
    expect(Array.isArray(testPrimes)).toEqual(true);
    expect(testPrimes instanceof Array).toEqual(true);
    expect(testPrimes.constructor).toEqual(Array);
  });
  it("returns an array of the correct length", function(){
    expect(prime.makeNPrimes(0).length).toEqual(0);
    expect(prime.makeNPrimes(5).length).toEqual(5);
    expect(prime.makeNPrimes(100).length).toEqual(100);
  });
  it("returns an array containing the correct first ten prime numbers", function(){
    expect(prime.makeNPrimes(10)).toEqual([2,3,5,7,11,13,17,19,23,29]);
    expect(prime.makeNPrimes(10)).not.toEqual([1,2,3,4,5]);
  });
});

describe("makePrimesTable", function(){
  it("returns an array", function(){
    var testPrimesTable = prime.makePrimeTable(10);

    expect(typeof testPrimesTable).toEqual("object");
    expect(Array.isArray(testPrimesTable)).toEqual(true);
    expect(testPrimesTable instanceof Array).toEqual(true);
    expect(testPrimesTable.constructor).toEqual(Array);
  });
  it("returns a two-dimensional array of n length", function(){
    var testPrimesTable2 = prime.makePrimeTable(10);
    var count = 0;
    for(var i = 0; i < testPrimesTable2.length; i++) {
      expect(Array.isArray(testPrimesTable2[i])).toBe(true);
      count++;
    }
    expect(count).toEqual(10);

  });
  it("returns an accurate multiplication table of 10 primes by 10 primes", function(){
      var answers = [[4, 6, 10, 14, 22, 26, 34, 38, 46, 58],
      [6, 9, 15, 21, 33, 39, 51, 57, 69, 87],
      [10, 15, 25, 35, 55, 65, 85, 95, 115, 145],
      [14, 21, 35, 49, 77, 91, 119, 133, 161, 203],
      [22, 33, 55, 77, 121, 143, 187, 209, 253, 319],
      [26, 39, 65,  91, 143, 169, 221, 247, 299, 377],
      [34, 51, 85,  119, 187, 221, 289, 323, 391, 493],
      [38, 57, 95,  133, 209, 247, 323, 361, 437, 551],
      [46, 69, 115, 161, 253, 299, 391, 437, 529, 667],
      [58, 87, 145, 203, 319, 377, 493, 551, 667, 841]];
      var testPrimesTable3 = prime.makePrimeTable(10);

      expect(testPrimesTable3).toEqual(answers);
  });
});

describe("joinWithCorrectSpacing", function(){
  it("returns a string", function(){
    var testSpacing = prime.joinWithCorrectSpacing(prime.makePrimeTable(10), 841);
    expect(typeof testSpacing).toEqual("string");
    expect(typeof prime.joinWithCorrectSpacing(prime.makePrimeTable(5), 121)).toBe("string");
  });
});

describe("printPrimesTable", function(){
  it("throws error when arg is not a number", function(){
    expect(prime.printPrimesTable.bind(null, "dog")).toThrow(new Error("Cannot read property 'NaN' of undefined"));
  });
});
