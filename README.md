## Lista de APIs en PHP - Botón de pago Izipay

```sh
Instalar XAMPP https://www.apachefriends.org/
``` 

#### Transaction

| Métodos | Endpoints |
| ------ | ------ |
| createPayment | https://api.micuentaweb.pe/api-payment/V4/Charge/Createpayment |
| createPaymentOrder | https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePaymentOrder |
| getPaymentOrder | https://api.micuentaweb.pe/api-payment/V4/Charge/PaymentOrder/Get |
| OrderGet | https://api.micuentaweb.pe/api-payment/V4/Order/Get |
| updatePaymentOrder | https://api.micuentaweb.pe/api-payment/V4/Charge/PaymentOrder/Update |
| TransactionGet | https://api.micuentaweb.pe/api-payment/V4/Transaction/Get |
| TransactionUpdate | https://api.micuentaweb.pe/api-payment/V4/Transaction/Update |
| TransactionCapture | https://api.micuentaweb.pe/api-payment/V4/Transaction/Capture |
| TransactionValidate | https://api.micuentaweb.pe/api-payment/V4/Transaction/Validate |
| TransactionDuplicate | https://api.micuentaweb.pe/api-payment/V4/Transaction/Duplicate |
| TransactionCancel | https://api.micuentaweb.pe/api-payment/V4/Transaction/CancelOrRefund |

#### Token y Suscription

| Métodos | Endpoints |
| ------ | ------ |
| createToken | https://api.micuentaweb.pe/api-payment/V4/Charge/CreateToken |
| createTokenFromTransaction | https://api.micuentaweb.pe/api-payment/V4/Charge/CreateTokenFromTransaction |
| updateToken | https://api.micuentaweb.pe/api-payment/V4/Token/Update |
| getToken | https://api.micuentaweb.pe/api-payment/V4/Token/Get |
| reactivateToken | https://api.micuentaweb.pe/api-payment/V4/Token/Reactivate |
| cancelToken | https://api.micuentaweb.pe/api-payment/V4/Token/Cancel |
| createSuscription | https://api.micuentaweb.pe/api-payment/V4/Charge/CreateSubscription |
| getSuscription | https://api.micuentaweb.pe/api-payment/V4/Suscription/Get |
| updateSuscription | https://api.micuentaweb.pe/api-payment/V4/Subscription/Update |
| cancelSuscription | https://api.micuentaweb.pe/api-payment/V4/Subscription/Cancel |
