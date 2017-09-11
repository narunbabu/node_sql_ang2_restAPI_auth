var request = require('request');

request.post(
    'http://localhost:5000/api/login',
    { 
        json: { "email":"ab@ameyem.com", "password":"arun@123" }
     },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);