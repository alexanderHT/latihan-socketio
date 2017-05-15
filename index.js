var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3007);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

  // send msg to clinet
  socket.emit('index', "data dari server di kirim ke client");

  // get message from client
  socket.on('server', function (data) {
    console.log(data);
  });

});
