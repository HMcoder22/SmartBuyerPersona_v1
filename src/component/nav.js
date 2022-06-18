import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class  Nav extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li>
                        <Navbar value="SmartBuyerPersona" id="smart_buyer_persona" url="/"/>
                    </li>
                    <li>
                        <div className='nav-items'>
                            <a href="https://smartbuyerpersona.com/">Home</a>
                        </div>
                        <div className='nav-items'>
                            <a href="https://smartbuyerpersona.com/about-us">About</a>
                        </div>                        <div className='nav-items'>
                            <a href="https://smartbuyerpersona.com/about-us">Contact</a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default Nav;

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div className="nav-items">
                <Link to={this.props.url}>
                    {this.props.value}
                </Link>
            </div>
        );
    }
}
