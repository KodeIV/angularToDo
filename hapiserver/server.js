// var Hapi = require('hapi');
// var routes = require("./routes/routes.js");
// //var pack = new Hapi.server();

// var server = new Hapi.Server("localhost", 8080, {

//         cors: true,
//         debug: {
//             request: ['error']
//         }
//     });

// var dbOpts = {
//     "url": "mongodb://kodeIV:koders4lyf@dogen.mongohq.com:10005/Todo",
//     "settings": {
//         "db": {
//             "native_parser": false
//         }
//     }

// server.pack.register(
//     {
//         plugin:require('hapi-mongodb'), 
//         options: dbOpts
//     },
//     function(err){
//         if (err){
//             onsole.log(err);
//             throw err;
//         }
//     });


//     server.start(function(){
//         console.log("hapi server started @", server.info.uri);
//     });


// server.route(routes)

var Hapi = require('hapi');
var routes = require("./routes/routes.js");

var server = new Hapi.Server("localhost", 8080);

var dbOpts = {
   "url": "mongodb://kodeIV:koders4lyf@dogen.mongohq.com:10005/Todo",
   "settings": {
       "db": {
           "native_parser": false
       }
   }
};

server.pack.register(
{
    plugin: require('hapi-mongodb'),
   options: dbOpts
}, function (err) {
   if (err) {
       console.error(err);
       throw err;
   }
});

server.start(function() {
   console.log("Hapi server started @ " + server.info.uri);
});

server.route(routes);

