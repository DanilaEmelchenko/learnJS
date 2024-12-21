let print = "";

const min = 1;
const max = 10;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

while (print !== randomNum) {
  print = +prompt("Введите число от 1 до 10");
  if (print === randomNum) {
    alert("Угадали");
  } else {
    alert("Не угадали");
  }
}
