
const express = require('express');
const app = express();
const PORT = 3000;
 
// Without middleware
app.get('/',(req, res) =>{
    res.status(200).send("working");
});
 
app.listen(PORT, function (err) {
    
    console.log("Server listening on PORT", PORT);
});