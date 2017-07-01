'use strict';

const yelp = require ('yelp-fusion');
const clientId = '';
const clientSecret = '';
var authToken;
//yelp.accessToken(clientId, clientSecret).then(response => {
//    console.log(response.jsonBody.access_token);
//}).catch(e=>{console.log(e);});

//chaining shit and getting the response
yelp.accessToken(clientId, clientSecret).then(response =>{
    authToken = (response.jsonBody.access_token).toString();
    console.log(authToken);})
    .catch(e=>{console.log(e);}).then(response =>{
    const client = yelp.client(authToken);
    client.reviews('mcdonalds-kent').then(response => {
      console.log(response.jsonBody.reviews[0].text);
    }).catch(e => {
      console.log(e);
    });   
    })

    


