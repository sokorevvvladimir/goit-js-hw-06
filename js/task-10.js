function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const divBoxesRef = document.querySelector('#boxes');

const inputRef = document.querySelector('#controls').firstElementChild;

const btnCreateRef = document.querySelector('button[data-create]');

const createBoxes = amount => {
  let box;
  
  for (let i = 1; i <= amount; i += 1) {
    box = document.createElement('div');
    box.style.width = i * 10 - 10 + 30 + 'px';
    box.style.height = i * 10 - 10 + 30 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    
    return box;
  };
  divBoxesRef.append(box);

};



btnCreateRef.addEventListener('click', createBoxes);

// createBoxes(inputRef.value);


// function destroyBoxes();
