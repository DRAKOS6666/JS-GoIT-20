const categoryListDescpition = function (mainList) {
  console.log(`В списке ${mainList.children.length} категории`);

  Array.from(mainList.children).forEach((element) => {
    const categoryName = element.querySelector("h2,h3,h4").textContent;
    const subCategoryList = Array.from(element.querySelectorAll("li"));

    console.log("Категория: " + categoryName);
    console.log("Количество элементов: " + subCategoryList.length);
  });
};

const allLists = document.querySelector("#categories");

categoryListDescpition(allLists);
