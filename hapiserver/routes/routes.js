var handlers = require("../handlers/handlers.js");

module.exports = [
	{
		path: '/',
	    method: 'GET',
	    handler: handlers.viewToDos

	},

	{
		path: '/addnew',
	    method: 'PUSH',
	    handler: handlers.submitNew
	},

	{
		path: '/edit',
	    method: 'PUT',
	    handler: handlers.submitEdit
	},

	{
		path: '/delete',
	    method: 'DELETE',
	    handler: handlers.submitDelete
	}

];
