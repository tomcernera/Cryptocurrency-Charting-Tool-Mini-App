import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate : '',
      endDate : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStartChange = this.handleStartChange.bind(this)
    this.handleEndChange = this.handleEndChange.bind(this)
  }

handleStartChange(event) {
  this.setState({
    startDate : event.target.value})
}

handleEndChange(event) {
  this.setState({
    endDate : event.target.value})
}

handleSubmit(event) {
  event.preventDefault()
  this.props.getHistoricalPriceDateRange(this.state.startDate,this.state.endDate)
}

render() {
  return (
    <div>
  <form onSubmit={this.handleSubmit}>
  <label>
    Start Date in YYYY-MM-DD:
    <input type="text" value={this.state.startDate} onChange={this.handleStartChange}/>
  </label>
</form>
  <form onSubmit={this.handleSubmit}>
  <label>
    End Date in YYYY-MM-DD:
    <input type="text" value={this.state.endDate} onChange={this.handleEndChange}/>
  </label>
</form>
    </div>
  )
}
}


export default Form