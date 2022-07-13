import React, { Component } from 'react';
import './CSS/login.css';
import InputType from './component/input_type';
import axios from 'axios';


export default class Verification extends Component {
    constructor(props){
        super(props);
        this.state = {
            verified_code: '',
            username: sessionStorage.getItem('registered email'),
            verification_code_input: {
                type: 'text',
                placeholder: 'Enter your code here',
                id: 'verification_code_input',
                name: 'verified_code'
            }
        }
    }
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
                <div className='code_verify_box'>
                    <div className='code_verify_container'>
                        <div className='verification_notification_box'>
                            <span className='verification_notified'>The verification code has been sent to your {this.state.username}</span>
                        </div>
                        <h2 className='label' id='code_verify_label'>Code Verification</h2>
                        <form className='form' onSubmit={(event) => this.handleSubmit(event)} id='code_verify_form'>
                            <div className='verify_box'>
                                <div className='code_verification_box'>
                                    <InputType {...this.state.verification_code_input} onChange={(event) => this.handleChange(event)}></InputType>
                                </div>
                            </div>
                            <button className='code_verify_submission' type='submit' name='verify_button'>Verify</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post("http://localhost:4000/login/code_verify", this.state)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
