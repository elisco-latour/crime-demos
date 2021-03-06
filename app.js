/*jshint node:true*/
// app.js
// Starts the middleware and serves static HTML files from app/

var express = require('express');
var app = express();
var http = require('http');
var request = require('request');

//-- express web server settings
app.set('title', 'crime-demos');

// set root to return the map location UI
app.use(express.static(__dirname + '/app'));
//-- end express settings

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = ('0.0.0.0' || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.PORT || 8080);
// Start server
app.listen(port, host);

require("cf-deployment-tracker-client").track();