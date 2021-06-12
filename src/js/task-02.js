// Напиши скрипт, который для каждого элемента
// массива`ingredients` создаст
// отдельный`li`, после чего вставит все`li`
// за одну операцию в список
//  `ul.ingredients`.Для создания DOM - узлов
// используй`document.createElement()`.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const items = [];

const container = document.querySelector("#ingredients")

for (let i = 0; i < ingredients.length; i++) {
  const item = document.createElement('li');
  item.textContent = ingredients[i];

  items.push(item)
}

container.append(...items)