function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const divBoxesRef = document.querySelector('#boxes');

const inputRef = document.querySelector('#controls').firstElementChild;
console.log(inputRef.value);

function createBoxes(amount) {
  for (let i = 0; i <= amount - 1; i += 1) {
    const box = document.createElement('div');
    box.style.width = i * 10 + 30 + 'px';
    box.style.height = i * 10 + 30 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    
    return box;
  };
};

const a = createBoxes(inputRef.value);

divBoxesRef.append(a);

// function destroyBoxes();
