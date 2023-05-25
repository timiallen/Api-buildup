const express = require("express");
const cryptoExchange = require("./controllers/cryptoExchange");
const currencyConverter = require("./controllers/currencyConverter");
const googleTranslator = require("./controllers/googleTranslate")
const router = express();

router.get("/home", (req, res) =>
  // res.sendFile(__dirname + '/currency.html')

  res.json({
    status: true,
    message: "Timi API",
  })
);

router.post("/currency-converter", currencyConverter);

router.get("/cryto-exchange", cryptoExchange);
router.post('/googleTranslate', googleTranslator);

module.exports = router;
