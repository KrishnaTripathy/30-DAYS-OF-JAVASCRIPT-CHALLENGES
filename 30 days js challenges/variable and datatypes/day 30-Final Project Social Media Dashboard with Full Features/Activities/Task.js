// Activity 1: Setting Up the Project

// Task 1: Initialize a new project directory and set up the basic HTML structure for the final project.

// Task 2: Add a basic CSS file to style the social media dashboard, including containers for posts, a sidebar for user information, and a form for creating new posts.

// Activity 2: User Authentication

// Task 3: Create a login and registration form that collects a username, email, and password. Style the forms using CSS.

// Task 4: Write scripts to handle user registration and login, storing user information in localStorage or sessionStorage. Include basic validation for input fields.


// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('login-form');
//     const registerForm = document.getElementById('register-form');
//     const loginFormContainer = document.getElementById('login-form-container');
//     const registerFormContainer = document.getElementById('register-form-container');
//     const postContainer = document.getElementById('post-container');
//     const showRegisterLink = document.getElementById('show-register');
//     const showLoginLink = document.getElementById('show-login');

//     // Show registration form
//     showRegisterLink.addEventListener('click', (e) => {
//         e.preventDefault();
//         loginFormContainer.style.display = 'none';
//         registerFormContainer.style.display = 'block';
//     });

//     // Show login form
//     showLoginLink.addEventListener('click', (e) => {
//         e.preventDefault();
//         loginFormContainer.style.display = 'block';
//         registerFormContainer.style.display = 'none';
//     });

//     // Handle user registration
//     registerForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const username = document.getElementById('register-username').value;
//         const email = document.getElementById('register-email').value;
//         const password = document.getElementById('register-password').value;

//         if (username && email && password) {
//             const users = JSON.parse(localStorage.getItem('users')) || [];
//             const existingUser = users.find(user => user.username === username || user.email === email);

//             if (existingUser) {
//                 alert('Username or email already exists.');
//             } else {
//                 users.push({ username, email, password });
//                 localStorage.setItem('users', JSON.stringify(users));
//                 alert('Registration successful. You can now log in.');
//                 loginFormContainer.style.display = 'block';
//                 registerFormContainer.style.display = 'none';
//             }
//         } else {
//             alert('Please fill in all fields.');
//         }
//     });

//     // Handle user login
//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const username = document.getElementById('login-username').value;
//         const password = document.getElementById('login-password').value;

//         const users = JSON.parse(localStorage.getItem('users')) || [];
//         const user = users.find(user => user.username === username && user.password === password);

//         if (user) {
//             alert('Login successful!');
//             loginFormContainer.style.display = 'none';
//             registerFormContainer.style.display = 'none';
//             postContainer.style.display = 'block';
//         } else {
//             alert('Invalid username or password.');
//         }
//     });
// });


// Activity 3: User Profiles

// Task 5: Create a user profile page that displays the logged-in user's information, including their username, email, and a profile picture. Allow users to

// update their profile information.

// Task 6: Write a script to handle updating the user profile information and saving the changes to localStorage or sessionStorage.


// document.addEventListener('DOMContentLoaded', () => {
//     const profileContainer = document.getElementById('profile-container');
//     const profileForm = document.getElementById('profile-form');
//     const profileUsername = document.getElementById('profile-username');
//     const profileEmail = document.getElementById('profile-email');
//     const profilePicture = document.getElementById('profile-picture');

//     const showProfilePage = () => {
//         const user = JSON.parse(localStorage.getItem('currentUser'));

//         if (user) {
//             profileUsername.value = user.username;
//             profileEmail.value = user.email;
//             profilePicture.value = user.profilePicture || '';
//             profileContainer.style.display = 'block';
//         }
//     };

//     // Display profile page if user is logged in
//     showProfilePage();

//     // Handle profile update
//     profileForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const updatedUser = {
//             username: profileUsername.value,
//             email: profileEmail.value,
//             profilePicture: profilePicture.value
//         };

//         localStorage.setItem('currentUser', JSON.stringify(updatedUser));
//         alert('Profile updated successfully!');
//     });

//     // Example to log in a user and set profile for demo purposes
//     const loginForm = document.getElementById('login-form');
//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const username = document.getElementById('login-username').value;
//         const password = document.getElementById('login-password').value;

//         const users = JSON.parse(localStorage.getItem('users')) || [];
//         const user = users.find(user => user.username === username && user.password === password);

//         if (user) {
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             profileContainer.style.display = 'block';
//         } else {
//             alert('Invalid username or password.');
//         }
//     });
// });


// Activity 4: Creating and Displaying Posts

// Task 7: Add a form to the HTML structure with fields for entering post details (e.g., text, image). Style the form using CSS.

// Task 8: Write a script to handle form submission, creating a new post object and adding it to an array of posts. Display the new post in the feed, including the username of the logged-in user.

// document.addEventListener('DOMContentLoaded', () => {
//     const postForm = document.getElementById('post-form');
//     const postText = document.getElementById('post-text');
//     const postImage = document.getElementById('post-image');
//     const postFeed = document.getElementById('post-feed');
//     const postContainer = document.getElementById('post-container');

