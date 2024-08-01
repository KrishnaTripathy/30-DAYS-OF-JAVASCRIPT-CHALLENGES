// 2. write a function that clears all data from both localStorage and sessionStorage. verify that both storages are empty.


function clearStorages() {
    // Clear all data from localStorage and sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // Verify that both storages are empty
    console.log('LocalStorage:', localStorage);
    console.log('SessionStorage:', sessionStorage);
}

// Example usage
clearStorages();
