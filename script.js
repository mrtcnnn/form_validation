const form = document.getElementById('form');
const password1El =document.getElementById('password1');
const password2El =document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Contraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = "Please fill out all the fields.";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;        
    }
    // Check to see if paswords match
    if (paswordEl1.value === paswordEl2.value) {
        passwordsMatch = true;
        password1El.style.borderBlockColor = 'green';
        password2El.style.borderBlockColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color ='green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    // show what happened
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // submit Data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event listener
form.addEventListener('submit', processFormData);