//     const displayPosts = () => {
//         const posts = JSON.parse(localStorage.getItem('posts')) || [];
//         postFeed.innerHTML = '';

//         posts.forEach(post => {
//             const postElement = document.createElement('div');
//             postElement.className = 'post';
//             postElement.innerHTML = `
//                 <p><strong>${post.username}</strong> - ${new Date(post.timestamp).toLocaleString()}</p>
//                 <p class="post-text">${post.text}</p>
//                 ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
//             `;
//             postFeed.appendChild(postElement);
//         });
//     };

//     // Display posts when the page loads
//     displayPosts();

//     // Handle new post submission
//     postForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const user = JSON.parse(localStorage.getItem('currentUser'));

//         if (!user) {
//             alert('You need to log in to create a post.');
//             return;
//         }

//         const newPost = {
//             username: user.username,
//             text: postText.value,
//             image: postImage.value,
//             timestamp: new Date().toISOString()
//         };

//         const posts = JSON.parse(localStorage.getItem('posts')) || [];
//         posts.push(newPost);
//         localStorage.setItem('posts', JSON.stringify(posts));

//         postText.value = '';
//         postImage.value = '';

//         displayPosts();
//     });

//     // Example to show the post container after login
//     const loginForm = document.getElementById('login-form');
//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const username = document.getElementById('login-username').value;
//         const password = document.getElementById('login-password').value;

//         const users = JSON.parse(localStorage.getItem('users')) || [];
//         const user = users.find(user => user.username === username && user.password === password);

//         if (user) {
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             postContainer.style.display = 'block';
//             displayPosts();
//         } else {
//             alert('Invalid username or password.');
//         }
//     });
// });


// Activity 5: Post Interactions

// Task 9: Add "Like" and "Comment" buttons to each post. Write functions to handle liking a post and adding comments to a post.

// Task 10: Display the number of likes and comments for each post. Update the display when users interact with the posts.

// document.addEventListener('DOMContentLoaded', () => {
//     const postForm = document.getElementById('post-form');
//     const postText = document.getElementById('post-text');
//     const postImage = document.getElementById('post-image');
//     const postFeed = document.getElementById('post-feed');
//     const postContainer = document.getElementById('post-container');

//     const displayPosts = () => {
//         const posts = JSON.parse(localStorage.getItem('posts')) || [];
//         postFeed.innerHTML = '';

//         posts.forEach((post, index) => {
//             const postElement = document.createElement('div');
//             postElement.className = 'post';
//             postElement.innerHTML = `
//                 <p><strong>${post.username}</strong> - ${new Date(post.timestamp).toLocaleString()}</p>
//                 <p class="post-text">${post.text}</p>
//                 ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
//                 <div class="post-actions">
//                     <button class="like-button" data-index="${index}">Like (${post.likes || 0})</button>
//                     <button class="comment-button" data-index="${index}">Comment (${post.comments ? post.comments.length : 0})</button>
//                 </div>
//                 <div class="comments-container" id="comments-${index}" style="display: none;">
//                     ${post.comments ? post.comments.map(comment => `<p>${comment}</p>`).join('') : ''}
//                     <textarea class="comment-input" placeholder="Add a comment"></textarea>
//                     <button class="add-comment-button" data-index="${index}">Add Comment</button>
//                 </div>
//             `;
//             postFeed.appendChild(postElement);
//         });

//         // Add event listeners for Like and Comment buttons
//         document.querySelectorAll('.like-button').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 handleLike(index);
//             });
//         });

//         document.querySelectorAll('.comment-button').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 toggleComments(index);
//             });
//         });

//         document.querySelectorAll('.add-comment-button').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 addComment(index);
//             });
//         });
//     };

//     const handleLike = (index) => {
//         const posts = JSON.parse(localStorage.getItem('posts')) || [];
//         posts[index].likes = (posts[index].likes || 0) + 1;
//         localStorage.setItem('posts', JSON.stringify(posts));
//         displayPosts();
//     };

//     const toggleComments = (index) => {
//         const commentsContainer = document.getElementById(`comments-${index}`);
//         commentsContainer.style.display = commentsContainer.style.display === 'none' ? 'block' : 'none';
//     };

//     const addComment = (index) => {
//         const commentInput = document.querySelector(`#comments-${index} .comment-input`);
//         const newComment = commentInput.value.trim();
//         if (newComment) {
//             const posts = JSON.parse(localStorage.getItem('posts')) || [];
//             posts[index].comments = posts[index].comments || [];
//             posts[index].comments.push(newComment);
//             localStorage.setItem('posts', JSON.stringify(posts));
//             commentInput.value = '';
//             displayPosts();
//         }
//     };

//     // Display posts when the page loads
//     displayPosts();

//     // Handle new post submission
//     postForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const user = JSON.parse(localStorage.getItem('currentUser'));

//         if (!user) {
//             alert('You need to log in to create a post.');
//             return;
//         }

