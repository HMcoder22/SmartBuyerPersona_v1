import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Social extends Component {
    state = {  } 
    render() { 
        const social = this.props.social;
        let social_wrapper = social.map(items => {
            return(
                <li className='social' key={items.type}>
                    <Link to={items.url}><img id={items.type} src={items.img} alt='social_icon'></img></Link>
                    <Link to={items.url}>{items.type}</Link>
                </li>
            )
        })
        return (
            <div className='wrapper'>
                <div className='social_wrapper'>
                    <div className='label_wrapper'><label className='label' id='social_label'>Social</label></div>
                    <ul className='social_sites_wrapper'>
                        {social_wrapper}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Social;