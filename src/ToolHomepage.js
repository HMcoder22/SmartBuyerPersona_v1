import React, { Component } from 'react';
import Nav from './component/nav';
import ToolsContainer from './component/tools_container';
class ToolHomePage extends Component {
    state = {  } 
    render() { 
        return (
            <div className='App'>           
                <Nav></Nav>
                <ToolsContainer></ToolsContainer>
                <div className='footer'>
                     <div className='label_wrapper'><span className='label' id='label_copyright'>Copyright 2022</span></div>
                </div>
            </div>
        );
    }
}
 
export default ToolHomePage;