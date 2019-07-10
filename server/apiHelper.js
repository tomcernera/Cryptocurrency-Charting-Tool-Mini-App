const axios = require('axios')
const api = require('../config.js')

module.exports = {
  getHistoricalStockPrices : (req,res) => {
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${req.query.stock}&apikey=${api.quotes_api_key}`)
    .then(results => res.send(results.data['Time Series (Daily)']))
    .catch(err => console.log(err))
  },
  getNews : (req,res) => {
    axios.get(`https://newsapi.org/v2/everything?q=${req.query.stock}&apiKey=${api.news_api_key}`)
    .then(results => res.send(results.data))
    .catch(err => console.log(err))
  }
}


// https://newsapi.org/v2/everything?q=goog&apiKey=89727b2ce81942f484c77e03098ac70a