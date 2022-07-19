import React, { Component } from 'react';
import InputType from './component/input_type';
import './CSS/reset_password.css'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import AlertBox from './component/alert_box';

export default class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: sessionStorage.getItem('forgot email'),
            success: false,
            password: '',
            reenter_password: '',
            password_alert: [],
            repass_alert: [],
            password_input: {
                type: 'password',
                placeholder: 'Enter your new password',
                id: 'reset_password_input',
                name: 'password'
            },
            repass_input: { 
                type: 'password',
                placeholder: 'Confirm your new password',
                id: 'reenter_reset_password_input',
                name: 'reenter_password'
            }
        }
    }
    render() {
        if(sessionStorage.getItem('reset password') === 'true'){
            if(this.state.success){
                alert('Your password has been reset successfully')
                sessionStorage.setItem('reset password', 'false');
                sessionStorage.setItem('forgot email', "");
                return(
                    <Navigate to='/login'></Navigate>
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
                    <div className='reset_password_box'>
                        <div className='reset_password_container'>
                            <h2 className='label' id='reset_password_label'>Reset Password</h2>
                            <form className='form' onSubmit={(event) => this.handleReset(event)} id='reset_password_form'>
                                <div className='reset_pass_box'>
                                    <div className='reset_password_label_wrapper'><span className='label' id='new_password_label'>New password</span></div>
                                    <div className='password_container'>
                                        <InputType {...this.state.password_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                </div>
                                {this.state.password_alert}
                                <div className='reset_pass_box'>
                                    <div className='reset_password_label_wrapper'><span className='label' id='reenter_password_label'>Confirm password</span></div>
                                    <div className='reenter_password_container'>
                                        <InputType {...this.state.repass_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                </div>
                                {this.state.repass_alert}                      
                                <button className='reset_password_submission' type='submit' name='reset_password_button'>Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <Navigate to='/login' replace></Navigate>
            )
        }
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
        
        if(this.state.password_alert !== [] && event.target.name === 'password')
            this.setState({password_alert: []});
        if(this.state.repass_alert !== [] && event.target.name === 'reenter_password')
            this.setState({repass_alert: []});
    }
    
    handleReset(event){
        event.preventDefault();

        // axios.post("http://localhost:4004/reset", this.state)
        axios.post("https://splendorous-dieffenbachia-f3bbe0.netlify.app/.netlify/functions/reset_password/reset", this.state)
        .then(res => {
            const result = JSON.parse(res.data);
            // Successfully reset password
            if(result.success){
                this.setState({success: true});
                sessionStorage.setItem('reset success', "true");
            }

            // Handling errors
            if(result.error === 'Unmatched password'){
                this.setState({repass_alert:
                    <AlertBox id='unmatched_password_alert' alert='Please enter re-enter password correctly'></AlertBox>
                })
            }
            if(result.error === 'Old password'){
                this.setState({password_alert:
                    <AlertBox id='password_reset_alert' alert='Old password. Please enter your new password'></AlertBox>
                })
            }
            if(result.error === 'Weak password'){
                this.setState({password_alert:[
                    <AlertBox id='password_reset_alert' alert="Please make sure:" key='1'></AlertBox>,
                    <AlertBox id='password_reset_alert' alert="1. Minimum length: 12" key='2'></AlertBox>,
                    <AlertBox id='password_reset_alert' alert="2. Minimum uppercases: 1" key='3'></AlertBox>,
                    <AlertBox id='password_reset_alert' alert="3. Minimum lowercases: 1" key='4'></AlertBox>,
                    <AlertBox id='password_reset_alert' alert="4. Minimum numbers: 1" key='5'></AlertBox>,
                    <AlertBox id='password_reset_alert' alert="5. Minimum symbols: 1" key='6'></AlertBox>,
                ]})
            }
            if(result.error === 'update failed'){
                alert('Woops, something went wrong! Please try again later!');
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}
