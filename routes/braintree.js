const router = require("express").Router();
const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUB_KEY,
    privateKey: process.env.BRAINTREE_PRIV_KEY
});

router.get("/client_token", (req, res) => {
    gateway.clientToken.generate({}, (err, response) => {
        res.send(response.clientToken);
    });
});

router.post("/payment", (req, res) => {
    const nonceFromTheClient = req.body.payment_method_nonce;
})

module.exports = router;