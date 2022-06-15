import React, { Component } from 'react';
import Nav from './component/nav';
import PersonaContainer from './component/persona_container';
class Persona extends Component {
    state = {  } 
    render() { 
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
}
 
export default Persona;