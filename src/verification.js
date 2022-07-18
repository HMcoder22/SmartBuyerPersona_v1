import React, { Component } from 'react';
import './CSS/login.css';
import InputType from './component/input_type';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import AlertBox from './component/alert_box';


export default class Verification extends Component {
    constructor(props){
        super(props);
        this.state = {
            email_verified_code: '',
            phone_verified_code: '',
            username: sessionStorage.getItem('registered email'),
            success: false,
            email_verify_alert: [],
            phone_verify_alert: [],
            email_verification_code_input: {
                type: 'text',
                placeholder: 'Enter your email code here',
                id: 'email_verification_code_input',
                name: 'email_verified_code'
            },
            phone_verification_code_input: {
                type: 'text',
                placeholder: 'Enter your phone code here',
                id: 'phone_verification_code_input',
                name: 'phone_verified_code'
            }
        }
    }
    render() {
        document.title = "Verification"

        if(sessionStorage.getItem('verification') === 'true'){
            if(this.state.success){
                sessionStorage.setItem('verification', 'false');
                sessionStorage.setItem('verify_success', 'true')
                return(
                    <Navigate to='/login/code_verify/success' replace></Navigate>
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
                                <span className='verification_notified'>The verification code has been sent to your {this.state.username}</span>
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
            sessionStorage.setItem('verification', "false");
            return (
                <Navigate to='/login' replace></Navigate>
            )
        }
    }

    handleChange(event){
        if(this.state.email_verify_alert !== [] && event.target.name === 'email_verified_code'){
            this.setState({email_verify_alert: []});
        }
        if(this.state.phone_verify_alert !== [] && event.target.name === 'phone_verified_code'){
            this.setState({phone_verify_alert: []});
        }
        this.setState({[event.target.name] : event.target.value});
    }

    handleResendCode(event){
        event.preventDefault();
        // axios.post("http://localhost:4001/login/code_verify/resend_code", this.state)
        axios.post("https://splendorous-dieffenbachia-f3bbe0.netlify.app/.netlify/functions/code_verify/login/code_verify/resend_code", this.state)
        .then(res => {
            if(JSON.parse(res.data).success){
                alert(`Your code has been resent to your email and phone`);
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
        this.setState({phone_verify_alert: []});
        this.setState({email_verify_alert: []});
        // axios.post("http://localhost:4001/login/code_verify", this.state)
        axios.post("https://splendorous-dieffenbachia-f3bbe0.netlify.app/.netlify/functions/code_verify/login/code_verify", this.state)
        .then(res => {
            const result = JSON.parse(res.data);
            if(result.success){
                this.setState({success: true});
                return;
            }
            
            result.error.forEach((items, key) => {
                if(items === 'Unmatched phone code'){
                    this.setState({phone_verify_alert:
                        <AlertBox id='phone_verify_alert' alert='Invalid code'></AlertBox>
                    })
                }
                if(items === 'Unmatched email code'){
                    this.setState({email_verify_alert:
                        <AlertBox id='email_verify_alert' alert='Invalid code'></AlertBox>
                    })
                }
                if(items === 'Phone code expired'){
                    this.setState({phone_verify_alert:
                        <AlertBox id='phone_verify_alert' alert='Code expired'></AlertBox>
                    })
                }
                if(items === 'Email code expired'){
                    this.setState({email_verify_alert:
                        <AlertBox id='email_verify_alert' alert='Code expired'></AlertBox>
                    })
                }            
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}
