const inputRef = document.querySelector('[id="validation-input"]');

const borderColoriser = event => {
 

    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid')
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    };
};

inputRef.addEventListener('blur', borderColoriser);

