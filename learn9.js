const sumNumbers = (endNum) => {
  let result = [];

  for (let i = 1; i <= endNum; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
};

console.log(sumNumbers(10));
