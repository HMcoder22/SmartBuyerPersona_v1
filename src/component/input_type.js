import React, { Component } from 'react';
class InputType extends Component {
    render() { 
        if(this.props.type !== 'textarea'){
            return (
                <div className='input_box'>
                    <input className={this.props.type} type={this.props.type} placeholder={this.props.placeholder} id={this.props.id} onChange={this.props.onChange} name={this.props.name}></input>
                </div>
            );
        }
        else{
            return(
                <div className='input_box'>
                    <textarea className={this.props.type} type={this.props.type} placeholder={this.props.placeholder} id={this.props.id} onChange={this.props.onChange} name={this.props.name}></textarea>
                </div>
            )
        }
    }
}
 
export default InputType;