const appData = require('./data.json');

const { seller, goods, ratings } = appData;

module.exports = {
  devServer: {
    before(app) {
      app.get('/api/seller', (req, res) => {
        res.json({
          code: 200,
          data: seller,
        });
      });
      app.get('/api/goods', (req, res) => {
        res.json({
          code: 200,
          data: goods,
        });
      });
      app.get('/api/ratings', (req, res) => {
        res.json({
          code: 200,
          data: ratings,
        });
      });
    },
  },
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
};
