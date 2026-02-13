document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Message sent successfully!";
        successMessage.style.color = "#4ade80";
        document.getElementById("contactForm").reset();
    }

});
