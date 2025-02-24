document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;
    
    const fields = ["Username", "email", "Password", "phNumber"];
    fields.forEach(field => {
        const input = document.getElementById(field);
        const errorMessage = input.nextElementSibling;
        input.classList.remove("error");
        errorMessage.innerText = "";
        errorMessage.style.visibility = "hidden";
    });

    const username = document.getElementById("Username");
    if (username.value.trim() === "") {
        setError(username, "Fill the empty space");
        isValid = false;
    } else if (username.value.trim().length < 3) {
        setError(username, "Username must be at least 3 characters long.");
        isValid = false;
    }

    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        setError(email, "Fill the empty space");
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        setError(email, "Enter a valid email.");
        isValid = false;
    }

    const password = document.getElementById("Password");
    if (password.value.trim() === "") {
        setError(password, "Fill the empty space");
        isValid = false;
    }

    const phNumber = document.getElementById("phNumber");
    const phonePattern = /^\d{10}$/;
    if (phNumber.value.trim() === "") {
        setError(phNumber, "Fill the empty space");
        isValid = false;
    } else if (!phonePattern.test(phNumber.value.trim())) {
        setError(phNumber, "Enter a 10-digit phone number.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
}

function setError(element, message) {
    element.classList.add("error");
    const errorMessage = element.nextElementSibling;
    errorMessage.innerText = message;
    errorMessage.style.visibility = "visible";
}