import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Transition extends Component {
    state = {  }
    render() { 
        return (
            <li className='tools_wrapper' href="#">
                <div className='tool_icon' id={this.props.tool.type} href="#">
                    <Link to={this.props.url}><img src={this.props.tool.img} id={this.props.tool.id} alt="Arrow"/></Link>
                </div>
                <div className='arrow_icon' id={this.props.arrow.direction} href="#">
                    <Link to={this.props.url}><img src={this.props.arrow.img} alt="Arrow"/></Link>
                </div>
            </li>
        );
    }
}
 
export default Transition;