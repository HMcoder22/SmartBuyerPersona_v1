import React, { Component } from 'react';
import './CSS/forgot_password.css';
import InputType from './component/input_type';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import AlertBox from './component/alert_box';

export default class ForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            success: false,
            email_alert: [],
            email_input: {
                type: 'text',
                placeholder: 'Enter your email code here',
                id: 'email_forgot_input',
                name: 'email'
            },
        }
    }
    render() {
        document.title = 'Forgot password';

        if(this.state.success){
            return (
                <Navigate to='/forgot/password/email_verification'></Navigate>
            )
        }
        return (
            <div className='forgot_password_authenticate'>
                <div className='arrow_decoration'>
                    <div className='arrow_container'>
                        <div className='top arrow_background'></div>
                        <div className='middle arrow_background'></div>
                        <div className='bottom arrow_background'></div>
                    </div>
                </div>
                <div className='forgot_password_box'>
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
            </div>
        )
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
        this.setState({email_alert: []});
    }

    handleSendCode(event){
        event.preventDefault();
        this.setState({email_alert: []});
        // axios.post("http://localhost:4000/forgot_password/send_code", this.state)
        axios.post("https://splendorous-dieffenbachia-f3bbe0.netlify.app/.netlify/functions/code_verify/forgot_password/send_code", this.state)
        .then(res => {
            const result = JSON.parse(res.data);
            console.log(result);
            if(result.success){
                this.setState({success: true});
                sessionStorage.setItem('email verification', 'true');
                sessionStorage.setItem('forgot email', this.state.email);
                return;
            }

            if(result.error === 'Email not found!'){
                this.setState({email_alert: 
                    <AlertBox id='email_forgot_alert' alert={"Cannot find " + this.state.email + ". Please try again!"}></AlertBox>
                })
            }
            if(result.error === 'Invalid email'){
                this.setState({email_alert: 
                    <AlertBox id='email_alert' alert="Invalid email"></AlertBox>
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

}
