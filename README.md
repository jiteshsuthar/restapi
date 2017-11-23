# ReST API
Simple ReST API using nodejs + nedb

# Prerequisties 
    nodejs
 
    Download Link
    https://nodejs.org/en/download/
    
    Local shared Link
    \\LENOVO15\shared

	

# Begin
* Install node-modules using npm command from home directory.

		npm install
    
* Start server
		
		node server.js
    
# REST Verbs
* GET
		
      Get all contacts
          
          http://localhost:3000/api/contacts

      Get details of specific user
          
          http://localhost:3000/api/contacts/Jitesh

* POST

      Request body with add contact details in JSON format e.g.
        {
          "name":"Jitesh",
          "email":"jiteshsuthar@credenceanalytics.com",
          "phoneNumber":"9876543210",
          "street":"Mumbai",
          "city":"Mumbai",
          "state":"Maharashtra"
        }

      Send the above request body in following URL.
        
        http://localhost:3000/api/contacts

* PUT

      Request body with update street details in JSON format e.g.
        {
          "name":"Jitesh",
          "email":"jiteshsuthar@credenceanalytics.com",
          "phoneNumber":"9876543210",
          "street":"Lower-Parel",
          "city":"Mumbai",
          "state":"Maharashtra"
        }

      Send the above request body in following URL.
		    
        http://localhost:3000/api/contacts


* DELETE

      Remove/Delete a specific user
        
        http://localhost:3000/api/contacts/Jitesh
