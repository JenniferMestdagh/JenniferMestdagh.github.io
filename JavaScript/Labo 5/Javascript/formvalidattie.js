const setup = () => {
    email.addEventListener("input", emailValidation);
    children.addEventListener("input", childrenValidation);
}

const email = document.getElementById("email");
const emailValidation = () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Geen geldig e-mail adres");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
}

const children = document.getElementById("kinderen");
const childrenValidation = () => {
    if (children.value < 0) {
        children.setCustomValidity("Is geen positief getal!");
        children.reportValidity();
    } else if (children.value > 99) {
        children.setCustomValidity("Is te vruchtbaar")
    } else {
        email.setCustomValidity("");
    }
}

let button = document.getElementById('button')
button.addEventListener("click", setup);