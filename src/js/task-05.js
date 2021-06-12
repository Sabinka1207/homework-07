// Напиши скрипт который, при наборе текста
// в инпуте`input#name-input`(событие
// input), подставляет его текущее значение
// в`span#name-output`.Если инпут
// пустой, в спане должна отображаться строка
//     `'незнакомец'`.

let inputEl = document.querySelector("#name-input")
let outputEl = document.querySelector("#name-output")
console.log(inputEl)
console.log(outputEl)

//     console.log(inputEl.oninput)
//     // console.log(inputEl.value)
// inputEl.oninput = function () {
//     outputEl.textContent = inputEl.value
// }

inputEl.addEventListener('input', inputFoo)

function inputFoo(event) {
outputEl.textContent = event.currentTarget.value
    if (!event.currentTarget.value) {
        outputEl.textContent = "незнакомец"
    }
}