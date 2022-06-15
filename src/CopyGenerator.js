import React, { Component } from 'react';
import Nav from './component/nav';
import CopyGeneratorContainer from './component/copy_generator_container';

class CopyGenerator extends Component {
    state = {  } 
    render() { 
        return (
            <div className='App'>
                <Nav></Nav>
                <CopyGeneratorContainer></CopyGeneratorContainer>
                <div className='footer'>
                     <div className='label_wrapper'><span className='label' id='label_copyright'>Copyright 2022</span></div>
                </div>
            </div>
        );
    }
}
 
export default CopyGenerator;