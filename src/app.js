const express = require('express');
const morgan = require('morgan');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

//Habilitar bloqueo de CORS
const cors = require('cors');
const lista= ['http://localhost:5000','https://izipay-ejemplo-php.000webhostapp.com'];
app.use(cors({origin: lista}));

//Confiuguracion del puerto
//app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas de conexion
app.use('/CreatePayment',require('./routes/formtoken.js'));
app.use('/CreatePaymentOrder',require('./routes/CreatePaymentOrder.js'));
app.use('/PaymentOrder',require('./routes/PaymentOrderGet.js'));
app.use('/PaymentOrder',require('./routes/PaymentOrderUpdate.js'));
app.use('/Token',require('./routes/TokenCancel.js'));
app.use('/Token',require('./routes/TokenGet.js'));
app.use('/Token',require('./routes/TokenReactivate.js'));
app.use('/Token',require('./routes/TokenUpdate.js'));
app.use('/Token',require('./routes/CreateTokenFromTransaction.js'));
app.use('/Transaction',require('./routes/TransactionGet.js'));
app.use('/Transaction',require('./routes/TransactionUpdate.js'));  
app.use('/Transaction',require('./routes/TransactionValidate.js'));  
app.use('/Subscription',require('./routes/SubscriptionCancel.js'));  
app.use('/Subscription',require('./routes/SubscriptionGet.js')); 
app.use('/Subscription',require('./routes/SubscriptionUpdate.js')); 

//Emprezar el servidor
//app.listen(app.get('port'), () =>{
 //  console.log(`Server on port ${app.get('port')}`);
//})

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });
