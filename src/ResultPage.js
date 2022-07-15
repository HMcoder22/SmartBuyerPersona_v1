import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Nav from './component/nav';
import ResultPageContainer from './component/result_page_container';

class ResultPage extends Component {
    state = {  } 
    render() {
        document.title = "Result"

        if(sessionStorage.getItem('loginSuccess')){
            return (
                <div className='App'>
                    <Nav></Nav>
                    <ResultPageContainer></ResultPageContainer>
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
 
export default ResultPage;