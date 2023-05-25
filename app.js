const express = require("express");
const router = require("./router");
const app = express();

app.use(express.json());
app.use(router);
const port = 3000;

app.listen(3000, () => console.log(`running on  ${port}!`));
