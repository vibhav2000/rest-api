# rest-api
first cmd - `npm init`  
 kept mostly everything in default mode. except adding github url and author name
after this cmd, a file named package.json with all the contents asked while running the above commands are written.
 Next, we need to download express dependency with cmd-  
 
`npm install express --save` 

 This will download and save express in our system and also gets added to our package.json file
 
Next, we need nodemon,which will allow us to develop faster. It will help us to avoid restarting the server each time we make a change and will automatically refresh.

 cmd -  `npm install --save-dev nodemon` 
 
next, we need mongoose to interact with out MongoDB from express application.
 
Starting with the project, we have `index.js` as the entry point to our application.

 We are building a model which would contain data of students — name, their roll number and whether they are present or not.
Name — This is of String data type and is not a required field in the Schema. 
 Roll — This is also of String data type and is a required field. It cannot be left empty. 
Present — This is a Boolean field which defaults to true. 
