const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories:`, categoriesRef.length);

//Способ номер два ниже 
const categoriesRef2 = document.querySelector('[id]');
console.log(`Number of categories:`, categoriesRef2.children.length);

// const b = categoriesRef.forEach(element => {
//     return element.firstElementChild.textContent;
// });
// console.log(b);

const a = document.querySelector('.item');
console.log(`Category:`, a.firstElementChild.textContent);
console.log(`Elements:`, a.lastElementChild.children.length);