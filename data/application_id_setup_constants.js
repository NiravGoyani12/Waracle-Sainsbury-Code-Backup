module.exports = {
  "messageId": "OTHER_REQUEST",
  "customer": {
    "customerId": "123",
    "title": "Mr",
    "firstName": "John",
    "lastName": "Doe",
    "emailAddress": "johndoe@gmail.com",
    "billingAddress": {
      "houseNumber": "24",
      "line1": "Ash Lane",
      "postCode": "CR0 6NE",
      "town": "London",
      "county": "Surrey"
    }
  },
  "basket": {
    "financeAmount": 320.00, 
    "grossAmount": 320.00, 
    "discounts": 0.00, 
    "giftVouchers": 0.00, 
    "nectarPointsCurrencyValue": 0.00 
  },
  "others": {
    "checkoutCallbackUrl": "https://www.argos.co.uk/basket?clickOrigin=header:home:trolley",
    "origin": "argos", 
    "ipAddress": "99.99.99.99",
    "collectionStoreId": "12345", 
    "userAgent": "FrontendTesting/1.00", 
    "collectionStorePostCode": "BT14 6NE", 
    "fulfilmentChannel": "Collection", 
    "creditPlanId": "20010", 
    "checkoutSessionExpiryTime": "2022-10-11T00:00:00.000Z",
    "stockHoldExpiryTime": "2022-10-11T00:00:00.000Z",
    "purchaseChannel": "Web" 
  },
  "products": [
    {
      "quantity": 1,
      "sku": 1000,
      "unitPrice": 300.00,
      "description": "Samsung TV"
    },
    {
      "quantity": 2,
      "sku": 2313131323,
      "unitPrice": 10.00,
      "description": "AA Batteries"
    }
  ]
};