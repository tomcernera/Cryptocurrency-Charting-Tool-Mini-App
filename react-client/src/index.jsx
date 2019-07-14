import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './components/Chart.jsx';
import Form from './components/Form.jsx';
import News from './components/News.jsx'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      currentPrice : null,
      historicalPrices : null,
      historicalDates : null,
      news : []
    }
    this.getHistoricalPrices = this.getHistoricalPrices.bind(this)
  }

  componentDidMount() {
    this.getHistoricalPrices('SPX')
    this.getStockNews('SPX')
  }

  getHistoricalPrices(stock){
    axios.get(`http://127.0.0.1:4517/stockHistoricalPrices?stock=${stock}`) 
      .then(results =>{
        let dates = Object.keys(results.data).reverse();
        let prices = Object.values(results.data).map(close=>close['4. close']).reverse();
        this.setState({
          currentPrice : prices[prices.length - 1],
          historicalDates : dates,
          historicalPrices : prices,
          stock : stock
        })
      })
      .catch(err => console.log(err))
  }

  getStockNews(stock) {
    axios.get(`http://127.0.0.1:4517/stockNews?stock=${stock}`)
      .then(results => {this.setState({news : results.data.articles})})
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
      <button onClick={()=>this.getStockNews(this.state.stock)}>NEWS</button>
      <div>Current Price: {this.state.currentPrice}</div>
      <Form getHistoricalPrices={this.getHistoricalPrices}/>
      <Chart historicalPrices={this.state.historicalPrices}
                historicalDates ={this.state.historicalDates}
                stock={this.state.stock}/>
      <News news={this.state.news}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));