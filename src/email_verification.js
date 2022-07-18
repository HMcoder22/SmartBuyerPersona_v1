import React, { Component } from 'react';
import './CSS/verifycode.css';
import InputType from './component/input_type';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import AlertBox from './component/alert_box';

export default class EmailVerifcation extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: sessionStorage.getItem('forgot email'),
            email_verified_code: '',
            success: false,
            email_verify_alert: [],
            email_verification_code_input: {
                type: 'text',
                placeholder: 'Enter your email code here',
                id: 'email_verification_code_input',
                name: 'email_verified_code'
            },
        }
    }
    render() {
        document.title = "Email verification";

        if(sessionStorage.getItem('email verification') === 'true'){
            if(this.state.success){
                sessionStorage.setItem('email verification', 'false');
                return (
                    <Navigate to='/forgot/password/reset_password'></Navigate>
                )
            }
            return (
                <div className='code_verify_authenticate'>
                    <div className='arrow_decoration'>
                        <div className='arrow_container'>
                            <div className='top arrow_background'></div>
                            <div className='middle arrow_background'></div>
                            <div className='bottom arrow_background'></div>
                        </div>
                    </div>
                    <div className='code_verify_box'>
                        <div className='code_verify_container'>
                            <div className='verification_notification_box'>
                                <span className='verification_notified'>The verification code has been sent to your {this.state.email}</span>
                            </div>
                            <h2 className='label' id='code_verify_label'>Code Verification</h2>
                            <form className='form' onSubmit={(event) => this.handleVerify(event)} id='code_verify_form'>
                                <div className='verify_box'>
                                    <div className='code_verification_box'>
                                        <InputType {...this.state.email_verification_code_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                </div>
                                {this.state.email_verify_alert}
                                <div className='resend_code_container'>
                                   <button type='button'><span onClick={(event) => this.handleResendCode(event)} className='link' id='resend_code_link'>Resend Code</span></button>
                                </div>                        
                                <button className='code_verify_submission' type='submit' name='verify_button'>Verify</button>
                            </form>
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

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
        this.setState({email_alert: []});
    }

    handleResendCode(event){
        event.preventDefault();
        // axios.post("http://localhost:4000/forgot_password/email_verify/resend_code", this.state)
        axios.post("https://splendorous-dieffenbachia-f3bbe0.netlify.app/.netlify/functions/code_verify/forgot_password/email_verify/resend_code", this.state)
        .then(res => {
            if(JSON.parse(res.data).success){
                alert(`Your code has been resent to your email ${this.state.email}`);
                return;
            }

            alert("Oops, something went wrong! Please try again!");
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleVerify(event){
        event.preventDefault();
        this.setState({email_alert: []});
        // axios.post("http://localhost:4000/forgot_password/email_verify", this.state)
        axios.post("https://splendorous-dieffenbachia-f3bbe0.netlify.app/.netlify/functions/code_verify/forgot_password/email_verify", this.state)
        .then(res => {
            const result = JSON.parse(res.data);
            console.log(result);
            if(result.success){
                this.setState({success: true});
                return;
            }

            if(result.error === 'Unmatched email code'){
                this.setState({email_alert: 
                    <AlertBox id='email_alert' alert={"Invalid code"}></AlertBox>
                })
            }
            if(result.error === 'Email code expired'){
                this.setState({email_alert: 
                    <AlertBox id='email_alert' alert="Code expired"></AlertBox>
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

}