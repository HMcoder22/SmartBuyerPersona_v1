import React, { Component } from 'react';
class StatsIcon extends Component {
    state = {  } 
    render() { 
        return (
            <div className='stats_icon'>
                <div className='label_wrapper'><label className='label' id={this.props.label.id}>{this.props.label.name}</label></div>
                <div className='data_wrapper'><span className='label' id={this.props.data.id}>{this.props.data.value}</span></div>
                <div className='rate_wrapper'><span className='label' id={this.props.rate.id} style={this.props.style}>{this.props.rate.value}</span></div>
            </div>
        );
    }
}
 
export default StatsIcon;