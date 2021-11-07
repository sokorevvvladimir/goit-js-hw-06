const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListRef = document.querySelector('[id="ingredients"]');


const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const liRef = document.createElement('li');
    liRef.classList.add('item');
    liRef.textContent = ingredient;

    return liRef;
  });
};

const elements = makeIngredientsList(ingredients);

ingredientsListRef.append(...elements);