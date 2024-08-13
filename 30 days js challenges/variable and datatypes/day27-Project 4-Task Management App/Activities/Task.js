// Activity 1: Setting Up the Project

// Task 1: Initialize a new project directory and set up the basic HTML structure for the task management app.

// Task 2: Add a basic CSS file to style the task management app, including a container for displaying tasks and a form for adding new tasks.

// Activity 2: Creating Tasks

// Task 3: Add a form to the HTML structure with fields for entering task details ( e.g., title, description, due date). Style the form using CSS.

// Task 4: Write a script to handle form submission, creating a new task object and adding it to an array of tasks. Display the new task in the task list.

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('task-form');
//     const taskList = document.getElementById('task-list');
//     const tasks = [];

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const title = document.getElementById('task-title').value;
//         const description = document.getElementById('task-description').value;
//         const dueDate = document.getElementById('task-due-date').value;

//         const newTask = { title, description, dueDate };
//         tasks.push(newTask);

//         displayTasks();
//         form.reset();
//     });

//     function displayTasks() {
//         taskList.innerHTML = '';
//         tasks.forEach(task => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//                 <h2>${task.title}</h2>
//                 <p>${task.description}</p>
//                 <p><strong>Due Date:</strong> ${task.dueDate}</p>
//             `;
//             taskList.appendChild(li);
//         });
//     }
// });

// Activity 3: Reading and Displaying Tasks

// Task 5: Write a function to iterate over the array of tasks and display each task in the task list. Include task details like title, description, and due date.

// Task 6: Style the task list using CSS to make it visually appealing.

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('task-form');
//     const taskList = document.getElementById('task-list');
//     const tasks = [];

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const title = document.getElementById('task-title').value;
//         const description = document.getElementById('task-description').value;
//         const dueDate = document.getElementById('task-due-date').value;

//         const newTask = { title, description, dueDate };
//         tasks.push(newTask);

//         displayTasks();
//         form.reset();
//     });

//     function displayTasks() {
//         taskList.innerHTML = '';  // Clear existing tasks
//         tasks.forEach(task => {
//             const li = document.createElement('li');
//             li.className = 'task-item';
//             li.innerHTML = `
//                 <h2 class="task-title">${task.title}</h2>
//                 <p class="task-description">${task.description}</p>
//                 <p class="task-due-date"><strong>Due Date:</strong> ${task.dueDate}</p>
//             `;
//             taskList.appendChild(li);
//         });
//     }
// });


// Activity 4: Updating Tasks

// Task 7: Add an "Edit" button to each task item in the task list. Write a function to populate the form with the task details when the "Edit" button is clicked.

// Task 8: Write a function to update the task object in the array and refresh the task list display after editing a task.

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('task-form');
//     const taskList = document.getElementById('task-list');
//     const tasks = [];
//     let editIndex = -1;  // Track the index of the task being edited

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const title = document.getElementById('task-title').value;
//         const description = document.getElementById('task-description').value;
//         const dueDate = document.getElementById('task-due-date').value;

//         if (editIndex === -1) {
//             // Adding a new task
//             const newTask = { title, description, dueDate };
//             tasks.push(newTask);
//         } else {
//             // Editing an existing task
//             tasks[editIndex] = { title, description, dueDate };
//             editIndex = -1;  // Reset the edit index after updating
//         }

//         displayTasks();
//         form.reset();
//     });

//     function displayTasks() {
//         taskList.innerHTML = '';  // Clear existing tasks
//         tasks.forEach((task, index) => {
//             const li = document.createElement('li');
//             li.className = 'task-item';
//             li.innerHTML = `
//                 <h2 class="task-title">${task.title}</h2>
//                 <p class="task-description">${task.description}</p>
//                 <p class="task-due-date"><strong>Due Date:</strong> ${task.dueDate}</p>
//                 <button class="edit-btn" data-index="${index}">Edit</button>
//             `;
//             taskList.appendChild(li);
//         });

//         // Add event listeners to "Edit" buttons
//         document.querySelectorAll('.edit-btn').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 populateForm(index);
//             });
//         });
//     }

//     function populateForm(index) {
//         const task = tasks[index];
//         document.getElementById('task-title').value = task.title;
//         document.getElementById('task-description').value = task.description;
//         document.getElementById('task-due-date').value = task.dueDate;
//         editIndex = index;  // Set the index of the task to be edited
//     }
// });


// Activity 5: Deleting Tasks

// Task 9: Add a "Delete" button to each task item in the task list. Write a function to remove the task from the array and refresh the task list display when the "Delete" button is clicked.

// Task 10: Add a confirmation dialog before deleting a task to prevent accidental deletions.


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const tasks = [];
    let editIndex = -1;  // Track the index of the task being edited

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('task-due-date').value;

        if (editIndex === -1) {
            // Adding a new task
            const newTask = { title, description, dueDate };
            tasks.push(newTask);
        } else {
            // Editing an existing task
            tasks[editIndex] = { title, description, dueDate };
            editIndex = -1;  // Reset the edit index after updating
        }

        displayTasks();
        form.reset();
    });

    function displayTasks() {
        taskList.innerHTML = '';  // Clear existing tasks
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'task-item';
            li.innerHTML = `
                <h2 class="task-title">${task.title}</h2>
                <p class="task-description">${task.description}</p>
                <p class="task-due-date"><strong>Due Date:</strong> ${task.dueDate}</p>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            taskList.appendChild(li);
        });

        // Add event listeners to "Edit" and "Delete" buttons
        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                populateForm(index);
            });
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                deleteTask(index);
            });
        });
    }

    function populateForm(index) {
        const task = tasks[index];
        document.getElementById('task-title').value = task.title;
        document.getElementById('task-description').value = task.description;
        document.getElementById('task-due-date').value = task.dueDate;
        editIndex = index;  // Set the index of the task to be edited
    }

    function deleteTask(index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            displayTasks();
        }
    }
});
