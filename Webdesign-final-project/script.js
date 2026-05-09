const button = document.getElementById("welcome-btn");
const message = document.getElementById("message");

if (button) {
    button.addEventListener("click", showMessage);
}

function showMessage() {

    message.textContent =
        "Thanks for visiting my website 💖";

    document.body.style.backgroundColor = "#fff0f6";
}

const formButton = document.getElementById("form-btn");
const formResponse = document.getElementById("form-response");

if (formButton) {
    formButton.addEventListener("click", showFormMessage);
}

function showFormMessage() {
    formResponse.textContent =
        "Thank you! Your message has been received 💌";
}