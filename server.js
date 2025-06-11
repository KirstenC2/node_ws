const WebSocket = require('ws');
const handleSocket = require('./socket');

const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', handleSocket);

console.log('WebSocket server is running on ws://localhost:8080');
