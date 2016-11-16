'use strict';
const express    = require('express');
const path       = require('path');
const httpProxy  = require('http-proxy');
const publicPath = path.resolve(__dirname, 'public');
const port = process.env.PORT || 3000;
const app = express();
const bundle = require('./server/compiler.js');
const proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

app.use(express.static(publicPath));
bundle();
app.all('/build/*', (req, res) => {
  proxy.web(req, res, {
      target: 'http://localhost:8080'
  });
});
proxy.on('error', e => {
  console.log('Could not connect to proxy, please try again...');
});
app.listen(port, () => {
  console.log('Server running on port ' + port);
});