document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const validateButton = document.getElementById("validateButton");
    const output = document.getElementById("output");

    validateButton.addEventListener("click", function () {
        const email = emailInput.value.trim();

        if (isValidEmail(email)) {
            validationResult.textContent = "Valid email address!";
            validationResult.style.color = "green";
        } else {
            validationResult.textContent = "Invalid email address!";
            validationResult.style.color = "red";
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});



