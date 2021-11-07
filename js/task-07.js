const inputRef = document.querySelector('[id="font-size-control"]');
const spanRef = document.querySelector('[id="text"]');

spanRef.style.fontSize = inputRef.value;

const fontSizeChanger = event => {
    spanRef.style.fontSize = event.currentTarget.value + 'px';
};

inputRef.addEventListener('input', fontSizeChanger);