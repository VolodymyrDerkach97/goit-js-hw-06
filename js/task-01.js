const categoriesEl = document.querySelectorAll(".item");
const getNumberOfCategories = "Number of categories: " + categoriesEl.length;
console.log(getNumberOfCategories);

const getCategoryAndElement = categoriesEl.forEach(item => {
    return  console.log("Category: " + item.firstElementChild.textContent),
    console.log("Elements: " + item.lastElementChild.children.length)});
