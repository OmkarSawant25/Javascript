//JavaScript

const body = document.body;

// Change background color on mouse over event
body.addEventListener('mouseover', function() {
    body.style.backgroundColor = 'red'; // Light cyan color
});

// Change background color on mouse out event
body.addEventListener('mouseout', function() {
    body.style.backgroundColor = ''; // Reset to default
});

// Change background color on focus event
const inputField = document.getElementById('inputField');
inputField.addEventListener('focus', function() {
    body.style.backgroundColor = '#ffe0b2'; // Light orange color
});

// Reset background color when input loses focus
inputField.addEventListener('blur', function() {
    body.style.backgroundColor = ''; // Reset to default
});

// Reset button functionality
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
    body.style.backgroundColor = ''; // Reset to default
});
