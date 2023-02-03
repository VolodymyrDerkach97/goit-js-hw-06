const input = document.querySelector('#validation-input');

input.addEventListener('input', onInputValid);

function onInputValid (event) {
    const lengthValue = event.currentTarget.value.length;
    const maxLengthValue = Number(event.currentTarget.dataset.length);

    input.addEventListener('blur', () => {
        if (lengthValue >= maxLengthValue) {
            input.classList.remove('invalid') 
            input.classList.add('valid') 
        } else {
            input.classList.remove('valid')
            input.classList.add('invalid') 
        };
    });
  
};