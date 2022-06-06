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
                        <Navbar value="Home" id="home" url="/homepage"/>
                        <Navbar value="About" id="about" url="/about-us"/>
                        <Navbar value="Contact" id="contact" url="/contact"/>
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
