const express = require("express"); // подключаем express
const bodyParser = require("body-parser");
const autRouter = require("./routers/autRoutes");
const priceListRouter = require("./routers/priceListRouter");

const app = express();

app.use(bodyParser.json());
app.use(require('cors')());

app.use("/api", autRouter);
app.use("/api", priceListRouter);

module.exports = app;
