# sample-webapi-implicitgrant-javascript

This sample application uses javascript/jQuery to authenticate with the TradeStation API via an OAuth 2 Implicit Grant Type. The user will be redirected to TradeStation's login page to capture and verify credentails. After a successful login, an access token is returned which will be used for subsequent WebAPI calls.

## Configuration
Modify the following with your appropriate values:

    'apiKey': "your key goes here",
    'environment': "SIM" // can be "SIM" for simulated trading or "PROD" for live trading

## Build Instructions
Not Applicable

## Troubleshooting
If there are any problems, open an [issue](sample-webapi-implicitgrant-javascript/issues) and we'll take a look! You can also give us feedback by e-mailing webapi@tradestation.com
