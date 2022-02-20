// Import express.js
const express = require("express");

// Create express app
var app = express();

const { Student } = require('./models/student.js');

// Create a get for root - /
app.get("/", function(req, res) {
    res.send("Hello XX!");
});

// Create a route for /goodbye
// Responds to a 'GET' request
app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

// Create a dynamic route for /hello/<name>, where name is any value provided by user
// At the end of the URL
// Responds to a 'GET' request
app.get("/hello/:name", function(req, res) {
    // req.params contains any parameters in the request
    // We can examine it in the console for debugging purposes
    // Z note: in order for this to work you do this in 
    // the chome: http://127.0.0.1:3000/hello/zilvinas
    console.log(req.params);
    //  Retrieve the 'name' parameter and use it in a dynamically generated page
    res.send("Hello " + req.params.name);
});

app.get("/test", function(req, res) {
    res.send("Welcome to the test page");
});

app.get("/", function(req, res) {

    // Instantiate a Student object using the student class definition
    var student1 = new Student();
    
    // Examine the object you have created
    console.log(student1);
    
    // Send some output to the browser - doesn't matter what it is right now
    res.send("Hello world!");
});


// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});

