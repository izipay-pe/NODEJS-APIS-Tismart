const { Router } = require("express");
const router = Router();
const request = require('request');

router.post('/Reactivate', function(req, res, next) 
{
  var paymentMethodToken = req.body; 

  // Call CreatePayment web service to create the form token 
  request.post({
    url: "https://api.micuentaweb.pe/api-payment/V4/Token/Reactivate",
    headers: {
      'Authorization': 'Basic NTE0NDczNzg6dGVzdHBhc3N3b3JkXzZBZnN6cktnVVVNbXd1eGtZTTU0b0s3RlJKdU1JVEE5NHloYlFORmtuZGswMw==',
      'Content-Type': 'application/json'
    },
    json: paymentMethodToken
  }, 
  function(error, response, body) {

    if (body.status === 'SUCCESS')
    {
      // Send back the form token to the client side
      const datos = body.answer;
      res.send(datos);
    }
    else
    {
      // Do your own error handling  
      console.error(body);
      res.status(500).send('error');
    }  
     

  });
});

module.exports = router;