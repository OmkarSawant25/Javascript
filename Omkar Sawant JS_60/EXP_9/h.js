//JavaScript

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear previous error messages
    const errorMessagesDiv = document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const gender = document.getElementById('gender').value;
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    let errors = [];

    // Validate Name
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name || !nameRegex.test(name)) {
        errors.push("Please enter a valid name (letters and spaces only).");
    }

    // Validate Address
    if (!address) {
        errors.push("Address cannot be empty.");
    }

    // Validate City
    if (!city) {
        errors.push("City cannot be empty.");
    }

    // Validate State
    if (!state) {
        errors.push("State cannot be empty.");
    }

    // Validate Gender
    if (!gender) {
        errors.push("Please select your gender.");
    }

    // Validate Mobile Number
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobile || !mobileRegex.test(mobile)) {
        errors.push("Please enter a valid mobile number (10 digits).");
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    // Display errors if any
    if (errors.length > 0) {
        errorMessagesDiv.innerHTML = errors.join('<br>');
    } else {
        // If no errors, you can process the form here (e.g., send data to a server)
        errorMessagesDiv.innerHTML = "Form submitted successfully!";
    }
});
