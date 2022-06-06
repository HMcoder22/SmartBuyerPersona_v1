import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../CSS/demo_form.css'

class OrComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>                    
                <div className='vertical_line'></div>
                <div className='label' id='or_label'>OR</div>
                <div className='vertical_line'></div>
                <div className='redirect' id='redirect'>
                    <Link to={this.props.url}>{this.props.label}</Link>
                </div>
            </div>
        );
    }
}
 
export default OrComponent;