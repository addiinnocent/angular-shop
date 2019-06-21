const items = require('./database/items');

module.exports = (app, bodyParser) => {
  app.get('/getBy', (req, res) => {
    items.getAll({}, (result) => {
      res.json(result);
    });
  })

  app.get('/getBy/category/*', (req, res) => {
    if (!req.params[0]) return;
    items.getAll({category: req.params[0]}, (result) => {
      res.json(result);
    });
  })

  app.post('/postData', bodyParser.json(), (req, res) => {
      res.json(req.body)
  })



  app.get('/create', (req, res) => {
    items.fetch();
  })
}
