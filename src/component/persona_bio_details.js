import React, { Component } from 'react';
class PersonaBioDetails extends Component {
    state = {  } 
    render() { 
        const bio = this.props.bios;
        let bio_wrapper = bio.map(items => {
            return(
                <li className='bio' key={items.type}>
                    <span className='bio_type'>{items.type}</span>
                    <span className='bio_value'>{items.value}</span>
                </li>
            )
        })
        return (
            <div className='wrapper' id='bio_details_wrapper'>
                <ul>
                    {bio_wrapper}
                </ul>
            </div>
        );
    }
}
 
export default PersonaBioDetails;