const http = require("https");
const Config = require("../config");

function currencyConverter(req, res) {
  try {
    // console.log({ req });
    const { from, to, amount } = req.body;

    if (!from || !to) {
      throw new Error("from and to are required");
    }

    const options = {
      method: "GET",
      hostname: "currency-exchange.p.rapidapi.com",
      port: null,
      path: `/exchange?from=${from}&to=${to}&q=${amount}`,
      headers: {
        "X-RapidAPI-Key": Config.CURRENCY_API_KEY,
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      },
    };

    const request = http.request(options, function (response) {
      const chunks = [];

      response.on("data", function (chunk) {
        chunks.push(chunk);
      });

      response.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());

        res.send({
          message: "done",
          data: body.toString(),
        });
      });
    });

    request.end();
    return;
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = currencyConverter;
