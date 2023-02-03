function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls > input')
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');

input.addEventListener('input', onMakeQuantityCreate);
buttonCreate.addEventListener('click', onCreateBoxes);
buttonDestroy.addEventListener('click', onRemoveBoxes)

let create = 0

function onMakeQuantityCreate (event) {
  return create = Number(event.currentTarget.value);
}
function onCreateBoxes (amount) {
  amount = create
  let sideLength = 30
  
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${sideLength}px`
    div.style.height = `${sideLength}px`
    div.style.backgroundColor = `${getRandomHexColor()}`
    sideLength += 10
    
    const res = div
   boxes.append(res)
  }
  
}

function onRemoveBoxes (event) {
  boxes.innerHTML = ''
  input.value = ''
}
