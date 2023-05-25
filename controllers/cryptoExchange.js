const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const Config = require("../config");

async function cryptoExchange(req, res) {
  const { uuidN } = uuidv4();
  const cryto = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price",
    params: {
      // referenceCurrencyUuid: 'yhjMzLPhuIDl',
      uuid: `${uuidN}`,
    },
    headers: {
      "X-RapidAPI-Key": Config.CRYPTO_API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(cryto);
    return res.send({
      message: "done",
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
module.exports = cryptoExchange;
