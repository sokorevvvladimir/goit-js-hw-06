const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories:`, categoriesRef.length);

//Способ номер два - две строки ниже 
const categoriesRef2 = document.querySelector('[id]');
console.log(`Number of categories:`, categoriesRef2.children.length);

const animalsRef = document.querySelector('.item');
console.log(`Category:`, animalsRef.firstElementChild.textContent);
console.log(`Elements:`, animalsRef.lastElementChild.children.length);

const productsRef = animalsRef.nextElementSibling;
console.log(`Category:`, productsRef.firstElementChild.textContent);
console.log(`Elements:`, productsRef.lastElementChild.children.length);

const technologiesRef = document.querySelector('[id]');
console.log(`Category:`, technologiesRef.lastElementChild.firstElementChild.textContent);
console.log(`Elements:`, technologiesRef.lastElementChild.lastElementChild.children.length);
