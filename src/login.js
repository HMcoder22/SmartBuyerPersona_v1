import React, { Component } from 'react'
import './CSS/login.css';
import InputType from './component/input_type';
import { Link, Navigate } from 'react-router-dom';
import BackArrow from './CSS/img/back_arrow.png';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            success: false,
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
        if(!sessionStorage.getItem('loginSuccess') || sessionStorage.getItem('loginSuccess') === undefined){
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
        axios.post("http://localhost:4000/login/authentication", this.state)
        .then(res =>{
            if(JSON.parse(res.data).result === 'success'){
                this.setState({success: true});
                sessionStorage.setItem('loginSuccess', true);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}
