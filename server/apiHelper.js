const axios = require('axios')

module.exports = {
  getCurrentPrice : (req,res) => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(results => res.send(results.data))
      .catch(err => console.log(err))
  },
  getHistoricalPrice : (req,res)=> {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(results=> res.send(results.data.bpi))
      .catch(err => console.log(err))
  }
}