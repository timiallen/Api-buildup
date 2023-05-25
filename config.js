const dotenv = require("dotenv");
dotenv.config();

const Config = {
    CRYPTO_API_KEY: process.env.CRYPTO_API_KEY,
    CURRENCY_API_KEY: process.env.CURRENCY_API_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY
};

module.exports = Config;

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