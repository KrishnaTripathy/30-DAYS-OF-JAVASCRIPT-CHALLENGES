// Activity 1: Setting Up the Project

// Task 1: Initialize a new project directory and set up the basic HTML, structure for the social media dashboard.

// Task 2: Add a basic CSS file to style the social media dashboard, including a container for posts and a form for creating new posts.

// Activity 2: User Authentication

// Task 3: Create a simple login form that collects a username and password. Style the form using CSS.

// Task 4: Write a script to handle user login and store the logged-in user's information in localStorage or sessionStorage.


// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('login-form');
    
//     loginForm.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the form from submitting the default way
        
//         const username = document.getElementById('username').value;
//         const password = document.getElementById('password').value;
        
//         // Simple validation (you can expand this)
//         if (username && password) {
//             // Store user info in localStorage (or sessionStorage)
//             localStorage.setItem('loggedInUser', JSON.stringify({ username, password }));
            
//             // Optionally redirect to another page
//             alert('Login successful!');
//             // window.location.href = 'dashboard.html'; // Example redirect
//         } else {
//             alert('Please fill in both fields.');
//         }
//     });
// });


// Activity 3: Creating Posts

// Task 5: Add a form to the HTML structure with fields for entering post details (e.g., text, image). Style the form using CSS.

// Task 6: Write a script to handle form submission, creating a new post object and adding it to an array of posts. Display the new post in the feed.

// document.addEventListener('DOMContentLoaded', () => {
//     const postForm = document.getElementById('create-post-form');
//     const postContainer = document.getElementById('post-container');
    
//     // Load existing posts from localStorage if available
//     let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
//     // Function to display posts
//     function displayPosts() {
//         postContainer.innerHTML = ''; // Clear existing posts
//         posts.forEach(post => {
//             const postElement = document.createElement('div');
//             postElement.classList.add('post');
//             postElement.innerHTML = `
//                 <p>${post.text}</p>
//                 ${post.image ? `<img src="${post.image}" alt="Post Image" style="max-width: 100%; border-radius: 5px;">` : ''}
//             `;
//             postContainer.appendChild(postElement);
//         });
//     }
    
//     // Initial display of posts
//     displayPosts();
    
//     postForm.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const postText = document.getElementById('post-text').value;
//         const postImage = document.getElementById('post-image').value;
        
//         if (postText) {
//             const newPost = {
//                 text: postText,
//                 image: postImage || null
//             };
            
//             posts.push(newPost);
//             localStorage.setItem('posts', JSON.stringify(posts));
            
//             // Reset the form
//             postForm.reset();
            
//             // Display the new post
//             displayPosts();
//         } else {
//             alert('Please enter some text for the post.');
//         }
//     });
// });


// Activity 4: Displaying Posts

// Task 7: Write a function to iterate over the array of posts and display each post in the feed. Include post details like text, image, username, and timestamp.

// Task 8: Style the post feed using CSS to make it visually appealing.


// document.addEventListener('DOMContentLoaded', () => {
//     const postForm = document.getElementById('create-post-form');
//     const postContainer = document.getElementById('post-container');
    
//     // Load existing posts from localStorage if available
//     let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
//     // Function to display posts
//     function displayPosts() {
//         postContainer.innerHTML = ''; // Clear existing posts
        
//         posts.forEach(post => {
//             const postElement = document.createElement('div');
//             postElement.classList.add('post');
            
//             const postHTML = `
//                 <div class="post-header">
//                     <strong>${post.username || 'Anonymous'}</strong>
//                     <span class="timestamp">${new Date(post.timestamp).toLocaleString()}</span>
//                 </div>
//                 <p>${post.text}</p>
//                 ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
//             `;
            
//             postElement.innerHTML = postHTML;
//             postContainer.appendChild(postElement);
//         });
//     }
    
//     // Initial display of posts
//     displayPosts();
    
//     postForm.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const postText = document.getElementById('post-text').value;
//         const postImage = document.getElementById('post-image').value;
        
//         // Replace with username and timestamp
//         const postUsername = 'User'; // Replace with actual username
//         const postTimestamp = new Date().toISOString();
        
//         if (postText) {
//             const newPost = {
//                 text: postText,
//                 image: postImage || null,
//                 username: postUsername,
//                 timestamp: postTimestamp
//             };
            
//             posts.push(newPost);
//             localStorage.setItem('posts', JSON.stringify(posts));
            
//             // Reset the form
//             postForm.reset();
            
//             // Display the new post
//             displayPosts();
//         } else {
//             alert('Please enter some text for the post.');
//         }
//     });
// });

// Activity 5: Post Interactions

// Task 9: Add "Like" and "Comment" buttons to each post. Write functions to handle liking a post and adding comments to a post.

// Task 10: Display the number of likes and comments for each post. Update the display when users interact with the posts.

// document.addEventListener('DOMContentLoaded', () => {
//     const postForm = document.getElementById('create-post-form');
//     const postContainer = document.getElementById('post-container');
    
//     // Load existing posts from localStorage if available
//     let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
//     // Function to display posts
//     function displayPosts() {
//         postContainer.innerHTML = ''; // Clear existing posts
        
//         posts.forEach((post, index) => {
//             const postElement = document.createElement('div');
//             postElement.classList.add('post');
            
