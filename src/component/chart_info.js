import React, { Component } from 'react';
import BarChart from './bar_chart';
import PieChart from './pie_chart';
import LineChart from './line_chart';

class ChartInfo extends Component {

    state = {  } 
    
    render() {
        if(this.props.type === 'bar'){
            return (
                <div className='chart_info_wrapper' id='bar_chart_wrapper'>
                    <div className='chart_label_wrapper'>
                        <span className='label' id='chart_title'>{this.props.label}</span>
                    </div>
                    <BarChart data={this.props.data} options={this.props.options}></BarChart>                
                </div>
            );
        }
        if(this.props.type === 'pie'){
            return (
                <div className='chart_info_wrapper' id='pie_chart_wrapper'>
                    <div className='chart_label_wrapper'>
                        <span className='label' id='chart_title'>{this.props.label}</span>
                    </div>
                    <PieChart data={this.props.data} options={this.props.options}></PieChart>                
                </div>
            );
        }
        if(this.props.type === 'line'){
            return (
                <div className='chart_info_wrapper' id='line_chart_wrapper'>
                    <div className='chart_label_wrapper'>
                        <span className='label' id='chart_title'>{this.props.label}</span>
                    </div>
                    <LineChart data={this.props.data} options={this.props.options}></LineChart>                
                </div>
            );
        }
    }
}
 
export default ChartInfo;