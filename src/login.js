import React, { Component } from 'react'
import './CSS/login.css';
import './CSS/verifycode.css'
import InputType from './component/input_type';
import { Link, Navigate } from 'react-router-dom';
import BackArrow from './CSS/img/back_arrow.png';
import axios from 'axios';
import AlertBox from './component/alert_box';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            auth_alert: '',
            success: false,
            verified: undefined,
            email_input: {
                type: 'text',
                placeholder: "Enter email's address",
                id: 'email_input',
                name: 'email'
            },
            password_input: {
                type: 'password',
                placeholder: 'Enter password',
                id: 'password_input',
                name: 'password'
            }
        }

    }
    
    render() {
        document.title = "Login"

        if(!sessionStorage.getItem('loginSuccess')){
            if(!this.state.verified && this.state.verified !== undefined) {
                sessionStorage.setItem('verification', 'true')
                return (
                    <Navigate to='/login/code_verify' replace></Navigate>
                )
            }

            if(!this.state.access && this.state.access !== undefined){
                alert('Access denied!');
                window.location.reload();
                return;
            }
        
            return (
                <div className='login_authenticate'>
                    <div className='arrow_decoration'>
                        <div className='arrow_container'>
                            <div className='top arrow_background'></div>
                            <div className='middle arrow_background'></div>
                            <div className='bottom arrow_background'></div>
                        </div>
                    </div>
                    <div className='sign_in_box'>
                        <div className='sign_in_container'>
                            <h2 className='label' id='sign_in_label'>Sign In</h2>
                            <form className='form' onSubmit={(event) => this.handleSubmit(event)} id='login_form'>
                                <div className='login_box'>
                                    <div className='email_box'>
                                        <div className='email_label_wrapper'><label className='label' id='email_label'>Email</label></div>
                                        <InputType {...this.state.email_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                    <div className='password_box'>
                                        <div className='password_label_wrapper'><label className='label' id='password_label'>Password</label></div>
                                        <InputType {...this.state.password_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                </div>
                                {this.state.auth_alert}
                                <div className='forgot_password_wrapper'>
                                    <Link to='/login/forgot/password' id='forgot_password_link'>Forgot Password</Link>
                                </div>
                                <button className='login_submission' type='submit' name='login_button'>Login</button>
                                <div className='create_wrapper'>
                                    <Link to='/create_account' id='create_account_link'>Create an Account</Link>
                                </div>
                                <div className='arrow' id='turn_back_arrow'>
                                    <a href="https://smartbuyerpersona.com/"><img src={BackArrow} alt='arrow'></img></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            sessionStorage.setItem('verification', "false");
            return (
                <Navigate to='/home'></Navigate>
            )
        }
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({auth_alert: []});

        axios.post("http://localhost:4002/login/authentication", this.state)
        // axios.post("https://splendorous-dieffenbachia-f3bbe0.netlify.app/.netlify/functions/authenticate/login/authentication", this.state)
        .then(res =>{
            const ret = JSON.parse(res.data);
            if(ret.result === 'success'){
                this.setState({success: true});
                this.setState({verified: true});
                sessionStorage.setItem('loginSuccess', true);
                return;
            }

            if(ret.error === 'Incorrect password'){
                this.setState({auth_alert: 
                    <AlertBox id='auth_alert_failed' alert='Your email or your password is incorrect'></AlertBox>
                })
                return;
            }

            if(ret.error === 'Not verified'){
                this.setState({verified: false});
                return;
            }

            if(ret.error === 'Access denied'){
                this.setState({access: false});
                return;
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}
