const totalAmount = () => {
  let arr = [];
  let result;

  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      arr.push(i);
      result = arr.reduce((sum, number) => {
        return sum + number;
      }, 0);
    }
  }

  return result;
};

console.log(totalAmount());
