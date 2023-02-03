const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('change', updateFontSize);

function updateFontSize(event) {
    text.style.fontSize = `${event.currentTarget.value}px`
};

