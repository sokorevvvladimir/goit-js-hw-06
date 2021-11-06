const inputRef = document.querySelector('[id="validation-input"]');

const borderColoriser = event => {
 

    if (event.currentTarget.value.length >= inputRef.dataset.length) {
        event.currentTarget.classList.replace('invalid', 'valid')
    };

    if (event.currentTarget.value.length < inputRef.dataset.length) {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid')
    };

};

inputRef.addEventListener('blur', borderColoriser);

