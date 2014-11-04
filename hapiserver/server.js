var Hapi = require('hapi');
var routes = require("./routes/routes.js");


var server = hapi.server(+process.env.PORT, '0.0.0.0', {

        cors: true,
        debug: {
            request: ['error']
        }
    });

var dbOpts = {
    "url": "mongodb://kodeIV:koders4lyf@dogen.mongohq.com:10005/Todo",
    "settings": {
        "db": {
            "native_parser": false
        }
    }