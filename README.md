# centivo-test

This is a simple API to get a user record by id.  The API responds with a 404 if there are no records with the provided ID or if the user has an age <= 21. The API responds with 400 if the provided id is not a well formed Mongo ObjectId.

The only external libraries used are [Express](https://www.npmjs.com/package/express) and [MongoDB](https://www.npmjs.com/package/mongodb).

Routing is setup in users-route.ts and all user management handled within user-service.ts. If additional tables from the database needed to be used, I would refactor user-service.ts and separate the user management from the database connection.

Application settings such as port number, database connection string, and database name are all in app.ts. In a production application, these would be stored and read from environment variables.