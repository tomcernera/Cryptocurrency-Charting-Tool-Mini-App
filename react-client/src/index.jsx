import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './components/Chart.jsx'
import Form from './components/Form.jsx'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      currentPrice : null,
      currentTime : null,
      historicalPrices : null,
      historicalDates : null
    }
    this.getCurrentPrice = this.getCurrentPrice.bind(this)
    this.getHistoricalPriceDateRange = this.getHistoricalPriceDateRange.bind(this)
  }

  componentDidMount() {
   this.getCurrentPrice()
   setInterval(this.getCurrentPrice,60000)
   this.getHistoricalPrice()
  }

  getCurrentPrice() {
    axios.get('http://127.0.0.1:4517/currentPrice')
      .then(results => {this.setState({
        currentPrice : results.data.bpi.USD.rate,
        currentTime : results.data.time.updated
      })})
      .catch(err => console.log(err))
  }

  getHistoricalPrice() {
    axios.get('http://127.0.0.1:4517/historicalPrice')
      .then(data => {
        let dates = Object.keys(data.data)
        let prices = Object.values(data.data)
        this.setState({
        historicalPrices : prices,
        historicalDates : dates
      })
    })
      .catch(err => console.log(err))
  }

  getHistoricalPriceDateRange(startDate,endDate) {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
      .then(data => {
        let dates = Object.keys(data.data.bpi)
        let prices = Object.values(data.data.bpi)
        this.setState({
        historicalPrices : prices,
        historicalDates : dates
      })
    })
      .catch(err => console.log(err))
  }

  //be able to let user select a date range

  render () {
    return (
      <div>
      Current Price: ${this.state.currentPrice}
      <p>{this.state.currentTime}</p>
        <Chart historicalPrices={this.state.historicalPrices}
                historicalDates ={this.state.historicalDates}/>
        <Form getHistoricalPriceDateRange={this.getHistoricalPriceDateRange}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));