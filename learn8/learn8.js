let list = String(
  prompt(`Выберите тип транспорта:
1. автобус
2. трамвай
3. метро`)
);

let result = list;

switch (result) {
  case "автобус":
    alert("Стоимость: 35 рублей");
    break;
  case "трамвай":
    alert("Стоимость: 19 рублей");
    break;
  case "метро":
    alert("Стоимость: 50 рублей");
    break;
  default:
    alert("Выберите правильный тип транспорта");
    break;
}
