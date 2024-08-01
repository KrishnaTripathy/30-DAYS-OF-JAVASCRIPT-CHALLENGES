// 2. write a script to remove an item from sessionStorage. Log the sessionstorage content before and after removal.

// Save an item to sessionStorage
sessionStorage.setItem('itemKey', 'This is a sample item');

// Log the sessionStorage content before removal
console.log('Before removal:', sessionStorage.getItem('itemKey'));

// Remove the item from sessionStorage
sessionStorage.removeItem('itemKey');

// Log the sessionStorage content after removal
console.log('After removal:', sessionStorage.getItem('itemKey'));
