// Счетчик состоит из спана и кнопок, которые
// должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную`counterValue` в которой
// будет хранится текущее значение
//   счетчика.
// - Создай функции`increment` и`decrement` для
// увеличения и уменьшения значения
//   счетчика
//     - Добавь слушатели кликов на кнопки, вызовы
// функций и обновление интерфейса

const incrementBtn = document.querySelector("#counter").lastElementChild
const decrementBtn = document.querySelector("#counter").firstElementChild
const counterValue = document.querySelector("#value")

incrementBtn.addEventListener('click', increaseFoo)
decrementBtn.addEventListener('click', decreaseFoo)
let total = 0

function increaseFoo() {
    total += 1
    counterValue.textContent = total
}

function decreaseFoo() {
    total -= 1
    counterValue.textContent = total
}