```javascript
// Import the socket.io module
const io = require('socket.io');

// Define the connector function
function connector(server, options) {
  // Create a new socket.io instance
  const socket = io(server, options);

  // Handle connection event
  socket.on('connection', (client) => {
    console.log('A client connected');

    // Handle client disconnection
    client.on('disconnect', () => {
      console.log('A client disconnected');
    });

    // You can add more event handlers here based on your needs
  });

  // Return the socket instance
  return socket;
}

// Export the connector function
module.exports = connector;
```
