var mongodb = require('mongodb');


module.exports = {

     xxx: function (request, reply) {
         var doc;
         var db = request.server.plugins['hapi-mongodb'].db;

         db.collection('DevOps')
              .find()

              .sort({"_id": -1 }).limit(6)
              .toArray(function(err, docs) {

                reply.view("blogfront", {
                    "author" : docs
                });
             });

	   }

  };
