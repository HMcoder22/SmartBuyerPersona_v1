import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
class PieChart extends Component {
    state = {  } 
    render() { 
        return (
            <div className='chart_wrapper' id='pie_chart'>
                <Pie data={this.props.data} options={this.props.options}></Pie>
            </div>
        );
    }
}
 
export default PieChart;