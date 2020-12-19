const express = require('express');
const app = express();

const { config } = require('./config/index');
const productsApi = require('./routes/products');

app.use(express.json());

productsApi(app);

app.listen(config.port, function () {
  console.log(`Listening on Port ${config.port}`);
});
