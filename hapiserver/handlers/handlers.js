var mongodb = require('mongodb');


module.exports = {

     viewToDos: function (request, reply) {
         var doc;
         var db = request.server.plugins['hapi-mongodb'].db;

         db.collection('angularToDo')
              .find()

              .sort({"_id": -1 }).limit(6)
              .toArray(function(err, docs) {

                reply(docs);
                });
             },
	   

   

     submitNew: function(request, reply) {
         var db = request.server.plugins['hapi-mongodb'].db;
         db.collection('angularToDo').insert({
           toDo: request.payload.toDo
        },

        function(err, data) {
        reply.redirect("/");
        });

     },

     submitEdit: function(request, reply) {
        var db = request.server.plugins['hapi-mongodb'].db;
         db.collection('angularToDo').insert({
           toDo: request.payload.toDo,
           _id: request.params._id
        },

        function(err, data) {
        reply.redirect("/");
        });

     },

     submitDelete: function(request, reply) {
        var db = request.server.plugins['hapi-mongodb'].db;
        var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;

        db.collection('angularToDo').remove({"_id" : new ObjectID (request.params.id) },
         function (err, reply) {
             console.log(err);
             reply.redirect("/");
         });
     }

  };
