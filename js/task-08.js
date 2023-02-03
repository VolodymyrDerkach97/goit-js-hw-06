const form = document.querySelector('.login-form');

const result = {};

form.addEventListener('submit', onCheckFormValid)

function onCheckFormValid(event) {
  event.preventDefault();
  const formEl = event.currentTarget;

  let email = formEl.elements.namedItem('email').value;
  let password = formEl.elements.namedItem('password').value;

  if (email === '' || password === '') {
    alert('Всі поля повинні бути заповнені')
    event.currentTarget.reset();
  } else {
    result['email'] = email;
    result['password'] = password;
  }
event.currentTarget.reset();
console.log(result);
}
