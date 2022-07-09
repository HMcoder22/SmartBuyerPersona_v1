import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Nav from './component/nav';
import PersonaContainer from './component/persona_container';
class Persona extends Component {
    state = {  } 
    render() { 
        if(sessionStorage.getItem('loginSuccess')){
            return (
                <div className='App'>
                    <div id='persona_header'><Nav></Nav></div>
                    <PersonaContainer></PersonaContainer>
                    <div className='footer' id='persona_footer'>
                        <div className='label_wrapper'><span className='label' id='label_copyright'>Copyright 2022</span></div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <Navigate to='/login/requirement'></Navigate>
            )
        }
    }
}
 
export default Persona;