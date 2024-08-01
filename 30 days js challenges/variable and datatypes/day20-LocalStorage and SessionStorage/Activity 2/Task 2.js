// 2. write a script to remove an item from localStorage. Log the localStorage content before and after removal.


// Save an item to localStorage
localStorage.setItem('itemKey', 'This is a sample item');

// Log the localStorage content before removal
console.log('Before removal:', localStorage.getItem('itemKey'));

// Remove the item from localStorage
localStorage.removeItem('itemKey');

// Log the localStorage content after removal
console.log('After removal:', localStorage.getItem('itemKey'));
