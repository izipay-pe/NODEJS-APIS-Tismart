
const { Router } = require("express");
const router = Router();
const request = require('request');

router.post('/', function(req, res, next) 
{
  var order = req.body;
  
  var username = 'xxxxxxx';
  var password = 'testpassword_xxxxxxxxxxxxxxxxxxxx';
  var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
  
  if(isEmptyObject(order) === true || isEmptyObject(order) === 'undefined'){
      order = {
        "amount":   200,
        "currency": "PEN",
        "orderId":  "myOrderId-999999",
        "customer": {
            "email": "sample@example.com"
        },
        
        /**********************************************************************/
        /*Se envia "0" si no quieres que se visualice las cuotas y pago diferido*/
        /**********************************************************************/
          /*"transactionOptions": {
            "cardOptions": {      
              "installmentNumber": 0      
            }      
          }*/
      };         
  }
  else{
    order = req.body;
  } 

  //comprueba si el body esta vacio, devuelve true si esta vacio
  function isEmptyObject(obj) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            return false;
        }
    }
 
    return true;
  }

  // Call CreatePayment web service to create the form token 
  request.post({
    url: "https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment",
    headers: {
      'Authorization': auth,
      'Content-Type': 'application/json'
    },
    json: order
  }, 
  function(error, response, body) {

    if (body.status === 'SUCCESS')
    {
      // Send back the form token to the client side
      const formtoken = body.answer.formToken;
      res.send(formtoken);
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
