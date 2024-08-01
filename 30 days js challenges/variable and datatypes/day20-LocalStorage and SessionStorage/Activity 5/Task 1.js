// Activity 5: comparing LocalStorage and SessionStorage

// 1. write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage and sessionStorage . Retrive and log the value from both storage mechanisms.


function saveToStorages(key, value) {
    // Save the value to both localStorage and sessionStorage
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);

    // Retrieve the value from both storages
    const localValue = localStorage.getItem(key);
    const sessionValue = sessionStorage.getItem(key);

    // Log the values
    console.log(`LocalStorage: ${localValue}`);
    console.log(`SessionStorage: ${sessionValue}`);
}

// Example usage
saveToStorages('myKey', 'Hello, Storage!');
