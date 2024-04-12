const categories = document.querySelectorAll('.item');
const categoriesLength = categories.length;
console.log(`Number of categories: ${categoriesLength}`);

categories.forEach((element) => {
    const itemHeader = element.children[0];
    console.log(itemHeader.textContent);
    const elements = element.children[1];
    const elementsItems = elements.children;
    console.log(elementsItems.length);
})
