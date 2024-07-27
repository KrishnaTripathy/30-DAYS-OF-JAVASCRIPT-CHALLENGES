// Activity 5 : Private Fields (optional)

// 1. Define a class Account with private fields for balance and a method to deposit and withdraw money.
// Ensure that the balance can only be updated through these methods.

class Account {
    #balance; // Private field for balance
  
    constructor(initialBalance) {
      this.#balance = initialBalance; // Initialize balance
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount; // Increase balance
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount; // Decrease balance
      } else {
        console.log('Invalid withdrawal amount.');
      }
    }
  
    getBalance() {
      return this.#balance; // Return current balance
    }
  }
  
  // Example usage
  const account = new Account(1000);
  
  account.deposit(500);
  console.log(account.getBalance()); // 1500
  
  account.withdraw(200);
  console.log(account.getBalance()); // 1300
  













  
// ```

// ### Explanation

// 1. **Private Field Definition**

//     ```javascript
//     #balance;
//     ```
//     - `#balance`: Defines a private field for storing the balance, accessible only within the `Account` class.

// 2. **Constructor**

//     ```javascript
//     constructor(initialBalance) {
//       this.#balance = initialBalance;
//     }
//     ```
//     - `constructor(initialBalance) { ... }`: Initializes the `#balance` field with the provided `initialBalance`.

// 3. **Deposit Method**

//     ```javascript
//     deposit(amount) {
//       if (amount > 0) {
//         this.#balance += amount;
//       } else {
//         console.log('Deposit amount must be positive.');
//       }
//     }
//     ```
//     - `deposit(amount) { ... }`: Adds the specified `amount` to the `#balance` if it is positive.

// 4. **Withdraw Method**

//     ```javascript
//     withdraw(amount) {
//       if (amount > 0 && amount <= this.#balance) {
//         this.#balance -= amount;
//       } else {
//         console.log('Invalid withdrawal amount.');
//       }
//     }
//     ```
//     - `withdraw(amount) { ... }`: Subtracts the specified `amount` from the `#balance` if it is positive and does not exceed the current balance.

// 5. **Get Balance Method**

//     ```javascript
//     getBalance() {
//       return this.#balance;
//     }
//     ```
//     - `getBalance() { ... }`: Returns the current balance.

// This ensures that the balance can only be updated through the `deposit` and `withdraw` methods.