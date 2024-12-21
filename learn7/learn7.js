let list = String(
  prompt(`Выберите из списка напиток:
1. кофе
2. чай
3. сок
4. вода`)
);

let result = list;

switch (result) {
  case "кофе":
    alert("Кофе растворимый Carte Noire Original");
    break;
  case "чай":
    alert("Черный чай, зеленый чай");
    break;
  case "сок":
    alert("Апельсиновый сок J7");
    break;
  case "вода":
    alert("Негазированная вода");
    break;
  default:
    alert("Такого напитка в списке нет, введите напиток из списка");
    break;
}
