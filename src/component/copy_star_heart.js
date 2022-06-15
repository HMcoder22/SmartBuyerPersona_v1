import React, { Component } from 'react';
class CPH extends Component {
    state = {  } 
    render() { 
        return (
            <ul className='cph'>
                <li className='icon' id='heart_icon'>
                    <div><img id='heart' alt='heart' src={this.props.heart}></img></div>
                </li>
                <li className='icon' id='star_icon'>
                    <div><img id='star' alt='star' src={this.props.star}></img></div>
                </li>
                <li className='icon' id='copy_icon'>
                    <div><img id='copy' alt='copy' src={this.props.copy}></img></div>
                </li>
            </ul>
        );
    }
}
 
export default CPH;