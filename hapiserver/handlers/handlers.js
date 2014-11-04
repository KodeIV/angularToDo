var mongodb = require('mongodb');


module.exports = {

     viewToDos: function (request, reply) {
         var doc;
         var db = request.server.plugins['hapi-mongodb'].db;

         db.collection('<<insert collection name>>')
              .find()

              .sort({"_id": -1 }).limit(6)
              .toArray(function(err, docs) {

                reply.view("blogfront", {
                    "author" : docs
                });
             });

	   },

    newToDo: function(request, reply) {

     },

     submitNew: function(request, reply) {

     },

     makeEdit: function(request, reply) {

     },

     submitEdit: function(request, reply) {

     },

     deleteToDo: function(request, reply) {

     },

     submitDelete: function(request, reply) {

     }

  };
