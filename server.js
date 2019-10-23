const express = require('express')
const app = express()
const httpServer = require('http').createServer(app);


const socketIOServer = require('socket.io')(httpServer);

// This will be called when any new client is connected to server
socketIOServer.on('connection', function(clientSocket){

    console.log('A New client connected');

    clientSocket.emit('message-from-server', {'message-type': 'Welcome to Websockets!'});

});

// Send Time of Server every three seconds
function sendTime(){
    console.log('SENDING NEXT MESSAGE');
    socketIOServer.emit('message-from-server', {'message-type': 'time', 'content': new Date()})
}

setInterval(sendTime, 3*1000);

const port = 3000;

// Root Path for all static files - HTML/CSS/JS
app.use(express.static('frontend'));

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/views/index.html'))

httpServer.listen(port, () => console.log(`Example app listening on port ${port}!`))