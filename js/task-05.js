const inputRef = document.querySelector('[id="name-input"]');
const outputRef = document.querySelector('[id="name-output"]');

const nameChanger = event => {
    if (outputRef.textContent !== "") {
        outputRef.textContent = event.currentTarget.value
    };
    if (outputRef.textContent === "") {
        outputRef.textContent = 'Anonymous';
    };
    
};

inputRef.addEventListener('input', nameChanger);