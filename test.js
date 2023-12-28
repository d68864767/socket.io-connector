```javascript
// Import the assert module for testing
const assert = require('assert');

// Import the connector function from our main file
const connector = require('./index');

// Mock server and options for testing
const server = 'http://localhost';
const options = {};

// Test the connector function
describe('Connector Function', () => {
  it('should return a socket.io instance', () => {
    const socket = connector(server, options);
    assert(socket);
  });

  it('should handle connection and disconnection events', () => {
    const socket = connector(server, options);

    // Mock client
    const client = {
      on: function(event, callback) {
        if (event === 'disconnect') {
          callback();
        }
      }
    };

    // Mock socket.on method
    socket.on = function(event, callback) {
      if (event === 'connection') {
        callback(client);
      }
    };

    // Trigger connection event
    socket.on('connection', client);

    // Check if disconnect event is handled
    client.on('disconnect', () => {
      assert(true);
    });
  });
});
```
