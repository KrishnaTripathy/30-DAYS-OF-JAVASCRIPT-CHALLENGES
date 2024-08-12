// server.js

const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server running\n');
});

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('A new client connected');
    
    // Send a welcome message to the client
    ws.send('Welcome to the chat server!');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        
        // Broadcast the message to all clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('A client disconnected');
    });
});

// Start the HTTP server
server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