//             const postHTML = `
//                 <div class="post-header">
//                     <strong>${post.username || 'Anonymous'}</strong>
//                     <span class="timestamp">${new Date(post.timestamp).toLocaleString()}</span>
//                 </div>
//                 <p>${post.text}</p>
//                 ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
//                 <div class="post-interactions">
//                     <button class="like-button" data-index="${index}">Like (${post.likes || 0})</button>
//                     <button class="comment-button" data-index="${index}">Comment (${post.comments ? post.comments.length : 0})</button>
//                     <div class="comments-list">
//                         ${post.comments ? post.comments.map(comment => `<p>${comment}</p>`).join('') : ''}
//                     </div>
//                     <div class="comment-form" style="display: none;">
//                         <textarea class="comment-text" placeholder="Write a comment..."></textarea>
//                         <button class="submit-comment-button" data-index="${index}">Submit</button>
//                     </div>
//                 </div>
//             `;
            
//             postElement.innerHTML = postHTML;
//             postContainer.appendChild(postElement);
//         });
        
//         // Add event listeners for like and comment buttons
//         document.querySelectorAll('.like-button').forEach(button => {
//             button.addEventListener('click', handleLike);
//         });
        
//         document.querySelectorAll('.comment-button').forEach(button => {
//             button.addEventListener('click', handleCommentToggle);
//         });
        
//         document.querySelectorAll('.submit-comment-button').forEach(button => {
//             button.addEventListener('click', handleCommentSubmit);
//         });
//     }
    
//     function handleLike(event) {
//         const index = event.target.dataset.index;
//         posts[index].likes = (posts[index].likes || 0) + 1;
//         localStorage.setItem('posts', JSON.stringify(posts));
//         displayPosts();
//     }
    
//     function handleCommentToggle(event) {
//         const index = event.target.dataset.index;
//         const commentForm = event.target.closest('.post-interactions').querySelector('.comment-form');
//         commentForm.style.display = commentForm.style.display === 'none' ? 'block' : 'none';
//     }
    
//     function handleCommentSubmit(event) {
//         const index = event.target.dataset.index;
//         const commentText = event.target.closest('.post-interactions').querySelector('.comment-text').value;
        
//         if (commentText) {
//             if (!posts[index].comments) {
//                 posts[index].comments = [];
//             }
//             posts[index].comments.push(commentText);
//             localStorage.setItem('posts', JSON.stringify(posts));
//             displayPosts();
//         } else {
//             alert('Please enter a comment.');
//         }
//     }
    
//     // Initial display of posts
//     displayPosts();
    
//     postForm.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const postText = document.getElementById('post-text').value;
//         const postImage = document.getElementById('post-image').value;
        
//         // Replace with username and timestamp
//         const postUsername = 'User'; // Replace with actual username
//         const postTimestamp = new Date().toISOString();
        
//         if (postText) {
//             const newPost = {
//                 text: postText,
//                 image: postImage || null,
//                 username: postUsername,
//                 timestamp: postTimestamp,
//                 likes: 0,
//                 comments: []
//             };
            
//             posts.push(newPost);
//             localStorage.setItem('posts', JSON.stringify(posts));
            
//             // Reset the form
//             postForm.reset();
            
//             // Display the new post
//             displayPosts();
//         } else {
//             alert('Please enter some text for the post.');
//         }
//     });
// });


// Activity 6: Enhancing the Ul

// Task 11: Add CSS styles to differentiate posts by different users. Display the logged-in user's posts with a distinct style. Task 12: Add CSS animations or transitions to make the social media dashboard more interactive and visually appealing

document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('create-post-form');
    const postContainer = document.getElementById('post-container');
    
    // Example: Set the logged-in username
    const loggedInUsername = 'User'; // Replace with actual logged-in user

    // Load existing posts from localStorage if available
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    // Function to display posts
    function displayPosts() {
        postContainer.innerHTML = ''; // Clear existing posts
        
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            
            // Apply a class for posts by the logged-in user
            if (post.username === loggedInUsername) {
                postElement.classList.add('user-post');
            }
            
            const postHTML = `
                <div class="post-header">
                    <strong>${post.username || 'Anonymous'}</strong>
                    <span class="timestamp">${new Date(post.timestamp).toLocaleString()}</span>
                </div>
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <div class="post-interactions">
                    <button class="like-button" data-index="${index}">Like (${post.likes || 0})</button>
                    <button class="comment-button" data-index="${index}">Comment (${post.comments ? post.comments.length : 0})</button>
                    <div class="comments-list">
                        ${post.comments ? post.comments.map(comment => `<p>${comment}</p>`).join('') : ''}
                    </div>
                    <div class="comment-form" style="display: none;">
                        <textarea class="comment-text" placeholder="Write a comment..."></textarea>
                        <button class="submit-comment-button" data-index="${index}">Submit</button>
                    </div>
                </div>
            `;
            
            postElement.innerHTML = postHTML;
            postContainer.appendChild(postElement);
        });
        
        // Add event listeners for like and comment buttons
        document.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', handleLike);
        });
        
        document.querySelectorAll('.comment-button').forEach(button => {
            button.addEventListener('click', handleCommentToggle);
        });
        
        document.querySelectorAll('.submit-comment-button').forEach(button => {
            button.addEventListener('click', handleCommentSubmit);
        });
    }

    // Functions handleLike, handleCommentToggle, handleCommentSubmit remain the same
    
    // Initial display of posts
    displayPosts();
    
    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const postText = document.getElementById('post-text').value;
        const postImage = document.getElementById('post-image').value;
        
        if (postText) {
            const newPost = {
                text: postText,
                image: postImage || null,
                username: loggedInUsername,
                timestamp: new Date().toISOString(),
                likes: 0,
                comments: []
            };
            
            posts.push(newPost);
            localStorage.setItem('posts', JSON.stringify(posts));
            
            // Reset the form
            postForm.reset();
            
            // Display the new post
            displayPosts();
        } else {
            alert('Please enter some text for the post.');
        }
    });
});
