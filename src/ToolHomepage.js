import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Nav from './component/nav';
import ToolsContainer from './component/tools_container';
class ToolHomePage extends Component {
    state = {  } 
    render() {
        if(sessionStorage.getItem('loginSuccess')){
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
        else{
            return(
                <Navigate to='/login/requirement'></Navigate>
            )
        }
    }
}
 
export default ToolHomePage;