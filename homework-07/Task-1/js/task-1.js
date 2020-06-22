const amountOfClasses = (className) => {
  //   return document.querySelectorAll(className).length;
  return document.querySelectorAll(className).length;
};

const amountOfCategories = amountOfClasses("li.item");
const amountOfSubCategories = amountOfClasses("li.item ul li");

console.log(`В списке ${amountOfCategories} категории`);
console.log(`В списке ${amountOfSubCategories} категории`);

// const allCategories =
// const subCategories
