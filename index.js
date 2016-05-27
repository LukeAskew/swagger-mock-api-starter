const path = require('path');
const express = require('express');
const mock = require('swagger-mock-api');

const app = express();
const specFile = path.join(__dirname, 'spec.yml');

app.use(mock({
  swaggerFile: specFile,
  watch: true
}));

app.listen(4000, function () {
  console.log('API running on port 4000');
});
