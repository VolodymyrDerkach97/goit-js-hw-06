const input = document.querySelector('#validation-input');

input.addEventListener('input', onInputValid);

function onInputValid (event) {
    const inputLengthValue = event.currentTarget.value.length;
    const requiredLengthValue = Number(event.currentTarget.getAttribute('data-length'));

    input.addEventListener('blur', () => {
        if (inputLengthValue === requiredLengthValue) {
            input.classList.remove('invalid') 
            input.classList.add('valid') 
        } else {
            input.classList.remove('valid')
            input.classList.add('invalid') 
        };
    });
  
};