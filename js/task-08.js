const form = document.querySelector('.login-form');


form.addEventListener('submit', onCheckFormValid)

function onCheckFormValid(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    if (formData.get('password') === '' || formData.get('email') === '') {
        alert('Всі поля повинні бути заповнені')
    };
    console.log(formData);
    console.log(formData.set(values, name));
    
    formData.forEach((values, name) => {
        const dataFormResult = {values, name}
        return console.log(dataFormResult)
    })
    ;
}