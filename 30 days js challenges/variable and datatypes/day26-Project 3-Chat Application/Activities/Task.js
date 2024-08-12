// Activity 1: Setting Up the Project

// Task 1: Initialize a new project directory and set up the basic HTML structure for the chat application.

// Task 2: Add a basic CSS file to style the chat application, including a chat window and input area.


// Activity 2: Setting Up WebSocket Server

// • Task 3: Set up a simple WebSocket server using Node.js and the ws library. Write a script to create the server and handle connections.

// Task 4: Test the WebSocket server by logging messages when clients connect and disconnect.

// npm init -y
// npm install ws


// Activity 3: Establishing WebSocket Connection

// Task 5: Add a script to the HTML file to establish a WebSocket connection to the server.

// Task 6: Write functions to handle sending and receiving messages through the WebSocket connection. Log received messages to the console.

// Activity 4: Building the Chat Interface

// Task 7: Modify the HTML structure to include a chat window and an input area for typing messages. Style the chat window and input area using CSS.

// Task 8: Write a function to display received messages in the chat window. Add event listeners to send messages when the user presses Enter or clicks a send button.
// ### **Task 7: Modify the HTML Structure and Style the Chat Window and Input Area**

// First, update your HTML structure to include a chat window and an input area. Then, add CSS to style these elements for a better user experience.

// 1. **Update `test-websocket.html`**:

//    ```html
//    <!-- test-websocket.html -->
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>WebSocket Chat Application</title>
//        <style>
//            body {
//                font-family: Arial, sans-serif;
//                display: flex;
//                flex-direction: column;
//                align-items: center;
//                justify-content: center;
//                height: 100vh;
//                margin: 0;
//                background-color: #f4f4f4;
//            }
//            .chat-container {
//                width: 400px;
//                max-width: 100%;
//                border: 1px solid #ddd;
//                border-radius: 8px;
//                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                background-color: #fff;
//                display: flex;
//                flex-direction: column;
//                height: 500px;
//            }
//            .chat-window {
//                flex: 1;
//                padding: 10px;
//                overflow-y: auto;
//                border-bottom: 1px solid #ddd;
//            }
//            .chat-window div {
//                margin-bottom: 10px;
//            }
//            .input-area {
//                display: flex;
//                border-top: 1px solid #ddd;
//            }
//            #message-input {
//                flex: 1;
//                border: none;
//                padding: 10px;
//                border-radius: 4px 0 0 4px;
//                font-size: 16px;
//            }
//            #send-button {
//                background-color: #007bff;
//                color: white;
//                border: none;
//                padding: 10px;
//                border-radius: 0 4px 4px 0;
//                cursor: pointer;
//                font-size: 16px;
//            }
//            #send-button:hover {
//                background-color: #0056b3;
//            }
//        </style>
//    </head>
//    <body>
//        <div class="chat-container">
//            <div class="chat-window" id="chat-window"></div>
//            <div class="input-area">
//                <input type="text" id="message-input" placeholder="Type your message...">
//                <button id="send-button">Send</button>
//            </div>
//        </div>

//        <script>
//            // JavaScript code for WebSocket connection and message handling
//        </script>
//    </body>
//    </html>
//    ```

// ### **Task 8: Write Functions to Display Received Messages and Handle Sending Messages**

// Update the `<script>` section in `test-websocket.html` to handle message sending and receiving.

// 1. **Add JavaScript to Handle WebSocket and Messages**:

//    ```html
//    <script>
//        const chatWindow = document.getElementById('chat-window');
//        const messageInput = document.getElementById('message-input');
//        const sendButton = document.getElementById('send-button');

//        // Establish WebSocket connection
//        const ws = new WebSocket('ws://localhost:8080');

//        // Handle connection open event
//        ws.onopen = () => {
//            console.log('Connected to WebSocket server');
//        };

//        // Handle incoming messages
//        ws.onmessage = (event) => {
//            displayMessage(`Server: ${event.data}`);
//        };

//        // Handle connection close event
//        ws.onclose = () => {
//            console.log('Disconnected from WebSocket server');
//        };

//        // Handle WebSocket errors
//        ws.onerror = (error) => {
//            console.error(`WebSocket error: ${error.message}`);
//        };

//        // Send message on button click
//        sendButton.addEventListener('click', () => {
//            sendMessage();
//        });

//        // Send message on Enter key press
//        messageInput.addEventListener('keypress', (event) => {
//            if (event.key === 'Enter') {
//                sendMessage();
//            }
//        });

//        // Function to send a message
//        function sendMessage() {
//            const message = messageInput.value;
//            if (message) {
//                ws.send(message);
//                displayMessage(`You: ${message}`);
//                messageInput.value = '';
//            }
//        }

//        // Function to display a message in the chat window
//        function displayMessage(message) {
//            const messageElement = document.createElement('div');
//            messageElement.textContent = message;
//            chatWindow.appendChild(messageElement);
//            chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
//        }
//    </script>
//    ```

// ### **Summary**

// - **HTML**: Added a `chat-window` for displaying messages and an `input-area` for typing and sending messages.
// - **CSS**: Styled the chat window and input area to create a clean and user-friendly chat interface.
// - **JavaScript**:
//   - Established a WebSocket connection.
//   - Handled sending and receiving messages.
//   - Displayed messages in the chat window.
//   - Added event listeners to send messages on button click or Enter key press.

// With these updates, your chat application will have a functional user interface and allow users to interact via WebSocket. If you have any further questions or need additional features, feel free to ask!


// Activity 5: Enhancing the Chat Application

// Task 9: Add user authentication to the chat application. Allow users to enter a username before joining the chat. Display usernames alongside their messages in the chat window.

// Task 10: Add CSS styles to differentiate messages sent by different users. Add CSS animations or transitions to make the chat application more interactive and visually appealing.

