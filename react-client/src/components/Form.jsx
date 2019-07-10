import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stock : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(event) {
  this.setState({
    stock : event.target.value})
}

handleSubmit(event) {
  event.preventDefault()
  this.props.getHistoricalPrices(this.state.stock)
}

render() {
  return (
    <div>
  <form onSubmit={this.handleSubmit}>
  <label>
    Stock symbol:
    <input type="text" value={this.state.stock} onChange={this.handleChange}/>
  </label>
</form>
    </div>
  )
}
}


export default Form