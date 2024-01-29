const path = require('path');
const express = require('express');
const app = express();
const PORT = 8000;

// used absolute path
// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public/css");

// to set the view engine
app.set("view engine", "hbs");

// Built in middleware
app.use(express.static(staticPath));
// Without middleware


// template engine route
app.get("/",(res,req)=>{
    res.render("index",{
        myName:"saksham",
    });
});
app.get('/',(req, res) =>{
    res.status(200).send("working");
});
app.get('/temp',(req,res)=>{
    res.send([{
        id:1,
        name:"saksham",
    },
    {
        id:2,
        name:"katiyar",
    }
]);
});
app.listen(PORT, function (err) {
    
    console.log("Server listening on PORT", PORT);
});