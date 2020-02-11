var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
    port: 9000,
    path: '/peerjs',
    ssl: {
        key: fs.readFileSync('/etc/letsencrypt/live/peer.senuraa.com/privkey.pem', 'utf8'),
        cert: fs.readFileSync('/etc/letsencrypt/live/peer.senuraa.com/fullchain.pem', 'utf8')
    }
});