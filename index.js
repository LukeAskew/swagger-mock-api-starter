const path = require('path');
const fs = require('fs');
const express = require('express');
const yaml = require('yaml-js');
const mock = require('swagger-mock-api');

const app = express();
const specFile = path.join(__dirname, 'spec.yml');

const spec = fs.readFileSync(specFile, 'utf-8');

app.use(mock({
	swaggerFile: specFile,
	watch: true
}))

// app.use(SwaggerDocs.middleWare(spec, { path: '/api' }))

app.listen(4000, function () {
  console.log('API running on port 4000');
});
