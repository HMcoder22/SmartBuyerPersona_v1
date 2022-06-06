import React, { Component } from 'react';
class CheckBox extends Component {
    state = {  } 
    render() { 
        return (            
        <div className='input_box'>
            <input onChange={this.props.onChange} className={this.props.type} type={this.props.type} id={this.props.id} defaultChecked={this.props.defaultChecked} disabled={this.props.disabled}></input>
            <label className='label' id={this.props.label.id}>{this.props.label.name}</label>
        </div>
    );
    }
}
 
export default CheckBox;