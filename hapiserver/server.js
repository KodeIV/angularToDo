var Hapi = require('hapi');
var routes = require("./routes/routes.js");

var server = hapi.server(+process.env.PORT, '0.0.0.0', {

        cors: true,
        debug: {
            request: ['error']
        }
    });

var dbOpts = {
    "url": "<<mongo url here>>",
    "settings": {
        "db": {
            "native_parser": false
        }
    }