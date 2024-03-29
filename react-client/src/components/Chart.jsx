import React from 'react';
import { Line } from 'react-chartjs-2';


class Chart extends React.Component {
  render() {
    return (
      <div>
        <Line ref="chart" data={{
    labels: this.props.historicalDates,
    datasets: [
      {
        label: 'BITCOIN',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.props.historicalPrices
      }
    ]
  }} />
      </div>
    );
  }

  // componentDidMount() {
  //   const { datasets } = this.refs.chart.chartInstance.data
  //   console.log(datasets[0].data);
  // }
}
 

export default Chart;