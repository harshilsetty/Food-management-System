// JavaScript to validate form input
document.getElementById('login-form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="name"]').value;
    const regNo = document.querySelector('input[name="reg-no"]').value;
    const phoneNo = document.querySelector('input[name="phone-no"]').value;

    // Validate name
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        event.preventDefault();
        return;
    }

    // Validate Registration No (basic check for alphanumeric values)
    const regNoPattern = /^[a-zA-Z0-9]+$/;
    if (!regNoPattern.test(regNo)) {
        alert("Registration number must be alphanumeric.");
        event.preventDefault();
        return;
    }

    // Validate phone number (basic check for numbers)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNo)) {
        alert("Phone number must be 10 digits.");
        event.preventDefault();
        return;
    }
});
