import React, { Component } from 'react';
import InputType from './component/input_type';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import AlertBox from './component/alert_box';

export default class ResetPassword extends Component {
    render() {
        return (
            <div className='code_verify_authenticate'>
                <div className='arrow_decoration'>
                    <div className='arrow_container'>
                        <div className='top arrow_background'></div>
                        <div className='middle arrow_background'></div>
                        <div className='bottom arrow_background'></div>
                    </div>
                </div>
                <div className='forgot_password_container'>
                    <h2 className='label' id='forgot_password_label'>Forgot Password</h2>
                    <form className='form' onSubmit={(event) => this.handleSendCode(event)} id='forgot_password_form'>
                        <div className='forgot_pass_box'>
                            <div className='email_input_container'>
                                <InputType {...this.state.email_input} onChange={(event) => this.handleChange(event)}></InputType>
                            </div>
                        </div>
                        {this.state.email_alert}                   
                        <button className='forgot_password_submission' type='submit' name='forgot_password_button'>Send code</button>
                    </form>
                </div>
            </div>
        )
    }
}
