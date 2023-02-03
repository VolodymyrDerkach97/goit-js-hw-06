const form = document.querySelector('.login-form');


form.addEventListener('submit', onCheckFormValid)
console.dir(form.label);
function onCheckFormValid(event) {
    event.preventDefault();

}