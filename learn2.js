const fizzBuzz = (end) => {
  let result = [];

  for (let i = 1; i <= end; i++) {
    if (i % 5 && i % 3) {
      result.push("FizzBuzz");
    } else if (i % 3) {
      result.push("Fizz");
    } else if (i % 5) {
      result.push("Buzz");
    }
  }

  return result;
};

console.log(fizzBuzz(10));
