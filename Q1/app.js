const express = require("express");

const app = express();


// Serve HTML, CSS and JavaScript files
app.use(express.static(__dirname));


// Home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});