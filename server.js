var express = require('express')
var exphbs  = require('express-handlebars');
var server=express();

//Handlebars Middleware
server.engine('handlebars', exphbs({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');

//Index Route
server.get('/',(req,res)=>{
res.render("index");
});

//About route
server.get('/about',(req,res)=>{
    res.render("about");
});

//Gallery Route
server.get('/gallery',(req,res)=>{
    res.render("gallery");
});

server.listen(3000,()=>{
    console.log('server started on port 3000')
});