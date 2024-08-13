// Activity 1: Setting Up the Project

// • Task 1: Initialize a new project directory and set up the basic HTML structure for the e-commerce website.

// Task 2: Add a basic CSS file to style the e-commerce website, including a product listing grid and a shopping cart section.


// Activity 2: Product Listing

// Task 3: Create a JSON file or an array of product objects with details like name, price, description, and image URL.

// Task 4: Write a script to dynamically generate the product listing from the product data and display it on the web page. Style the product cards using CSS.

// document.addEventListener('DOMContentLoaded', () => {
//     const productList = document.querySelector('.product-list');

//     fetch('products.json')
//         .then(response => response.json())
//         .then(products => {
//             products.forEach(product => {
//                 const productItem = document.createElement('div');
//                 productItem.className = 'product-item';
//                 productItem.innerHTML = `
//                     <img src="${product.imageUrl}" alt="${product.name}">
//                     <h3>${product.name}</h3>
//                     <p>${product.description}</p>
//                     <p class="price">${product.price}</p>
//                     <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
//                 `;
//                 productList.appendChild(productItem);
//             });

//             // Add event listeners to "Add to Cart" buttons
//             document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//                 button.addEventListener('click', (e) => {
//                     const id = e.target.getAttribute('data-id');
//                     console.log(`Add product with ID ${id} to cart`); // Handle adding to cart
//                 });
//             });
//         })
//         .catch(error => console.error('Error loading products:', error));
// });


// Activity 3: Shopping Cart

// Task 5: Add an "Add to Cart" button to each product card. Write a function to handle adding products to the shopping cart.

// Task 6: Create a shopping cart section that displays the products added to the cart, including the name, price, and quantity. Update the cart display whenever a product is added.

// document.addEventListener('DOMContentLoaded', () => {
//     const productList = document.querySelector('.product-list');
//     const cartItemsList = document.getElementById('cart-items');
//     const cart = {};

//     fetch('products.json')
//         .then(response => response.json())
//         .then(products => {
//             products.forEach(product => {
//                 const productItem = document.createElement('div');
//                 productItem.className = 'product-item';
//                 productItem.innerHTML = `
//                     <img src="${product.imageUrl}" alt="${product.name}">
//                     <h3>${product.name}</h3>
//                     <p>${product.description}</p>
//                     <p class="price">${product.price}</p>
//                     <button class="add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
//                 `;
//                 productList.appendChild(productItem);
//             });

//             // Add event listeners to "Add to Cart" buttons
//             document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//                 button.addEventListener('click', (e) => {
//                     const id = e.target.getAttribute('data-id');
//                     const name = e.target.getAttribute('data-name');
//                     const price = e.target.getAttribute('data-price');

//                     addToCart(id, name, price);
//                 });
//             });
//         })
//         .catch(error => console.error('Error loading products:', error));

//     function addToCart(id, name, price) {
//         if (!cart[id]) {
//             cart[id] = { name, price, quantity: 0 };
//         }
//         cart[id].quantity++;

//         updateCartDisplay();
//     }

//     function updateCartDisplay() {
//         cartItemsList.innerHTML = '';  // Clear existing cart items
//         for (const id in cart) {
//             const item = cart[id];
//             const li = document.createElement('li');
//             li.innerHTML = `
//                 ${item.name} - ${item.price} x ${item.quantity}
//             `;
//             cartItemsList.appendChild(li);
//         }
//     }
// });


// Activity 4: Cart Management

// Task 7: Add functionality to update the quantity of products in the cart. Write a function to handle increasing and decreasing the quantity of items. 
// Task 8: Add a Remove" button to each item in the cart. Write a function to handle removing products from the cart and updating the display.

// document.addEventListener('DOMContentLoaded', () => {
//     const productList = document.querySelector('.product-list');
//     const cartItemsList = document.getElementById('cart-items');
//     const cart = {};

//     fetch('products.json')
//         .then(response => response.json())
//         .then(products => {
//             products.forEach(product => {
//                 const productItem = document.createElement('div');
//                 productItem.className = 'product-item';
//                 productItem.innerHTML = `
//                     <img src="${product.imageUrl}" alt="${product.name}">
//                     <h3>${product.name}</h3>
//                     <p>${product.description}</p>
//                     <p class="price">${product.price}</p>
//                     <button class="add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
//                 `;
//                 productList.appendChild(productItem);
//             });

//             document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//                 button.addEventListener('click', (e) => {
//                     const id = e.target.getAttribute('data-id');
//                     const name = e.target.getAttribute('data-name');
//                     const price = e.target.getAttribute('data-price');

//                     addToCart(id, name, price);
//                 });
//             });
//         })
//         .catch(error => console.error('Error loading products:', error));

//     function addToCart(id, name, price) {
//         if (!cart[id]) {
//             cart[id] = { name, price, quantity: 0 };
//         }
//         cart[id].quantity++;

//         updateCartDisplay();
//     }

//     function updateCartDisplay() {
//         cartItemsList.innerHTML = '';
//         for (const id in cart) {
//             const item = cart[id];
//             const li = document.createElement('li');
//             li.innerHTML = `
//                 ${item.name} - ${item.price} x ${item.quantity}
//                 <button class="increase-qty-btn" data-id="${id}">+</button>
//                 <button class="decrease-qty-btn" data-id="${id}">-</button>
//                 <button class="remove-btn" data-id="${id}">Remove</button>
//             `;
//             cartItemsList.appendChild(li);
//         }

//         document.querySelectorAll('.increase-qty-btn').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const id = e.target.getAttribute('data-id');
//                 updateQuantity(id, 1);
//             });
//         });

//         document.querySelectorAll('.decrease-qty-btn').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const id = e.target.getAttribute('data-id');
//                 updateQuantity(id, -1);
//             });
//         });

//         document.querySelectorAll('.remove-btn').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const id = e.target.getAttribute('data-id');
//                 removeFromCart(id);
//             });
//         });
//     }

//     function updateQuantity(id, change) {
//         if (cart[id]) {
//             cart[id].quantity += change;
//             if (cart[id].quantity <= 0) {
//                 delete cart[id];
//             }
//             updateCartDisplay();
//         }
//     }

//     function removeFromCart(id) {
//         delete cart[id];
//         updateCartDisplay();
//     }
// });


// Activity 5: Checkout Process

// Task 9: Create a checkout form that collects user information (e.g., name, address, payment details), Style the form using CSS. 
// Task 10: Write a function to handle form submission, simulating the checkout process. Display a confirmation message with the order details.
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');
    const cartItemsList = document.getElementById('cart-items');
    const cart = {};
const checkoutForm = document.getElementById('checkout-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const payment = document.getElementById('payment').value;

        // Simulate order processing
        const orderDetails = `
            <h3>Order Confirmation</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Payment Details:</strong> ${payment}</p>
            <h4>Your order has been placed successfully!</h4>
        `;

        confirmationMessage.innerHTML = orderDetails;
        
        // Optionally, clear the form and cart after submission
        checkoutForm.reset();
        cart = {}; // Empty the cart
        updateCartDisplay();
    });
});