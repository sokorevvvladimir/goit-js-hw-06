let counterValue = 0;

const decrementBtn = document.querySelector('[id="counter"] button[data-action="decrement"]');
const incrementBtn = document.querySelector('[id="counter"] button[data-action="increment"]');

const spanValue = document.querySelector('[id="value"]');


const onIncrBtnEvent = () => {
    counterValue += 1;
    document.getElementById('value').innerHTML = counterValue;
};

incrementBtn.addEventListener('click', onIncrBtnEvent);

const onDecrBtnEvent = () => {
    counterValue -= 1;
    document.getElementById('value').innerHTML = counterValue;
};

decrementBtn.addEventListener('click', onDecrBtnEvent);