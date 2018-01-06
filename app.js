const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

 
// var logger = function (req, res, next){
//     console.log('Logging...');
//     next();
// }

//View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'));

//MiddleWare must go through before getting to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000,function(){
    console.log("Server started on port 3000...")
});