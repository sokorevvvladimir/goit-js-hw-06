const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories:`, categoriesRef.length);

//Способ номер два - две строки ниже 
const categoriesRef2 = document.querySelector('[id="categories"]');
console.log(`Number of categories:`, categoriesRef2.children.length);

const mainUlRef = document.querySelector('[id ="categories"]').children;

const titlesRef = [...mainUlRef].forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
});
