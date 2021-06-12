// Напиши скрипт, который бы при потере фокуса
// на инпуте, проверял его содержимое
// на правильное количество символов.

// - Сколько символов должно быть в инпуте,
// указывается в его атрибуте
// `data-length`.
// - Если введено подходящее количество,
// то`border` инпута становится зеленым,
// если неправильное - красным.

// Для добавления стилей, используй
// CSS - классы`valid`
// и `invalid`.

let inputEl = document.querySelector("input")

inputEl.addEventListener('input', onInputCheck)

function onInputCheck(event) {
    let currentLength = event.currentTarget.value.length
    const settedLength = Number(inputEl.dataset.length)

    if (currentLength === settedLength) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')        
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}