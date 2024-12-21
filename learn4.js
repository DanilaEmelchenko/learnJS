const multiplicationTable = (num) => {
  let result = Number(num);

  for (let i = 1; i <= 9; i++) {
    console.log(`${result} x ${i} = ${result * i}`);
  }

  return result;
};

multiplicationTable(5);
