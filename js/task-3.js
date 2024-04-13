const inputEl = document.querySelector("#name-input");
inputEl.addEventListener("blur", handleBlur);
const greeting = document.querySelector("#name-output");

function handleBlur(event) {
    const name = event.target.value;
    const nameCleared = name.trim();
    console.log(nameCleared);
    if (nameCleared === "") {
        greeting.innerText = "Anonymous"; // Assigning "Anonymous" to greeting.innerText
    } else {
        greeting.innerText = nameCleared; // Assigning nameCleared to greeting.innerText
    }
}