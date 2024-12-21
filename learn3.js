const calc = (num1, operator, num2) => {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      console.log(`${num1} + ${num2} = ${result}`);
      break;
    case "-":
      result = num1 - num2;
      console.log(`${num1} - ${num2} = ${result}`);
      break;
    case "*":
      result = num1 * num2;
      console.log(`${num1} * ${num2} = ${result}`);
      break;
    case "/":
      result = num1 / num2;
      console.log(`${num1} / ${num2} = ${result}`);
      break;
    default:
      console.log("Неверный оператор");
  }
};

calc(1, "+", 2);
