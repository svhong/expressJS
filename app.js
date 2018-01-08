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

var users = [
    {
        id:1,
        first_name: 'Sean',
        last_name: 'Hong',
        email: 'sean@hong.com'
    },
    {
        id:2,
        first_name: 'Victoria',
        last_name: 'Hong',
        email: 'victoria@hong.com'
    },
    {
        id:3,
        first_name: 'Kyra',
        last_name: 'Hong',
        email: 'kyra@hong.com'
    },
    {
        id:1,
        first_name: 'Liora',
        last_name: 'Hong',
        email: 'lala@hong.com'
    },
    {
        id:1,
        first_name: 'Vera',
        last_name: 'Hong',
        email: 'vera@hong.com'
    },
    {
        id:1,
        first_name: 'Ezekiel',
        last_name: 'Hong',
        email: 'z@hong.com'
    }
]

app.get('/', function(req, res){
    res.render('index', {
        title:'Customer',
        users:users //include the user array for browser
    });
});

app.post('/users/add', function(req,res){
    var new_user = {
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
    }

    console.log(newUser)
})

app.listen(3000,function(){
    console.log("Server started on port 3000...")
});