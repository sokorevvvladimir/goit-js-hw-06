function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const divBoxesRef = document.querySelector('#boxes');

const inputRef = document.querySelector('#controls').firstElementChild;

const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');

const createBoxes = function (amount) {
  let boxes = [];
  
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    const color = getRandomHexColor()
    box.style.width = i * 10 - 10 + 30 + 'px';
    box.style.height = i * 10 - 10 + 30 + 'px';
    box.style.backgroundColor = color;
    
    boxes.push(box);
  };
  divBoxesRef.append(...boxes);

};

btnCreateRef.addEventListener('click', () => {
  createBoxes(inputRef.value)
});


const destroyBoxes = function () {
  divBoxesRef.innerHTML = "";

};

btnDestroyRef.addEventListener('click', () => {
  destroyBoxes();
  inputRef.value = "";
})
