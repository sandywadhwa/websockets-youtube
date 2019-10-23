$("document").ready(function() {
    
    var clientSocket = io('localhost:3000');

    // Start Listening to Server Messages
    clientSocket.on('message-from-server', function(msg){
        console.log("MSG: "+JSON.stringify(msg));


        $('#timeFromServer').text(msg.content);

    });
    
});