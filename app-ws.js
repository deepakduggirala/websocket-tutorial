const ws = require('ws');

const wss = new ws.Server({
  noServer: true
});

wss.on('close', () => console.log());
wss.on('connection', (socket, req) => {
  socket.on('close', (code, reason) => {});
  socket.on('error', error => {});
  socket.on('message', data => {});
  socket.on('open', () => {});
  socket.on('ping', data => {});
});
wss.on('error', error => {});
wss.on('headers', (headers, request) => {});
wss.on('listening', () => console.log());

module.exports = wss;