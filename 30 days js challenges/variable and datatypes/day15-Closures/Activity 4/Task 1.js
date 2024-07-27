// Activity 4 : module pattern


// 1. Use closures to create a simple module for managing a collection of items.implement methods to add, remove , and list items.


const createItemManager = () => {
    const items = []; // Private array to store items
  
    return {
      addItem(item) {
        items.push(item); // Add item to the array
      },
      removeItem(item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1); // Remove item if it exists in the array
        }
      },
      listItems() {
        return items.slice(); // Return a copy of the array
      }
    };
  };
  
  // Create an instance of the item manager
  const itemManager = createItemManager();
  
  // Add items
  itemManager.addItem('Apple');
  itemManager.addItem('Banana');
  
  // Remove an item
  itemManager.removeItem('Apple');
  
  // List items
  console.log(itemManager.listItems()); // ['Banana']

  











 

// ### Explanation

// 1. **Create the Item Manager Module**

//     ```javascript
//     const createItemManager = () => {
//       const items = []; // Private array to store items

//       return {
//         addItem(item) {
//           items.push(item); // Add item to the array
//         },
//         removeItem(item) {
//           const index = items.indexOf(item);
//           if (index > -1) {
//             items.splice(index, 1); // Remove item if it exists in the array
//           }
//         },
//         listItems() {
//           return items.slice(); // Return a copy of the array
//         }
//       };
//     };
//     ```
//     - `const createItemManager = () => { ... };`: Defines a function that returns an object with methods to manage items.
//     - `const items = [];`: Initializes a private array to store the items.
//     - `addItem(item) { ... }`: Adds an item to the `items` array.
//     - `removeItem(item) { ... }`: Finds and removes an item from the `items` array if it exists.
//     - `listItems() { ... }`: Returns a copy of the `items` array.

// 2. **Create an Instance of the Item Manager**

//     ```javascript
//     const itemManager = createItemManager();
//     ```
//     - Calls `createItemManager` to create an instance of the item manager.

// 3. **Add Items**

//     ```javascript
//     itemManager.addItem('Apple');
//     itemManager.addItem('Banana');
//     ```
//     - Uses the `addItem` method to add `'Apple'` and `'Banana'` to the items list.

// 4. **Remove an Item**

//     ```javascript
//     itemManager.removeItem('Apple');
//     ```
//     - Uses the `removeItem` method to remove `'Apple'` from the items list.

// 5. **List Items**

//     ```javascript
//     console.log(itemManager.listItems()); // ['Banana']
//     ```
//     - Uses the `listItems` method to log the current items in the list, which should now be `['Banana']`.