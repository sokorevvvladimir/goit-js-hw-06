function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyRef = document.body;
const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

const bodyChangeColor = event => {
  const colors = getRandomHexColor();
  bodyRef.style.backgroundColor = colors;
  spanRef.textContent = colors;
};

buttonRef.addEventListener('click', bodyChangeColor);