﻿/***** Node Server *****/
console.log("/***** Node Server *****/");
// Module dependencies.
var express = require('express');
var httpProxy = require('http-proxy');
var bodyParser = require('body-parser');

var apiForwardingUrl = 'https://appcard.com/api/users/token'; //// TODO add end of path depending on api

var proxyOptions = {
    changeOrigin: true
};

httpProxy.prototype.onError = function (err) {
    console.log('@@@@@@@@@@@ httpProxy.prototype.onError (node server) error @@@@@@@@@@@ index.js');
    console.log(err);
};

var apiProxy = httpProxy.createProxyServer(proxyOptions);

console.log('Forwarding API requests to ' + apiForwardingUrl);

// Node express server setup.
var server = express();
server.set('port', 3000);
server.use(express.static(__dirname)); //__dirname + '/app')

server.all("/proxy_path/*", function (req, res) {
    console.dir("@@@@@@@@@@@@ req obj ==" + req);
    console.dir("@@@@@@@@@@@@ res obj ==" + res);

    apiProxy.web(req, res, { target: apiForwardingUrl });
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

// Start Server.
server.listen(server.get('port'), function () {
    console.log('Express server listening on port ' + server.get('port'));
});