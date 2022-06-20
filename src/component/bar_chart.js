import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {
    state = {  } 
    render() { 
        return (
            <div className='chart_wrapper' id='bar_chart'>
                <Bar data={this.props.data} options={this.props.options} alt='bar_chart'></Bar>
            </div>
        );
    }
}
 
export default BarChart;