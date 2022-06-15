import React, { Component } from 'react';
class Profile extends Component {
    state = {  } 
    render() { 
        return (
            <div className='wrapper' id='profile_wrapper'>
                <div className='label_wrapper' id='profile_label_wrapper'><label className='label' id='profile_label'>{this.props.name}</label></div>
                <div className='img_wrapper' id='profile_img_wrapper'><img className='img' id='profile_pic' alt='profile_pic' src={this.props.img}></img></div>
            </div>
        );
    }
}
 
export default Profile;