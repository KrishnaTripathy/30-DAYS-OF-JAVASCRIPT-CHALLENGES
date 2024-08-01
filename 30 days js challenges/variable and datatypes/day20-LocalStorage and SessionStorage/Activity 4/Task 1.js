// Activity 4 : Using sessionStorage

// 1. Create a simple form that saves user input (e.g. name, and email) to sessionStorage when submitted. retrived and display the saved data on page load.

  // Function to display saved data
  function displaySavedData() {
    const savedData = JSON.parse(sessionStorage.getItem('userData'));
    if (savedData) {
        document.getElementById('savedData').textContent = `Name: ${savedData.name}, Email: ${savedData.email}`;
    }
}

// Display saved data on page load
window.onload = displaySavedData;

// Form submission event listener
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userData = { name, email };
    sessionStorage.setItem('userData', JSON.stringify(userData));
    displaySavedData();
});







// This example performs the following steps:

// HTML Form:

// A simple form with name and email input fields and a submit button.
// JavaScript:

// displaySavedData function to retrieve and display saved data from sessionStorage.
// Calls displaySavedData on page load to display any existing saved data.
// Adds an event listener to the form to save user input to sessionStorage when the form is submitted and update the displayed data.





