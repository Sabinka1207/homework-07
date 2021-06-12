//Посчитает и выведет в консоль количество 
// категорий в ul#categories, то есть элементов 
// li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке 
// ul#categories, найдет и выведет в 
// консоль текст заголовка элемента(тега h2) 
// и количество элементов в категории(всех 
// вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const liItemCategories = document.querySelectorAll("li.item");
const countOfLiItems = liItemCategories.length

console.log(`В списке ${countOfLiItems} категории`);

liItemCategories.forEach(item => {
    let category = item.firstElementChild.textContent;
    let count = item.lastElementChild.children.length

    console.log(
`Категория: ${category}
Количество элементов: ${count}`

    )
});
