require('dotenv').load();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const usersController = require('./usersController');
app.use(bodyParser.json());


/*	
	Server Listening on Port specified in env file
 */
app.listen(process.env.PORT,function(){
  console.log("Listening to Port "+process.env.PORT);
});


/*  "/api/contacts"
 *	GET: finds all contacts
 */
app.route('/api/contacts').get(usersController.getUsers);

/*  "/api/contacts" 
 *	POST: creates a new contact
 */
app.route('/api/contacts').post(usersController.createUser);

/*	"/api/contacts/:name"
 *	GET: find contact by name
*/
app.route('/api/contacts/:name').get(usersController.getUser);

/*  "/api/contacts/:name"
 *    PUT: update contact by name
 */
app.route('/api/contacts/:name').put(usersController.updateUser);


/*  "/api/contacts/:name"
 *    DELETE: deletes contact by name
 */
app.route('/api/contacts/:name').delete(usersController.deleteUser);