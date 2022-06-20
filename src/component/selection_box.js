import React, { Component } from 'react';
class SelectionBox extends Component { 
    render() {
        const options = this.props.options;
        let option_selection = options.map( (item) =>{
            return(
                <option key={item.id} value={item.value} id={item.id}>{item.placeholder}</option>
            )
        })
        return (
            <div className='selection_box'>
                <select className='select' id={this.props.id} defaultValue={'DEFAULT'} onChange={this.props.onChange} name={this.props.name}>
                    <option className='opion' value="DEFAULT" disabled>{this.props.placeholder}</option>
                    {option_selection}            
                </select>
            </div>
        );
    }
}
 
export default SelectionBox;