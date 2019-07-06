import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      currentPrice : null,
      currentTime : null
    }
  }

  componentDidMount() {
   this.getCurrentPrice()
   this.getHistoricalPrice()
  }




  getCurrentPrice() {
    axios.get('http://127.0.0.1:4517/currentPrice')
      .then(results => {
        this.setState({
        currentPrice : results.data.bpi.USD.rate,
        currentTime : results.data.time.updated
      })})
      .catch(err => console.log(err))
  }

  getHistoricalPrice() {
    axios.get('http://127.0.0.1:4517/historicalPrice')
      .then(data => console.log(data.data))
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <p>
      {this.state.currentPrice}
        </p>
        <p>{this.state.currentTime}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));