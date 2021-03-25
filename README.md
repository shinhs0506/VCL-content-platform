# VCL-documentation-web-app
Asynchronous documentation web-app built by a subset of Correlation. Features a timeline to document tribal knowledge within our teams.
## Contributor Setup
1. I recommend having two terminals open: one in the client directory, and one in the server directory.
2. Run `npm install` in both directories.
3. Create a file named `.env` in the server directory and copy the following:

```
ATLAS_URI=mongodb+srv://<username>:<password>@vcl-documentation-app.gcjzz.mongodb.net/VCL-Documentation-App?retryWrites=true&w=majority
```
4. Please replace `<username>` and `<password>` with your username and password from your database user from MongoDB.

To create a database user, navigate to the project "Documentation Web-app" on MongoDB. Then navigate to the "Database Access" tab, and click "Add new database user". 

Note to not use a password that you would normally use with other apps.

5. To start the app locally, run `npm start` in the client directory, and run `node index.js` in the backend directory. Feel free to use nodemon as well :)
