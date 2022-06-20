import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
class LineChart extends Component {
    state = {  } 
    render() { 
        return (
            <div className='chart_wrapper' id='line_chart'>
                <Line data={this.props.data} options={this.props.options} alt='line_chart'></Line>
            </div>
        );
    }
}
 
export default LineChart;