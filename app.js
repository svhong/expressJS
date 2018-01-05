const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

 
// var logger = function (req, res, next){
//     console.log('Logging...');
//     next();
// }

//MiddleWare must go through before getting to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')))

var people = [
    {
        name:'Jeff',
        age:30
    },
    {
        name:'Sara',
        age:22
    },
    {
        name:'Bill',
        age:30
    }
]

app.get('/', function(req, res){
    res.json(people);
});

app.listen(3000,function(){
    console.log("Server started on port 3000...")
});