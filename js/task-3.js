const inputEl = document.querySelector("#name-input");
inputEl.addEventListener("input", handleBlur);
const greeting = document.querySelector("#name-output");

function handleBlur(event) {
    const name = event.target.value;
    const nameCleared = name.trim();
    console.log(nameCleared);
    if (nameCleared === "") {
        greeting.textContent = "Anonymous"; // Assigning "Anonymous" to greeting.innerText
    } else {
        greeting.textContent = nameCleared; // Assigning nameCleared to greeting.innerText
    }
}