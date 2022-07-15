import React, { Component } from 'react';
import './CSS/login.css';
import InputType from './component/input_type';
import AlertBox from './component/alert_box';
import { Link, Navigate} from 'react-router-dom';
import axios from 'axios';

export default class CreateAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            re_password: '',
            fname: '',
            birthdate: '',
            bname: '',              // Business name
            phone: '',              // Phone number
            authorized_code: this.generateRandomToken(),
            email_alert: [],
            repass_alert: [],
            pass_alert: [],
            birthdate_alert: [],
            bname_alert: [],
            phone_alert: [],
            fname_alert: [],
            success: false,
            full_name_input:{
                type: 'text',
                placeholder: "Enter your full name",
                id: 'full_name_input',
                name: 'fname'
            },
            birthdate_input: {
                type: 'text',
                placeholder: "Enter your birthdate",
                id: 'birthdate_input',
                name: 'birthdate'
            },
            email_input: {
                type: 'text',
                placeholder: "Enter email's address",
                id: 'email_input',
                name: 'email'
            },
            bname_input: {
                type: 'text',
                placeholder: "Enter your business's name here",
                id: 'bname_input',
                name: 'bname'
            },
            phone_input: {
                type: 'text',
                placeholder: "Enter your phone number here",
                id: 'phone_number_input',
                name: 'phone'
            },
            password_input: {
                type: 'password',
                placeholder: 'Enter password',
                id: 'password_input',
                name: 'password'
            },
            reenter_password_input: {
                type: 'password',
                placeholder: "Re-enter your password",
                id: 'reenter_password_input',
                name: 're_password'
            }
        };
    }
    render() {
        document.title = "Create an account"

        if(this.state.success){
            return (
                <Navigate to='/login/code_verify' replace></Navigate>
            )
        }
        return (
            <div className='create_account_authenticate'>
                <div className='arrow_decoration'>
                    <div className='arrow_container'>
                        <div className='top arrow_background'></div>
                        <div className='middle arrow_background'></div>
                        <div className='bottom arrow_background'></div>
                    </div>
                </div>
                <div className='sign_in_box'>
                        <div className='create_container'>
                            <h2 className='label' id='create_account_label'>Create an account</h2>
                            <form className='form' onSubmit={(event) => this.handleSubmit(event)} id='create_account_form'>
                                <div className='create_account_box'>
                                    <div className='name_box'>
                                        <div className='name_label_wrapper'>
                                            <label className='label' id='name_label'>Full Name</label>
                                            <label className='asterisk'>*</label>
                                        </div>
                                        <InputType {...this.state.full_name_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                    {this.state.fname_alert}
                                    <div className='birthdate_box'>
                                        <div className='birthdate_label_wrapper'><label className='label' id='birthdate_label'>Birthdate (YYYY-MM-DD)</label></div>
                                        <InputType {...this.state.birthdate_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                    {this.state.birthdate_alert}
                                    <div className='email_box'>
                                        <div className='email_label_wrapper'>
                                            <label className='label' id='email_label'>Email</label>
                                            <label className='asterisk'>*</label>
                                        </div>
                                        <InputType {...this.state.email_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                    {this.state.email_alert}
                                    <div className='bname_box'>
                                        <div className='bname_label_wrapper'>
                                            <label className='label' id='bname_label'>Business Name</label>
                                            <label className='asterisk'>*</label>
                                        </div>
                                        <InputType {...this.state.bname_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                    {this.state.bname_alert}
                                    <div className='phone_number_box'>
                                        <div className='phone_number_label_wrapper'>
                                            <label className='label' id='phone_number_label'>Phone Number</label>
                                            <label className='asterisk'>*</label>
                                        </div>
                                        <InputType {...this.state.phone_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                    {this.state.phone_alert}
                                    <div className='password_box'>
                                        <div className='password_label_wrapper'>
                                            <label className='label' id='password_label'>Password</label>
                                            <label className='asterisk'>*</label>
                                        </div>
                                        <InputType {...this.state.password_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                    {this.state.pass_alert}
                                    <div className='password_reenter_box'>
                                        <div className='password_reenter_label_wrapper'>
                                            <label className='label' id='password_reenter_label'>Re-enter Password</label>
                                            <label className='asterisk'>*</label>
                                        </div>
                                        <InputType {...this.state.reenter_password_input} onChange={(event) => this.handleChange(event)}></InputType>
                                    </div>
                                    {this.state.repass_alert}
                                </div>
                                <div className='forgot_password_wrapper'>
                                    <Link to='/login/forgot/password' id='forgot_password_link'>Forgot Password</Link>
                                </div>
                                <button className='create_account_submission' type='submit' name='login_button'>Sign Up</button>
                                <div className='login_wrapper'>
                                    <Link to='/login' id='login_link'>Sign In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }

    handleChange(event){
        // Reset alert
        if(this.state.email_alert !== [] && event.target.name === "email"){
            this.setState({email_alert: []});
        }
        if(this.state.repass_alert !== [] && event.target.name === "re_password"){
            this.setState({repass_alert: []});
        }
        if(this.state.pass_alert !== [] && event.target.name === "password"){
            this.setState({pass_alert: []});
        }
        if(this.state.birthdate_alert !== [] && event.target.name === "birthdate"){
            this.setState({birthdate_alert: []});
        }
        if(this.state.phone_alert !== [] && event.target.name === "phone"){
            this.setState({phone_alert: []});
        }
        if(this.state.bname_alert !== [] && event.target.name === "bname"){
            this.setState({bname_alert: []});
        }
        if(this.state.fname_alert !== [] && event.target.name === "fname"){
            this.setState({fname_alert: []});
        }
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        // axios.post("http://localhost:4000/login/sign_up", this.state)
        axios.post("https://splendorous-dieffenbachia-f3bbe0.netlify.app/.netlify/functions/create_account/login/sign_up", this.state)
        .then(res =>{
            const result = JSON.parse(res.data);
            if(result.success){
                sessionStorage.setItem('authorized token', this.state.authorized_code);
                sessionStorage.setItem('registered email', this.state.email);
                sessionStorage.setItem('verification', 'true');
                this.setState({success : true});
            }
            else{
                // Only one error
                if(!Array.isArray(result.error)){
                    // List of all possible errors client can encounter
                    if(result.error === "Unavailable email"){
                        this.setState({email_alert :                                     
                            <AlertBox id='email_alert' alert='Email already registered'></AlertBox>
                        })
                    }
                    return;
                }
                console.log(result.error);

                result.error.forEach((items, key)=>{
                    if(items === "Unmatched password"){
                        this.setState({repass_alert: 
                            <AlertBox id='reenter_password_alert' alert='Your password is not matched'></AlertBox>
                        })
                    }
    
                    if(items === "Missing field"){
                        if(this.state.fname === ''){
                            this.setState({fname_alert:
                                <AlertBox id='fname_alert' alert='Please enter your full name'></AlertBox>
                            })
                        }
                        if(this.state.email === ''){
                            this.setState({email_alert: 
                                <AlertBox id='email_alert' alert='Please enter email'></AlertBox>
                            })
                        }
                        if(this.state.password === ''){
                            this.setState({pass_alert: 
                                <AlertBox id='password_alert' alert='Please enter password'></AlertBox>
                            })
                        }
                        if(this.state.re_password === ''){
                            this.setState({repass_alert: 
                                <AlertBox id='reenter_password_alert' alert='Please enter re-enter password'></AlertBox>
                            })
                        }
                        if(this.state.phone === ''){
                            this.setState({phone_alert: 
                                <AlertBox id='phone_alert' alert='Please enter your phone number'></AlertBox>
                            })
                        }
                        if(this.state.bname === ''){
                            this.setState({bname_alert:
                                <AlertBox id='bname_alert' alert='Please enter your business name'></AlertBox>
                            })
                        }
                    }
    
                    if(items === "Invalid email"){
                        this.setState({email_alert:
                            <AlertBox id='email_alert' alert='Invalid email'></AlertBox>
                        })
                    }

                    if(items === 'Invalid date'){
                        this.setState({birthdate_alert:
                            <AlertBox id='birthdate_alert' alert='Invalid date. Please follows YYYY-MM-DD format'></AlertBox>
                        })
                    }

                    if(items === 'Invalid phone number'){
                        this.setState({phone_alert: 
                            <AlertBox id='phone_alert' alert="Invalid phone number"></AlertBox>
                        })
                    }

                    if(items === 'Weak password'){
                        
                        this.setState({pass_alert:[
                            <AlertBox id='password_alert' alert="Please make sure:" key='1'></AlertBox>,
                            <AlertBox id='password_alert' alert="1. Minimum length: 12" key='2'></AlertBox>,
                            <AlertBox id='password_alert' alert="2. Minimum uppercases: 1" key='3'></AlertBox>,
                            <AlertBox id='password_alert' alert="3. Minimum lowercases: 1" key='4'></AlertBox>,
                            <AlertBox id='password_alert' alert="4. Minimum numbers: 1" key='5'></AlertBox>,
                            <AlertBox id='password_alert' alert="5. Minimum symbols: 1" key='6'></AlertBox>,
                        ]})
                    }
                })  
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    getRandomNumber(max){
        return Math.floor(Math.random() * max);
    }

    generateRandomToken(){
        var token = 0;
        for(let i = 0; i < 9; i++){
            token += this.getRandomNumber(10);
            token *= 10;
        }
        return token + this.getRandomNumber(10);
    }
}
