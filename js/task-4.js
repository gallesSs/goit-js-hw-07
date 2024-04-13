const form = document.querySelector(".login-form");

form.addEventListener("submit", handleForm)

function handleForm(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const info = {
        email: elements.email.value,
        password: elements.password.value
    }
    const values = Object.values(info);
    const some = values.some(value => value === "")
    if (some === true) {
        alert("Please fill all the inputs!")
    } else {
        console.log(info);
    }
    event.target.reset();
}
