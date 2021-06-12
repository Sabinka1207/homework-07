// Напиши скрипт, который реагирует на изменение
// значения`input#font-size-control`
// (событие input) и изменяет инлайн - стиль
// `span#text` обновляя свойство
// `font-size`.В результате при перетаскивании
// ползунка будет меняться размер
// текста.

// ```html
// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputEl = document.querySelector('input')
const outputEl = document.querySelector('span')

inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    const size = Number(event.currentTarget.value) / 2
    outputEl.style.fontSize = `${size}px`

}