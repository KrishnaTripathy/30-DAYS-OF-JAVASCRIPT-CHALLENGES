// Activity 2: Using LocalStorage


// 1. Create a simple form that saves user input(e.g. name and email) to localStorage when submitted. retrive and display the saved data on page load.


 // Function to display saved data
 function displaySavedData() {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
        document.getElementById('savedData').textContent = `Name: ${savedData.name}, Email: ${savedData.email}`;
    }
}

// Display saved data on page load
displaySavedData();

// Form submission event listener
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userData = { name, email };
    localStorage.setItem('userData', JSON.stringify(userData));
    displaySavedData();
});





// This example performs the following steps:

// HTML Form:

// A simple form with name and email input fields and a submit button.
// JavaScript:

// displaySavedData function to retrieve and display saved data from localStorage.
// Call displaySavedData on page load to display any existing saved data.
// Add an event listener to the form to save user input to localStorage when the form is submitted and update the displayed data.



