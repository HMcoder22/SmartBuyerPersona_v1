import React, { Component } from 'react';
import Nav from './component/nav';
import ResultPageContainer from './component/result_page_container';

class ResultPage extends Component {
    state = {  } 
    render() { 
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
}
 
export default ResultPage;