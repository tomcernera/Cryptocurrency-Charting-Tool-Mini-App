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
      historicalPrices : null,
      historicalDates : null
    }
    this.getHistoricalPrices = this.getHistoricalPrices.bind(this)
  }

  componentDidMount() {
    this.getHistoricalPrices('MSFT')
  }

  getHistoricalPrices(stock){
    axios.get(`http://127.0.0.1:4517/stockHistoricalPrices?stock=${stock}`) 
      .then(results =>{
        let dates = Object.keys(results.data).reverse();
        let prices = Object.values(results.data).map(close=>close['4. close']).reverse();
        this.setState({
          historicalDates : dates,
          historicalPrices : prices,
          stock : stock
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
      <Form getHistoricalPrices={this.getHistoricalPrices}/>
        <Chart historicalPrices={this.state.historicalPrices}
                historicalDates ={this.state.historicalDates}
                stock={this.state.stock}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));