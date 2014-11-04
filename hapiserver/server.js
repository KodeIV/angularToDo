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

pack.register(
    {
        plugin:require('hapi-mongodb'), 
        options: dbOpts
    },
    function(err){
        if (err){
            onsole.log(err);
            throw err;
        }
    });

if(!module.parent){
    pack.start(function(){
        console.log("hapi server started @", server.info.uri);
    });
}

server.route(routes)