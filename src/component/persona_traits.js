import React, { Component } from 'react';
class PersonaTrait extends Component {
    state = {  } 
    render() { 
        return (
            <div className='wrapper' id='trait_wrapper'>
                <span id='label'>{this.props.trait}</span>
            </div>
        );
    }
}
 
export default PersonaTrait;