//         const newPost = {
//             username: user.username,
//             text: postText.value,
//             image: postImage.value,
//             timestamp: new Date().toISOString(),
//             likes: 0,
//             comments: []
//         };

//         const posts = JSON.parse(localStorage.getItem('posts')) || [];
//         posts.push(newPost);
//         localStorage.setItem('posts', JSON.stringify(posts));

//         postText.value = '';
//         postImage.value = '';

//         displayPosts();
//     });

//     // Example to show the post container after login
//     const loginForm = document.getElementById('login-form');
//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const username = document.getElementById('login-username').value;
//         const password = document.getElementById('login-password').value;

//         const users = JSON.parse(localStorage.getItem('users')) || [];
//         const user = users.find(user => user.username === username && user.password === password);

//         if (user) {
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             postContainer.style.display = 'block';
//             displayPosts();
//         } else {
//             alert('Invalid username or password.');
//         }
//     });
// });


// Activity 6: Notifications

// Task 11: Implement a simple notification system that alerts users when they receive a new like or comment on their posts. Display notifications in a sidebar.

// Task 12: Write a script to handle generating and displaying notifications based on user interactions.


// document.addEventListener('DOMContentLoaded', () => {
//     const postFeed = document.getElementById('post-feed');
//     const notificationList = document.getElementById('notification-list');

//     const displayPosts = () => {
//         const posts = JSON.parse(localStorage.getItem('posts')) || [];
//         postFeed.innerHTML = '';

//         posts.forEach((post, index) => {
//             const postElement = document.createElement('div');
//             postElement.className = 'post';
//             postElement.innerHTML = `
//                 <p><strong>${post.username}</strong> - ${new Date(post.timestamp).toLocaleString()}</p>
//                 <p class="post-text">${post.text}</p>
//                 ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
//                 <div class="post-actions">
//                     <button class="like-button" data-index="${index}">Like (${post.likes || 0})</button>
//                     <button class="comment-button" data-index="${index}">Comment (${post.comments ? post.comments.length : 0})</button>
//                 </div>
//                 <div class="comments-container" id="comments-${index}" style="display: none;">
//                     ${post.comments ? post.comments.map(comment => `<p>${comment}</p>`).join('') : ''}
//                     <textarea class="comment-input" placeholder="Add a comment"></textarea>
//                     <button class="add-comment-button" data-index="${index}">Add Comment</button>
//                 </div>
//             `;
//             postFeed.appendChild(postElement);
//         });

//         document.querySelectorAll('.like-button').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 handleLike(index);
//             });
//         });

//         document.querySelectorAll('.comment-button').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 toggleComments(index);
//             });
//         });

//         document.querySelectorAll('.add-comment-button').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 addComment(index);
//             });
//         });
//     };

//     const handleLike = (index) => {
//         const posts = JSON.parse(localStorage.getItem('posts')) || [];
//         posts[index].likes = (posts[index].likes || 0) + 1;
//         localStorage.setItem('posts', JSON.stringify(posts));
//         displayPosts();
//         generateNotification(`Your post was liked by someone!`, 'like');
//     };

//     const toggleComments = (index) => {
//         const commentsContainer = document.getElementById(`comments-${index}`);
//         commentsContainer.style.display = commentsContainer.style.display === 'none' ? 'block' : 'none';
//     };

//     const addComment = (index) => {
//         const commentInput = document.querySelector(`#comments-${index} .comment-input`);
//         const newComment = commentInput.value.trim();
//         if (newComment) {
//             const posts = JSON.parse(localStorage.getItem('posts')) || [];
//             posts[index].comments = posts[index].comments || [];
//             posts[index].comments.push(newComment);
//             localStorage.setItem('posts', JSON.stringify(posts));
//             commentInput.value = '';
//             displayPosts();
//             generateNotification(`Your post received a new comment!`, 'comment');
//         }
//     };

//     const generateNotification = (message, type) => {
//         const notificationItem = document.createElement('li');
//         notificationItem.className = type;
//         notificationItem.textContent = message;
//         notificationList.prepend(notificationItem);

//         // Remove the notification after 5 seconds
//         setTimeout(() => {
//             notificationItem.remove();
//         }, 5000);
//     };

//     displayPosts();
// });


// Activity 7: Enhancing the Ul

// Task 13: Add CSS styles to differentiate posts by different users. Display the logged-in user's posts with a distinct style.

// Task 14: Add CSS animations or transitions to make the social media dashboard more interactive and visually appealing.


const generateNotification = (message, type) => {
    const notificationItem = document.createElement('li');
    notificationItem.className = type;
    notificationItem.textContent = message;
    notificationList.prepend(notificationItem);

    // Add show class to trigger CSS transition
    setTimeout(() => {
        notificationItem.classList.add('show');
    }, 100);

    // Remove the notification after 5 seconds
    setTimeout(() => {
        notificationItem.classList.remove('show');
        setTimeout(() => {
            notificationItem.remove();
        }, 300); // Wait for the fade-out animation to finish
    }, 5000);
};
