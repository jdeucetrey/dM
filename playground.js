var yelp = require('yelp-fusion')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router(); 

//set variables for yelp-fusion package to call out to yelp to fetch the token
const clientId = 'lPBDg7OgSWOqdV32GguMRw';
const clientSecret = 'eortEkd5pRRXMzR8zuhQXSw6swjM0bjhuz48K5m287WY8PBcgrBISoCDuPv7dW6T';
var authToken;

yelp.accessToken(clientId, clientSecret).then(response =>{
    authToken = (response.jsonBody.access_token).toString();})
    .catch(e=>{console.log(e);})

//return it 
router.get('/', function(req, res) {
    res.json(
    {message: "Hello!"});   
    });  
    
//router.get('/', function(req, res) {
//    res.json(
//    {token: authToken});   
//    });  
app.use('/api', router);

//Create Routes
router.route('/yelp/token/')

//This should probably be a POST method with the body including the clientID and clientSecret, but this will do for now #fuckit
.get(function(req,res){
    res.json({
        message: authToken
            });
                });

//Register Routes
app.use('/api',router);

app.listen(port);
console.log('Ready to respond to requests on PORT: ' + port);
