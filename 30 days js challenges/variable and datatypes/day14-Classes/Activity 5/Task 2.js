// 2. create an instance of the Account class and text the deposite and withdraw methods, logging the balance after each operation.


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
  
  // Create an instance of the Account class
  const account = new Account(1000);
  
  // Deposit money and log balance
  account.deposit(500);
  console.log(`Balance after deposit: ${account.getBalance()}`); // Balance after deposit: 1500
  
  // Withdraw money and log balance
  account.withdraw(200);
  console.log(`Balance after withdrawal: ${account.getBalance()}`); // Balance after withdrawal: 1300
  







  

// ### Explanation

// 1. **Create an Instance**

//     ```javascript
//     const account = new Account(1000);
//     ```
//     - Creates a new `Account` instance with an initial balance of `1000`.

// 2. **Deposit Money**

//     ```javascript
//     account.deposit(500);
//     console.log(`Balance after deposit: ${account.getBalance()}`);
//     ```
//     - Deposits `500` into the account and logs the balance after the deposit.

// 3. **Withdraw Money**

//     ```javascript
//     account.withdraw(200);
//     console.log(`Balance after withdrawal: ${account.getBalance()}`);
//     ```
//     - Withdraws `200` from the account and logs the balance after the withdrawal.