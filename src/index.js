const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const PORT = 8000;

// used absolute path
// console.log(path.join(__dirname, "../templates/partials"));
const staticPath = path.join(__dirname, "../public/css");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// to set the view engine
app.set("view engine", "hbs");

// change views directory name to templates
app.set("views", templatePath);
hbs.registerPartials(partialsPath);


// Built in middleware
app.use(express.static(staticPath));
// Without middleware


// template engine route
app.get("/move",(req,res)=>{
    res.render('index',{
        myName:"saksham",
    });
});

app.get("/about",(req,res)=>{
    res.render("about");
});

// ____404 ERROR ___
// about ke andr jane ke bad 
app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorcomment:" Sorry this page  about not found "
    });
});

// normal if enter any page not found
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:" Sorry page not found "
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