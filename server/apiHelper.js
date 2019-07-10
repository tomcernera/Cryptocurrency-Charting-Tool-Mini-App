const axios = require('axios')
const api = require('../config.js').api_key

module.exports = {
  getHistoricalStockPrices : (req,res) => {
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${req.query.stock}&apikey=${api}`)
    .then(results => res.send(results.data['Time Series (Daily)']))
    .catch(err => console.log(err))
  }
}


// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo 