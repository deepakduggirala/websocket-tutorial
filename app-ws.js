const ws = require('ws');

const wss = new ws.Server({
  noServer: true
});

wss.on('close', () => console.log('socket server closed'));
wss.on('connection', (socket, req) => {
  console.log('socket server new connection');
  // console.log(JSON.stringify(socket, null, 2));
  socket.on('close', (code, reason) => {
    console.log('socket closed', code, reason);
  });
  socket.on('error', error => {
    console.log('socket error', error);
  });
  socket.on('message', data => {
    let json_data = JSON.parse(data);
    console.log('received', json_data);
    socket.send(data);
    // socket.close();
  });
  socket.on('open', () => {
    console.log('socket opened');
  });
});
wss.on('error', error => {
  console.log('socket server error', error);
});
wss.on('headers', (headers, request) => {
  console.log('socket server headers event', headers);
});
wss.on('listening', () => console.log('socker server listening'));

module.exports = wss;