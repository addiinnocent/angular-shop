_Config = require('./config.json')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const database = require('./database/db');
const routes = require('./routes');

const app = express()

routes(app, bodyParser);
app.use((req, res) => {
	res.status(404).send('404: Page not Found');
});

const options = {useNewUrlParser: true, useFindAndModify: false};
mongoose.connect('mongodb://localhost:'+_Config.mongodb+'/shop', options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  app.listen(_Config.port, () => console.log('Example app listening on port '+_Config.port))
});
