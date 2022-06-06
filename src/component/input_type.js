import React, { Component } from 'react';
class InputType extends Component {
    render() { 
        return (
            <div className='input_box'>
                <input className={this.props.type} type={this.props.type} placeholder={this.props.placeholder} id={this.props.id}></input>
            </div>
        );
    }
}
 
export default InputType;