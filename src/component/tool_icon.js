import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ToolIcon extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Link to={this.props.url}>
                    <div className='icon_wraapper'>
                        <img src={this.props.img} alt='icon'></img>
                    </div>
                </Link>
                <Link to={this.props.url} className='label' id={this.props.label.id}>{this.props.label.name}</Link>
            </div>
        );
    }
}
 
export default ToolIcon;