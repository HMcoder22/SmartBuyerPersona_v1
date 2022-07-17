import e from 'cors'
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import '../CSS/verify_success.css'

export default class VerifySuccess extends Component {
    constructor(props){
        super(props);
        this.state = {
            to_login: false
        }
    }
    render() {
        if(sessionStorage.getItem('verify_success') === 'true'){
            if(this.state.to_login){
                return (
                    <Navigate to='/login' replace></Navigate>
                )
            }
            return (
                <div className='verify_success'>
                    <div className='arrow_decoration'>
                        <div className='arrow_container'>
                            <div className='top arrow_background'></div>
                            <div className='middle arrow_background'></div>
                            <div className='bottom arrow_background'></div>
                        </div>
                    </div>
                    <div className='verify_success_dropdown'>
                        <div className='wrapper'>
                            <div className='verify_success_alert'>
                                <span>Verification successful</span>
                            </div>
                            <div className='button_wrapper'>
                                <button type='button' id='ok_button' onClick={() => this.handleClick()}>Back to login</button>
                            </div>
                        </div>
                    </div>
                </div>    
            )
        }
        else{
            return (
                <Navigate to='/login' replace></Navigate>
            )
        }
    }

    handleClick(){
      this.setState({to_login: true});
    }
}
