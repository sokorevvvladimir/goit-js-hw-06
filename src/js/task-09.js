function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyRef = document.body;
const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

const bodyChangeColor = event => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
};

buttonRef.addEventListener('click', bodyChangeColor);