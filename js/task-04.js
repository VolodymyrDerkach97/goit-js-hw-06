let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

function updateValue () {
    value.textContent = `${counterValue}`
}

buttonDecrement.addEventListener('click', () => {counterValue -= 1
    return updateValue()});

buttonIncrement.addEventListener('click', () => {counterValue += 1
    return updateValue()});
