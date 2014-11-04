var handlers = require("../handlers/handlers.js");

module.exports = [
	{
		path: '/',
	    method: 'GET',
	    handler: handlers.viewToDos

	},

	{
		path: '/addnew',
	    method: 'GET',
	    handler: handlers.newToDo
	},

	{
		path: '/addnew',
	    method: 'PUSH',
	    handler: handlers.submitNew
	},

	{
		path: '/edit',
	    method: 'GET',
	    handler: handlers.makeEdit
	},

	{
		path: '/edit',
	    method: 'PUSH',
	    handler: handlers.submitEdit
	},

	{
		path: '/delete',
	    method: 'GET',
	    handler: handlers.deleteToDo
	},

	{
		path: '/delete',
	    method: 'PUSH',
	    handler: handlers.submitDelete
	}

];
